import React, { useEffect, useRef } from 'react';

// --- Math & Utility Helpers ---
const pi2 = 2 * Math.PI;

function dtr(deg: number): number {
  return (deg * Math.PI) / 180;
}

function rnd(a: number, b?: number): number {
  if (arguments.length === 1) return Math.random() * a;
  return a + Math.random() * (b as number - a);
}

function rnd_sign(): number {
  return Math.random() > 0.5 ? 1 : -1;
}

/**
 * Waves React Component
 * Renders a canvas with animating bezier curves.
 */
interface WavesProps {
  rotation?: number;
  wavesCount?: number;
  width?: number;
  hue?: number[]; 
  amplitude?: number;
  background?: boolean;
  speed?: number[];
  debug?: boolean;
  className?: string;
}

type Engine = {
  ctx: CanvasRenderingContext2D | null;
  waves: any[];
  hue: number;
  hueFw: boolean;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  radius: number;
  scale: number;
  color: string;
  animationId: number | null;
};

const Waves: React.FC<WavesProps> = ({
  rotation = 45,
  wavesCount = 3,
  width = 100, // Used for the queue length of trails, not pixel width
  hue = [11, 14],
  amplitude = 0.5,
  background = true,
  speed = [0.004, 0.008],
  debug = false,
  className = "",
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const engineRef = useRef<Engine>({
    ctx: null,
    waves: [],
    hue: hue[0],
    hueFw: true,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
    radius: 0,
    scale: 1,
    color: '',
    animationId: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const engine = engineRef.current;

    if (!canvas || !wrapper) return;

    engine.ctx = canvas.getContext('2d');

    // Guard: if getContext failed, abort setup
    if (!engine.ctx) return;
    const ctx = engine.ctx;

    // --- Classes (Internal Logic) ---

    class Line {
      angle: number[];
      color: string;
      constructor(wave: any) {
        this.angle = [
          Math.sin((wave.angle[0] += wave.speed[0])),
          Math.sin((wave.angle[1] += wave.speed[1])),
          Math.sin((wave.angle[2] += wave.speed[2])),
          Math.sin((wave.angle[3] += wave.speed[3])),
        ];
        this.color = engine.color;
      }
    }

    class Wave {
      lines: Line[];
      angle: number[];
      speed: number[];
      constructor() {
        this.lines = [];
        this.angle = [rnd(pi2), rnd(pi2), rnd(pi2), rnd(pi2)];
        this.speed = [
          rnd(speed[0], speed[1]) * rnd_sign(),
          rnd(speed[0], speed[1]) * rnd_sign(),
          rnd(speed[0], speed[1]) * rnd_sign(),
          rnd(speed[0], speed[1]) * rnd_sign(),
        ];
      }

      update() {
        const lines = this.lines;
        // Add new line (head of the wave)
        lines.push(new Line(this));
        // Remove old line (tail of the wave) to maintain trail length
        if (lines.length > width) {
          lines.shift();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const { radius, centerX: x, centerY: y } = engine;
        const radius3 = radius / 3;
        const rot = dtr(rotation);

        this.lines.forEach((line, i) => {
          if (debug && i > 0) return;

          const angle = line.angle;

          // Calculate bezier points
          const x1 = x - radius * Math.cos(angle[0] * amplitude + rot);
          const y1 = y - radius * Math.sin(angle[0] * amplitude + rot);
          const x2 = x + radius * Math.cos(angle[3] * amplitude + rot);
          const y2 = y + radius * Math.sin(angle[3] * amplitude + rot);
          const cpx1 = x - radius3 * Math.cos(angle[1] * amplitude * 2);
          const cpy1 = y - radius3 * Math.sin(angle[1] * amplitude * 2);
          const cpx2 = x + radius3 * Math.cos(angle[2] * amplitude * 2);
          const cpy2 = y + radius3 * Math.sin(angle[2] * amplitude * 2);

          ctx.strokeStyle = debug ? '#000' : line.color;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
          ctx.stroke();

          // Debug guides
          if (debug) {
            ctx.strokeStyle = '#000';
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(cpx1, cpy1);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(cpx2, cpy2);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      }
    }

    // --- Main Logic ---

    const updateColor = () => {
      // Original rainbow logic replaced with Brand Color logic
      // The login page uses a burnt orange: approx rgb(214, 96, 69)
      
      // We can still oscillate the hue slightly to keep it alive, 
      // or just fixed opacity pulsing. 
      // Let's pulse the opacity slightly to make it breathe.
      
      engine.hue += engine.hueFw ? 0.01 : -0.01;
      if (engine.hue > 10 && engine.hueFw) {
        engine.hue = 10;
        engine.hueFw = false;
      } else if (engine.hue < 0 && !engine.hueFw) {
        engine.hue = 0;
        engine.hueFw = true;
      }

      // Fixed RGB (Burnt Orange) with low opacity for layering
      // rgb(214, 96, 69) matches the button color
      engine.color = `rgba(214, 96, 69, 0.1)`;
    };

    const drawBackground = () => {
      // use local ctx (non-null)
      const gradient = ctx.createLinearGradient(0, 0, 0, engine.height);
      const bgColor = '#fbfaf9';
      gradient.addColorStop(0, bgColor);
      gradient.addColorStop(1, bgColor);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, engine.width, engine.height);
    };

    const resize = () => {
      const w = wrapper.offsetWidth;
      const h = wrapper.offsetHeight;
      
      engine.scale = window.devicePixelRatio || 1;
      engine.width = w * engine.scale;
      engine.height = h * engine.scale;
      
      canvas.width = engine.width;
      canvas.height = engine.height;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Ensure strokes scale crisply with DPR
      if (engine.ctx) {
        engine.ctx.lineWidth = engine.scale;
      }

      // Calculate diagonal radius
      engine.radius = Math.sqrt(Math.pow(engine.width, 2) + Math.pow(engine.height, 2)) / 2;
      engine.centerX = engine.width / 2;
      engine.centerY = engine.height / 2;
    };

    const render = () => {
      updateColor();
      // use local ctx (non-null)
      ctx.clearRect(0, 0, engine.width, engine.height);

      if (debug) {
        ctx.beginPath();
        ctx.strokeStyle = '#f00';
        ctx.arc(engine.centerX, engine.centerY, engine.radius, 0, pi2);
        ctx.stroke();
      }

      if (background) {
        drawBackground();
      }

      engine.waves.forEach((wave) => {
        wave.update();
        wave.draw(ctx);
      });

      engine.animationId = window.requestAnimationFrame(render);
    };

    // --- Initialization ---
    
    resize();
    
    // Initialize waves
    engine.waves = [];
    for (let i = 0; i < wavesCount; i++) {
      engine.waves.push(new Wave());
    }

    // Preload (update waves loop to fill the screen immediately)
    for (let i = 0; i < wavesCount; i++) {
        updateColor();
        for (let j = 0; j < width; j++) {
            engine.waves[i].update();
        }
    }

    // Start loop
    render();

    // Event Listeners
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (engine.animationId !== null) {
        window.cancelAnimationFrame(engine.animationId);
        engine.animationId = null;
      }
    };
  }, [rotation, wavesCount, width, hue, amplitude, background, speed, debug]);

  return (
    <div 
      ref={wrapperRef} 
      className={`w-full h-full absolute top-0 left-0 overflow-hidden bg-[#fbfaf9] ${className}`}
    >
      <canvas ref={canvasRef} className="block" style={{opacity:.5}} />
    </div>
  );
};

export default Waves;