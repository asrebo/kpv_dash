"use client"



import { useEffect, useState } from "react";

interface ThermostatProps {
  targetTemp?: number;
  minTemp?: number;
  maxTemp?: number;
}

const Temp = ({ 
  targetTemp = 23, 
  minTemp = 0, 
  maxTemp = 40 
}: ThermostatProps) => {
  const [currentTemp, setCurrentTemp] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate temperature number
    const duration = 2000;
    const steps = 60;
    const increment = targetTemp / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCurrentTemp(targetTemp);
        clearInterval(timer);
      } else {
        setCurrentTemp(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    // Animate progress arc
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetTemp) {
          clearInterval(progressTimer);
          return targetTemp;
        }
        return prev + 0.5;
      });
    }, duration / (targetTemp * 2));

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [targetTemp]);

  const size = 200;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate progress (0 to 1)
  const progressRatio = Math.min(progress / maxTemp, 1);
  const offset = circumference * (1 - progressRatio); // Full circle

  // Create gradient stops based on temperature
  const gradientId = "tempGradient";

  // Generate tick marks
  const ticks = [];
  const tickCount = 120;
  for (let i = 0; i < tickCount; i++) {
    const angle = (i / tickCount) * 360; // Full circle
    const radians = (angle * Math.PI) / 180;
    const tickLength = i % 10 === 0 ? 12 : 6;
    const innerRadius = radius - 15;
    const outerRadius = innerRadius - tickLength;
    
    const x1 = size / 2 + innerRadius * Math.cos(radians);
    const y1 = size / 2 + innerRadius * Math.sin(radians);
    const x2 = size / 2 + outerRadius * Math.cos(radians);
    const y2 = size / 2 + outerRadius * Math.sin(radians);
    
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={i % 5 === 0 ? 2 : 1}
        opacity={0.6}
      />
    );
  }

  return (
    <div className="card flex items-center justify-center  bg-background">
      <div className="animate-scale-in">
        <svg 
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Define animated gradient */}
          <defs>
            <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
              <stop 
                offset="0%" 
                stopColor="hsl(var(--cold))"
              >
                <animate
                  attributeName="stop-color"
                  values="hsl(var(--cold));hsl(var(--cold));hsl(var(--cool))"
                  dur="2s"
                  fill="freeze"
                />
              </stop>
              <stop 
                offset={`${Math.min(progressRatio * 100, 100)}%`}
                stopColor="hsl(var(--cold))"
              >
                <animate
                  attributeName="stop-color"
                  values="hsl(var(--cold));hsl(var(--cool));hsl(var(--warm));hsl(var(--hot))"
                  dur="2s"
                  fill="freeze"
                />
              </stop>
              <stop 
                offset="100%" 
                stopColor="hsl(var(--hot))"
              >
                <animate
                  attributeName="stop-color"
                  values="hsl(var(--cold));hsl(var(--warm));hsl(var(--hot))"
                  dur="2s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            opacity={0.2}
          />

          {/* Animated progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />

          {/* Inner white circle with tick marks */}
          <g className="transform rotate-90" style={{ transformOrigin: `${size / 2}px ${size / 2}px` }}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius - strokeWidth - 10}
              fill="#fefefe"
              stroke="hsl(var(--border))"
              strokeWidth={1}
            />
            
            {/* Tick marks */}
            <g className="text-foreground">
              {ticks}
            </g>

            {/* Temperature display */}
            <text
              x={size / 2}
              y={size / 2 }
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground"
              style={{
                fontSize: "60px",
                fontWeight: 700,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {currentTemp}
            </text>
            <text
              x={size / 2 + 45}
              y={size / 2 - 20}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground"
              style={{
                fontSize: "24px",
                fontWeight: 400,
              }}
            >
              °C
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Temp;