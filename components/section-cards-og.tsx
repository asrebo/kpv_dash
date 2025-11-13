import { IconNetwork, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"


import PriklopnaMoc from "./priklopnaMoc"
import { Ogdiff } from "./og_diff"

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
          <Image src="/heat.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Ogrevanje</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            0.2 MWh
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
            Povečanje porabe za 92% <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Primerjava s prešnjim obdobjem
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/stevnina.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Števnina</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            0.3500 kom
          </CardTitle>
          <CardAction>

          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">

        </CardFooter>
      </Card>
        <Card className="@container/card overflow-hidden" >
        <CardHeader>
          <CardDescription>Priklopna moč</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <CountingNumber
              number={27}
              inView={true}
              transition={{ stiffness: 27, damping: 20 }}
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
      <Ogdiff />
    </div>
  )
}
