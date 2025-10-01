"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Home,
  Layers,
  Square,
  PanelsTopLeft,
  Utensils,
  Snowflake,
  WashingMachine,
  Lightbulb,
  AirVent,
  Thermometer,
  Zap,
  Refrigerator,
} from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const categories = [
  {
    title: "2. Izolacija objekta",
    icon: Thermometer,
    items: [
      { label: "Zunanji zidovi", icon: Home },
      { label: "Podstrešje/Strop", icon: Layers },
      { label: "Tla", icon: Square },
      { label: "Okna", icon: PanelsTopLeft },
    ],
  },
  {
    title: "3. Večji porabniki energije",
    icon: Refrigerator,
    items: [
      { label: "Priprava živil", icon: Utensils },
      { label: "Hlajenje živil", icon: Snowflake },
      { label: "Nega perila", icon: WashingMachine },
      { label: "Razvetljava", icon: Lightbulb },
      { label: "Klimatska naprava", icon: AirVent },
    ],
  },
];

const marks = ["Brez", "Dotrajano", "Starejše", "Solidno", "Novo"];

export default function EnergyCalculator() {
  const [values, setValues] = useState({});

  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  const getScore = () => {
    const scores = categories.map((cat) => {
      const keys = cat.items.map((i) => i.label);
      const current = keys.reduce((sum, key) => sum + (values[key] || 0), 0);
      const max = keys.length * 5;
      return { title: cat.title, icon: cat.icon, current, max };
    });

    const totalCurrent = scores.reduce((a, s) => a + s.current, 0);
    const totalMax = scores.reduce((a, s) => a + s.max, 0);

    return {
      totalCurrent,
      totalMax,
      percent: totalMax ? Math.round((totalCurrent / totalMax) * 100) : 0,
      scores,
    };
  };

  const score = getScore();

  return (
    <>
      <div className='relative flex justify-center items-center  '>
   <DotLottieReact
      src="./energy.lottie"
      loop
      autoplay
      style={{ width:"500px"}}
   />
    </div>
    <div className=" max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {/* Leva stran - kategorije */}
      <div className="md:col-span-2 space-y-6">
        {categories.map((cat) => (
          <Card key={cat.title} className="p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <cat.icon className="w-5 h-5 text-[var(--primary)]" /> {cat.title}
            </h2>
            <CardContent className="space-y-10">
              {cat.items.map(({ label, icon: Icon }) => (
                <div key={label} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[var(--primary)]" />
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                  <Slider
                    defaultValue={[3]}
                    max={5}
                    min={1}
                    step={1}
                    onValueChange={(val) => handleChange(label, val[0])}
                  />
                  <div className="flex justify-between text-xs mt-1">
                    {marks.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desna stran - rezultati */}
      <div className="bg-[#f1f0e9] p-6 rounded-2xl flex flex-col justify-between relative">
          
        <div className="space-y-6">
          {score.scores.map(({ title, icon: Icon, current, max }) => (
            <div key={title} className="flex items-center gap-3 ">
              <Icon className="w-5 h-5" />
              <span className="font-semibold flex-1">{title}</span>
              <span className="font-bold">{current} / {max}</span>
            </div>
          ))}
        </div>
         <div className="text-center mt-4">
            <p className="text-4xl font-bold text-[var(--primary)]">{score.percent}%</p>
            <p className="text-sm text-gray-600">
              Skupna ocena ({score.totalCurrent} / {score.totalMax})
            </p>
          </div>
         
        <div className="text-center mt-6 z-1">
          <Button className="w-full">Zaključi test</Button>
          <p className="text-xs text-gray-500 mt-2">
            Zadnji test {new Date().toLocaleDateString("sl-SI")}
          </p>
        </div>
    
      </div>
    </div>
    </>
  );
}
