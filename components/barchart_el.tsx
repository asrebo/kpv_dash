"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis , YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
    { "date": "2025-08-01", "visja": 9.9345, "nizja": 8.1942 },
    { "date": "2025-08-02", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-03", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-04", "visja": 5.6278, "nizja": 4.7821 },
    { "date": "2025-08-05", "visja": 5.9644, "nizja": 5.1207 },
    { "date": "2025-08-06", "visja": 7.2772, "nizja": 6.1509 },
    { "date": "2025-08-07", "visja": 6.9490, "nizja": 5.8017 },
    { "date": "2025-08-08", "visja": 7.9364, "nizja": 6.8319 },
    { "date": "2025-08-09", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-10", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-11", "visja": 6.2803, "nizja": 5.4608 },
    { "date": "2025-08-12", "visja": 6.6170, "nizja": 5.8017 },
    { "date": "2025-08-13", "visja": 8.6194, "nizja": 7.5238 },
    { "date": "2025-08-14", "visja": 8.2678, "nizja": 8.1662 },
    { "date": "2025-08-15", "visja": 7.6185, "nizja": 6.4866 },
    { "date": "2025-08-16", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-17", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-18", "visja": 5.2984, "nizja": 2.4429 },
    { "date": "2025-08-19", "visja": 6.2803, "nizja": 5.4608 },
    { "date": "2025-08-20", "visja": 5.6170, "nizja": 5.8017 },
    { "date": "2025-08-21", "visja": 7.6185, "nizja": 6.4866 },
    { "date": "2025-08-22", "visja": 8.6194, "nizja": 7.5238 },
    { "date": "2025-08-23", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-24", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-25", "visja": 5.9644, "nizja": 5.1207 },
    { "date": "2025-08-26", "visja": 6.9490, "nizja": 5.8017 },
    { "date": "2025-08-27", "visja": 7.2772, "nizja": 6.1509 },
    { "date": "2025-08-28", "visja": 8.2678, "nizja": 7.1662 },
    { "date": "2025-08-29", "visja": 9.2783, "nizja": 7.8642 },
    { "date": "2025-08-30", "visja": 0.3252, "nizja": 0.2060 },
    { "date": "2025-08-31", "visja": 0.3252, "nizja": 0.2060 }
]

const chartConfig = {
  poraba: {
    label: "Poraba (kWh)",
  },
  visja: {
    label: "Višja tarifa",
    color: "#bbab41ff",
  },
  nizja: {
    label: "Nižja tarifa",
    color: "#d8c964ff",
  },
} satisfies ChartConfig

export function ChartBarInteractive() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("nizja")

  const total = React.useMemo(
    () => ({
      visja: chartData.reduce((acc, curr) =>Math.floor(acc + curr.visja), 0),
      nizja: chartData.reduce((acc, curr) =>Math.floor(acc + curr.nizja), 0),
    }),
    []
  )

  return (
    <Card className="py-0 flex-auto">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Pregled porabe</CardTitle>
          <CardDescription>
            poraba v KWh
          </CardDescription>
        </div>
        <div className="flex flex-1 max-w-[300px]">
          {["visja", "nizja"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-2 py-2 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
           
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
             <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} radius={5} />
          
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
