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

export default function Opomnik() {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle> <BellRing className='text-[var(--primary)] inline mx-2'/>Opomnik</CardTitle>
        <CardDescription>Nastavi opomnik</CardDescription>
        <div className='text-2xl font-bold'>{enabled && (value +" m3")}</div>
        <CardAction>
          <Switch onCheckedChange={setEnabled} />
        </CardAction>
      </CardHeader>
      <CardContent>
        {enabled ? (
          <Slider onValueChange={setValue} />
        ) : (
          <CardDescription >Opomnik je izklopljen</CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
