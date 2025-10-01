import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"




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
          <Image src="/water.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Vodarina</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
           2.1 m3
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              0.24 m3
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Znižanje uporabe za 20% <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Primerjava s prejšnjim obdobjem
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/padavinska.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Padavinska odp. voda</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          13.591 m3
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              0.62 m3
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Zvišanje uporabe za 11% <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground"> Zvišanje uporabe za 11%</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Image src="/omreznina.svg" alt="Revenue" width={40} height={40} />
          <CardDescription>Omrežnina skupaj</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            15.7 m3
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              1.2 m3
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Zvišanje uporabe za 4.5% <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Primerjava s prejšnjim obdobjem</div>
        </CardFooter>
      </Card>
       <Card className="@container/card overflow-hidden" >
        <CardHeader>
          <Image src="/env.svg" alt="Okoljsk dajatev" width={40} height={40} />
          <CardDescription>Okoljska dajatev</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            2.1 m3

          </CardTitle>
          <CardAction>
          
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Znižanje porabe za 20%<IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Primerjava s prejšnjim obdobjem
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
