'use client';

import { useState } from 'react';
import { BellRing } from 'lucide-react';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

export default function Opomnik({ w } : { w?: "small" | "large" }) {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue ] = useState(0);

  return (
    <Card className={w === "small" ? 'w-64 md:w-80 lg:w-96' : 'flex-1'}>
      <CardHeader>
        <CardTitle> <BellRing className='text-[var(--primary)] inline mx-2'/>Opomnik</CardTitle>
        <CardDescription>Nastavi opomnik</CardDescription>
        <div className='text-2xl font-bold'>{enabled && (value +" kwh")}</div>
        <CardAction>
          <Switch onCheckedChange={setEnabled} />
        </CardAction>
      </CardHeader>
      <CardContent>
        {enabled ? (
          <Slider onValueChange={(e) => setValue(e[0])} />
        ) : (
          <CardDescription >Opomnik je izklopljen</CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
