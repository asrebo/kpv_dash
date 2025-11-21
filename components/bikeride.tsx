'use client';


import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';


export const description = 'A stacked bar chart with a legend';
const chartData = [
  { month: 'April', avto: 286, kolo: 80, javni_prevoz: 145 },
  { month: 'Maj', avto: 305, kolo: 200, javni_prevoz: 178 },
  { month: 'Junij', avto: 237, kolo: 120, javni_prevoz: 132 },
  { month: 'Julij', avto: 873, kolo: 190, javni_prevoz: 98 },
  { month: 'Avgust', avto: 409, kolo: 130, javni_prevoz: 156 },
  { month: 'September', avto: 214, kolo: 140, javni_prevoz: 189 },
  { month: 'Oktober', avto: 320, kolo: 150, javni_prevoz: 170 },
  { month: 'November', avto: 290, kolo: 140, javni_prevoz: 160 },
];

const chartData1 = [
  { month: 'April', avto: 142, kolo: 195, javni_prevoz: 167 },
  { month: 'Maj', avto: 278, kolo: 285, javni_prevoz: 142 },
  { month: 'Junij', avto: 195, kolo: 134, javni_prevoz: 198 },
  { month: 'Julij', avto: 289, kolo: 67, javni_prevoz: 176 },
  { month: 'Avgust', avto: 256, kolo: 218, javni_prevoz: 134 },
  { month: 'September', avto: 223, kolo: 156, javni_prevoz: 205 },
  { month: 'Oktober', avto: 240, kolo: 180, javni_prevoz: 190 },
  { month: 'November', avto: 260, kolo: 170, javni_prevoz: 180 },
];

const chartData2 = [
  { month: 'April', avto: 168, kolo: 92, javni_prevoz: 183 },
  { month: 'Maj', avto: 291, kolo: 178, javni_prevoz: 156 },
  { month: 'Junij', avto: 215, kolo: 145, javni_prevoz: 171 },
  { month: 'Julij', avto: 124, kolo: 203, javni_prevoz: 194 },
  { month: 'Avgust', avto: 247, kolo: 136, javni_prevoz: 148 },
  { month: 'September', avto: 189, kolo: 127, javni_prevoz: 167 },
  { month: 'Oktober', avto: 210, kolo: 160, javni_prevoz: 150 },
  { month: 'November', avto: 230, kolo: 150, javni_prevoz: 160 },
];

