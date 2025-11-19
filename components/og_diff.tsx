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

export const description = "Primerjava porabe po obdobjih" 

const chartData = [
  { month: "Januar", "2024": 2.8, "2025": 2.1 },
  { month: "Februar", "2024": 2.6, "2025": 2.4 },
  { month: "Marec", "2024": 2.1, "2025": 1.9 },
  { month: "April", "2024": 1.3, "2025": 1.5 },
  { month: "Maj", "2024": 0.6, "2025": 0.8 },
  { month: "Junij", "2024": 0, "2025": 0 },
  { month: "Julij", "2024": 0, "2025": 0 },
  { month: "Avgust", "2024": 0, "2025": 0 },
  { month: "September", "2024": 0.4, "2025": 0.5 },
  { month: "Oktober", "2024": 1.2, "2025": 1.4 },
  { month: "November", "2024": 2.3, "2025": 2.0 },
  { month: "December", "2024": 3.0, "2025": 2.7 },
]

const chartConfig = {
  "2024": {
    label: "2024",
    color: "var(--chart-4)",
  },
  "2025": {
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
              dataKey="2024"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="2025"
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
