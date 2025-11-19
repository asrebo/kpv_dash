"use client";


"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "Januar", desktop: 2.8, mobile: 2.1 },
  { month: "Februar", desktop: 2.6, mobile: 2.4 },
  { month: "Marec", desktop: 2.1, mobile: 1.9 },
  { month: "April", desktop: 1.3, mobile: 1.5 },
  { month: "Maj", desktop: 0.6, mobile: 0.8 },
  { month: "Junij", desktop: 0, mobile: 0 },
  { month: "Julij", desktop: 0, mobile: 0 },
  { month: "Avgust", desktop: 0, mobile: 0 },
  { month: "September", desktop: 0.4, mobile: 0.5 },
  { month: "Oktober", desktop: 1.2, mobile: 1.4 },
  { month: "November", desktop: 2.3, mobile: 2.0 },
  { month: "December", desktop: 3.0, mobile: 2.7 },
]

const chartConfig = {
  desktop: {
    label: "2024",
    color: "var(--chart-4)",
  },
  mobile: {
    label: "2025",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function Ogdiff() {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="z-50">
        <CardTitle>Primerjava s prejšnjim obdobjem</CardTitle>
        <CardDescription>
          Komulativna poraba ogrevanja - primerjava z 2024
        </CardDescription>

      </CardHeader>

        <ChartContainer config={chartConfig} className="absolute top-0 left-[-20px] right-[-20px] w-[110%] h-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
         
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>

    

    </Card>
  )
}
