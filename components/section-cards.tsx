"use client"

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import NumberCount from "./numbercount"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { CountingNumber } from "./ui/shadcn-io/counting-number"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
     
      <Card className="@container/card">
        <CardHeader>
          <Image src="/heat.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Ogrevanje</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          0.2
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +0.2 MWh
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
           Povečanje porabe za 92% <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Primerjava s prešnjim obdobjem
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/elec.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Električna energija</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            13 kWh
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +3.1 kWh
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Povečanje uporabe za 6 % <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Primerjava s prešnjim obdobjem</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/water.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Voda</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            2.1 m3
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              - 0.24 m3
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Znižanje uporabe za 20%<IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Primerjava s prejšnjim obdobjem</div>
        </CardFooter>
      </Card>
       <Card className="@container/card text-white relative space-between" style={{ background:"#c96442" }}>
        <CardHeader>
          <CardDescription className="text-white">Prejeta sredstva</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-5xl">
         <CountingNumber
  number={231}
  inView={true}
  transition={{ stiffness: 100, damping: 30 }}
/>

          </CardTitle>
          <CardAction>
      
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm z-1">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Prejetih sredstev 18% več <IconTrendingUp className="size-4" />
          </div>
          <div className="text-white opacity-70">
            V primerjavi z lanskim obdobjem
          </div>
        </CardFooter>
         <DotLottieReact
                                 src="./coin.lottie"
                                
                                 autoplay
                                
                                 className="absolute right-[-40] bottom-0 z-0 "
                               />
      </Card>
    </div>
  )
}
