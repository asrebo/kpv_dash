"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { tarifa: "Okolj.daj za onesn.okolja", vrednost: 0.14, fill: "var(--chart-1)" },
  { tarifa: "Omrežnina odvajanje padavinske odp", vrednost: 5.64, fill: "var(--chart-2)" },
  { tarifa: "Čiščenje padavinske odp.vode s streh", vrednost: 2.82, fill: "var(--chart-3)" },
  { tarifa: "Omrežnina Čiščenje padavinske odp.vc", vrednost: 1.77, fill: "var(--chart-4)" },
  { tarifa: "Odvajanje padavinske odp.vode s streh", vrednost: 5.13, fill: "var(--chart-5)" },
  { tarifa: "Čiščenje komunalne odpadne vode", vrednost: 1.48, fill: "var(--chart-1)" },
  { tarifa: "Omrežnina Čiščenje komunalne odpadr", vrednost: 1.71, fill: "var(--chart-2)" },
  { tarifa: "Odvajanje komunalne odpadne vode", vrednost: 0.82, fill: "var(--chart-3)" },
  { tarifa: "Omrežnina odvajanje komunalne odpa", vrednost: 1.61, fill: "var(--chart-4)" },
  { tarifa: "Omrežnina voda", vrednost: 5.93, fill: "var(--chart-5)" },
  { tarifa: "Vodarina", vrednost: 2.86, fill: "var(--chart-1)" },


];

const chartConfig = {
  visitors: {
    label: "skupaj kWh",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",

} satisfies ChartConfig
}
export default function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.vrednost, 0)
  }, [])

  return (
    <Card className="flex flex-col min-w-[250px] ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pregled strošjov po kategorijah</CardTitle>
        <CardDescription>zadnjih 30 dni</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="vrednost"
              nameKey="tarifa"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {totalVisitors.toLocaleString()+"€"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          skupaj 
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Povečana poraba za 5.2%  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Primerjava z enakim obdobjem lansko leto
        </div>
      </CardFooter>
    </Card>
  )
}
