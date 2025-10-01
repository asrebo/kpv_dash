import { IconTrendingDown, IconTrendingUp, IconNetwork } from "@tabler/icons-react"


import PriklopnaMoc from "./priklopnaMoc"

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

import { CountingNumber } from "./ui/shadcn-io/counting-number"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
     
      <Card className="@container/card">
        <CardHeader>
          <Image src="/elec.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Električna energija skupaj</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            13 kWh
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp/>
              + 2.1 kWh
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Povečanje uporabe za 6 % <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Trend porabe glede na prejšnje obdobje
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/nizja.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Nižja tarifa</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            5.9 kWh
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              0.4 kWh
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Povečanje uporabe za 4.2 % <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Trend porabe glede na prejšnje obdobje</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/visja.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Višja tarifa</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            7.1 kWh
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              1.7 kWh
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Povečanje uporabe za 1.8% <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Primerjava s prešnjim obdobjem</div>
        </CardFooter>
      </Card>
       <Card className="@container/card overflow-hidden" >
        <CardHeader>
          <CardDescription>Priklopna moč</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          <CountingNumber
  number={4}
  inView={true}
  transition={{ stiffness: 30, damping: 40 }}
/> kW
  <PriklopnaMoc />

          </CardTitle>
          <CardAction>
          
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Delovanje omrežja <IconNetwork className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Nemoteno
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