const chartData3 = [
  { month: 'April', avto: 155, kolo: 20, javni_prevoz: 89 },
  { month: 'Maj', avto: 312, kolo: 3, javni_prevoz: 67 },
  { month: 'Junij', avto: 201, kolo: 30, javni_prevoz: 78 },
  { month: 'Julij', avto: 96, kolo: 12, javni_prevoz: 103 },
  { month: 'Avgust', avto: 234, kolo: 4, javni_prevoz: 72 },
  { month: 'September', avto: 268, kolo: 15, javni_prevoz: 94 },
  { month: 'Oktober', avto: 180, kolo: 25, javni_prevoz: 95 },
  { month: 'November', avto: 200, kolo: 30, javni_prevoz: 110 },
];
const chartConfig = {
  avto: {
    label: 'Avtomobil',
    color: 'var(--chart-1)',
  },
  kolo: {
    label: 'Kolo',
    color: 'var(--chart-2)',
  },
  javni_prevoz: {
    label: 'Javni prevoz',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

export default function BikerRide() {
  return (
    <>
      <div className="relative flex justify-center items-center  mb-4">
        <DotLottieReact
          src="./bicycle.lottie"
          loop
          autoplay
          style={{ width: '500px' }}
        />
      </div>
      <div className="p-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 w-full">
        <div className="text-center  col-span-3">

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Uporaba okolju prijaznih načinov mobilnosti
          </h1>
          <p className="text-gray-600">
            Pridružite se nam pri pozitivnem vplivu na naše okolje
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className='flex flex-col'>  <Image src="/car.svg" alt="Revenue" width={40} height={40} />Avto</div>
            <div className='flex flex-col'>  <Image src="/bike.svg" alt="Revenue" width={40} height={40} />Kolo</div>
            <div className='flex flex-col'>  <Image src="/bus.svg" alt="Revenue" width={40} height={40} />Javni prevoz</div>

          </div>
        </div>
        <Card className=" p-6 flex flex-col relative  col-span-3 bg-[#ffffff7d]">
          <CardHeader>
            <CardTitle className="text-xl flex gap-2">
              <Avatar className="">
                <AvatarImage src="/4.png" />
              </Avatar>
              Tomaž Zajc
            </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
            <CardAction className='p-4 bg-[var(--chart-2)] rounded text-white font-semibold'><span className='font-thin'>prejetih</span> 12 <Image src="/coin.png" alt="Revenue" width={20} height={20} className="inline" /></CardAction>
          </CardHeader>
          <CardContent className="flex flex-1 ">
            <div className="flex-1">
              <ChartContainer
                config={chartConfig}
                className=" h-[150px] w-full"
              >
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar
                    dataKey="avto"
                    stackId="a"
                    fill="var(--chart-2)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="kolo"
                    stackId="a"
                    fill="var(--chart-5)"
                    radius={[4, 4, 0, 0]}
                  />
                    <Bar
                    dataKey="javni_prevoz"
                    stackId="a"
                    fill="var(--chart-4)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card className=" p-6 flex flex-col relative  col-span-3 bg-[#ffffff7d]">
          <CardHeader>
            <CardTitle className="text-xl flex gap-2">
              <Avatar className="">
                <AvatarImage src="/3.png" />
              </Avatar>
              Anja Oblak
            </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
            <CardAction className='p-4 bg-[var(--chart-2)] rounded text-white font-semibold'><span className='font-thin'>prejetih</span> 21 <Image src="/coin.png" alt="Revenue" width={20} height={20} className="inline" /></CardAction>
          </CardHeader>
          <CardContent className="flex flex-1 ">
            <div className="flex-1">
              <ChartContainer
                config={chartConfig}
                className=" h-[150px] w-full"
              >
                <BarChart accessibilityLayer data={chartData1}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar
                    dataKey="avto"
                    stackId="a"
                    fill="var(--chart-2)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="kolo"
                    stackId="a"
                    fill="var(--chart-5)"
                    radius={[4, 4, 0, 0]}
                  />
                        <Bar
                    dataKey="javni_prevoz"
                    stackId="a"
                    fill="var(--chart-4)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card className=" p-6 flex flex-col relative  col-span-3 bg-[#ffffff7d]">
          <CardHeader>
            <CardTitle className="text-xl flex gap-2">
              <Avatar className="">
                <AvatarImage src="/2.png" />
              </Avatar>
              Luka Mlakar
            </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
            <CardAction className='p-4 bg-[var(--chart-2)] rounded text-white font-semibold'><span className='font-thin'>prejetih</span> 13 <Image src="/coin.png" alt="Revenue" width={20} height={20} className="inline" /></CardAction>
          </CardHeader>
          <CardContent className="flex flex-1 ">
            <div className="flex-1">
              <ChartContainer
                config={chartConfig}
                className=" h-[150px] w-full"
              >
                <BarChart accessibilityLayer data={chartData2}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar
                    dataKey="avto"
                    stackId="a"
                    fill="var(--chart-2)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="kolo"
                    stackId="a"
                    fill="var(--chart-5)"
                    radius={[4, 4, 0, 0]}
                  />
                        <Bar
                    dataKey="javni_prevoz"
                    stackId="a"
                    fill="var(--chart-4)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card className=" p-6 flex flex-col relative  col-span-3 bg-[#ffffff7d]">
          <CardHeader>
            <CardTitle className="text-xl flex gap-2">
              <Avatar className="">
                <AvatarImage src="/1.png" />
              </Avatar>
              Maruša Korošec
            </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
            <CardAction className='p-4 bg-[var(--chart-2)] rounded text-white font-semibold'><span className='font-thin'>prejetih</span> 6 <Image src="/coin.png" alt="Revenue" width={20} height={20} className="inline" /></CardAction>
          </CardHeader>
          <CardContent className="flex flex-1 ">
            <div className="flex-1">
              <ChartContainer
                config={chartConfig}
                className=" h-[150px] w-full"
              >
                <BarChart accessibilityLayer data={chartData3}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar
                    dataKey="avto"
                    stackId="a"
                    fill="var(--chart-2)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="kolo"
                    stackId="a"
                    fill="var(--chart-5)"
                    radius={[0, 0, 0, 0]}
                  />
                        <Bar
                    dataKey="javni_prevoz"
                    stackId="a"
                    fill="var(--chart-4)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Drawer>
          <div className="col-span-3 flex justify-items-center">
            <DrawerTrigger className="bg-[#176b6d] p-3 w-[200]  text-white  rounded-full">
              Dodaj uporabnika
            </DrawerTrigger>
          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Prični nabirati kilometre</DrawerTitle>
              <DrawerDescription>
                Skeniraj spodnjo kodo z mobilno aplikacijo in tvoji podatki se
                bodo prikazovali v skupnem pregledu.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col justify-items-center items-center mb-3">
              <Image src="/qr_koda.png" width={450} height={438} alt="" />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
