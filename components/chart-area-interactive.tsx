"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {ChartPieDonutText} from "./piechart_main"

export const description = "An interactive area chart"

const chartData = [
  {
    "date": "2025-07-01",
    "elektrika_kWh": 1.29,
    "voda_m3": 1.09,
    "ogrevanje_kWh": 0,
    "skupaj": 2.38
  },
  {
    "date": "2025-07-02",
    "elektrika_kWh": 1.34,
    "voda_m3": 1.1,
    "ogrevanje_kWh": 0,
    "skupaj": 2.44
  },
  {
    "date": "2025-07-03",
    "elektrika_kWh": 1.39,
    "voda_m3": 1.11,
    "ogrevanje_kWh": 0,
    "skupaj": 2.5
  },
  {
    "date": "2025-07-04",
    "elektrika_kWh": 1.44,
    "voda_m3": 1.11,
    "ogrevanje_kWh": 0,
    "skupaj": 2.55
  },
  {
    "date": "2025-07-05",
    "elektrika_kWh": 1.03,
    "voda_m3": 0.89,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.92
  },
  {
    "date": "2025-07-06",
    "elektrika_kWh": 1.06,
    "voda_m3": 0.88,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.94
  },
  {
    "date": "2025-07-07",
    "elektrika_kWh": 1.53,
    "voda_m3": 1.08,
    "ogrevanje_kWh": 0,
    "skupaj": 2.61
  },
  {
    "date": "2025-07-08",
    "elektrika_kWh": 1.55,
    "voda_m3": 1.06,
    "ogrevanje_kWh": 0,
    "skupaj": 2.61
  },
  {
    "date": "2025-07-09",
    "elektrika_kWh": 1.55,
    "voda_m3": 1.04,
    "ogrevanje_kWh": 0,
    "skupaj": 2.59
  },
  {
    "date": "2025-07-10",
    "elektrika_kWh": 1.54,
    "voda_m3": 1.01,
    "ogrevanje_kWh": 0,
    "skupaj": 2.55
  },
  {
    "date": "2025-07-11",
    "elektrika_kWh": 1.52,
    "voda_m3": 0.98,
    "ogrevanje_kWh": 0,
    "skupaj": 2.5
  },
  {
    "date": "2025-07-12",
    "elektrika_kWh": 1.05,
    "voda_m3": 0.76,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.81
  },
  {
    "date": "2025-07-13",
    "elektrika_kWh": 1.02,
    "voda_m3": 0.74,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.76
  },
  {
    "date": "2025-07-14",
    "elektrika_kWh": 1.42,
    "voda_m3": 0.9,
    "ogrevanje_kWh": 0,
    "skupaj": 2.32
  },
  {
    "date": "2025-07-15",
    "elektrika_kWh": 1.37,
    "voda_m3": 0.87,
    "ogrevanje_kWh": 0,
    "skupaj": 2.24
  },
  {
    "date": "2025-07-16",
    "elektrika_kWh": 1.32,
    "voda_m3": 0.85,
    "ogrevanje_kWh": 0,
    "skupaj": 2.17
  },
  {
    "date": "2025-07-17",
    "elektrika_kWh": 1.26,
    "voda_m3": 0.84,
    "ogrevanje_kWh": 0,
    "skupaj": 2.1
  },
  {
    "date": "2025-07-18",
    "elektrika_kWh": 1.21,
    "voda_m3": 0.83,
    "ogrevanje_kWh": 0,
    "skupaj": 2.04
  },
  {
    "date": "2025-07-19",
    "elektrika_kWh": 0.82,
    "voda_m3": 0.66,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.48
  },
  {
    "date": "2025-07-20",
    "elektrika_kWh": 0.79,
    "voda_m3": 0.66,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.45
  },
  {
    "date": "2025-07-21",
    "elektrika_kWh": 1.09,
    "voda_m3": 0.83,
    "ogrevanje_kWh": 0,
    "skupaj": 1.92
  },
  {
    "date": "2025-07-22",
    "elektrika_kWh": 1.06,
    "voda_m3": 0.84,
    "ogrevanje_kWh": 0,
    "skupaj": 1.9
  },
  {
    "date": "2025-07-23",
    "elektrika_kWh": 1.04,
    "voda_m3": 0.86,
    "ogrevanje_kWh": 0,
    "skupaj": 1.9
  },
  {
    "date": "2025-07-24",
    "elektrika_kWh": 1.03,
    "voda_m3": 0.88,
    "ogrevanje_kWh": 0,
    "skupaj": 1.91
  },
  {
    "date": "2025-07-25",
    "elektrika_kWh": 1.04,
    "voda_m3": 0.91,
    "ogrevanje_kWh": 0,
    "skupaj": 1.95
  },
  {
    "date": "2025-07-26",
    "elektrika_kWh": 0.73,
    "voda_m3": 0.75,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.48
  },
  {
    "date": "2025-07-27",
    "elektrika_kWh": 0.75,
    "voda_m3": 0.77,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.52
  },
  {
    "date": "2025-07-28",
    "elektrika_kWh": 1.1,
    "voda_m3": 1.0,
    "ogrevanje_kWh": 0,
    "skupaj": 2.1
  },
  {
    "date": "2025-07-29",
    "elektrika_kWh": 1.14,
    "voda_m3": 1.02,
    "ogrevanje_kWh": 0,
    "skupaj": 2.16
  },
  {
    "date": "2025-07-30",
    "elektrika_kWh": 1.19,
    "voda_m3": 1.05,
    "ogrevanje_kWh": 0,
    "skupaj": 2.24
  },
  {
    "date": "2025-07-31",
    "elektrika_kWh": 1.24,
    "voda_m3": 1.07,
    "ogrevanje_kWh": 0,
    "skupaj": 2.31
  },
  {
    "date": "2025-08-01",
    "elektrika_kWh": 1.35,
    "voda_m3": 1.09,
    "ogrevanje_kWh": 0,
    "skupaj": 2.44
  },
  {
    "date": "2025-08-02",
    "elektrika_kWh": 0.99,
    "voda_m3": 0.88,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.87
  },
  {
    "date": "2025-08-03",
    "elektrika_kWh": 1.02,
    "voda_m3": 0.89,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.91
  },
  {
    "date": "2025-08-04",
    "elektrika_kWh": 1.51,
    "voda_m3": 1.11,
    "ogrevanje_kWh": 0,
    "skupaj": 2.62
  },
  {
    "date": "2025-08-05",
    "elektrika_kWh": 1.55,
    "voda_m3": 1.11,
    "ogrevanje_kWh": 0,
    "skupaj": 2.66
  },
  {
    "date": "2025-08-06",
    "elektrika_kWh": 1.58,
    "voda_m3": 1.1,
    "ogrevanje_kWh": 0,
    "skupaj": 2.68
  },
  {
    "date": "2025-08-07",
    "elektrika_kWh": 1.61,
    "voda_m3": 1.08,
    "ogrevanje_kWh": 0,
    "skupaj": 2.69
  },
  {
    "date": "2025-08-08",
    "elektrika_kWh": 1.62,
    "voda_m3": 1.06,
    "ogrevanje_kWh": 0,
    "skupaj": 2.68
  },
  {
    "date": "2025-08-09",
    "elektrika_kWh": 1.14,
    "voda_m3": 0.83,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.97
  },
  {
    "date": "2025-08-10",
    "elektrika_kWh": 1.13,
    "voda_m3": 0.81,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.94
  },
  {
    "date": "2025-08-11",
    "elektrika_kWh": 1.6,
    "voda_m3": 0.98,
    "ogrevanje_kWh": 0,
    "skupaj": 2.58
  },
  {
    "date": "2025-08-12",
    "elektrika_kWh": 1.57,
    "voda_m3": 0.95,
    "ogrevanje_kWh": 0,
    "skupaj": 2.52
  },
  {
    "date": "2025-08-13",
    "elektrika_kWh": 1.53,
    "voda_m3": 0.93,
    "ogrevanje_kWh": 0,
    "skupaj": 2.46
  },
  {
    "date": "2025-08-14",
    "elektrika_kWh": 1.49,
    "voda_m3": 0.9,
    "ogrevanje_kWh": 0,
    "skupaj": 2.39
  },
  {
    "date": "2025-08-15",
    "elektrika_kWh": 1.44,
    "voda_m3": 0.87,
    "ogrevanje_kWh": 0,
    "skupaj": 2.31
  },
  {
    "date": "2025-08-16",
    "elektrika_kWh": 0.97,
    "voda_m3": 0.68,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.65
  },
  {
    "date": "2025-08-17",
    "elektrika_kWh": 0.93,
    "voda_m3": 0.67,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.6
  },
  {
    "date": "2025-08-18",
    "elektrika_kWh": 1.27,
    "voda_m3": 0.83,
    "ogrevanje_kWh": 0,
    "skupaj": 2.1
  },
  {
    "date": "2025-08-19",
    "elektrika_kWh": 1.22,
    "voda_m3": 0.82,
    "ogrevanje_kWh": 0,
    "skupaj": 2.04
  },
  {
    "date": "2025-08-20",
    "elektrika_kWh": 1.18,
    "voda_m3": 0.82,
    "ogrevanje_kWh": 0,
    "skupaj": 2.0
  },
  {
    "date": "2025-08-21",
    "elektrika_kWh": 1.14,
    "voda_m3": 0.83,
    "ogrevanje_kWh": 0,
    "skupaj": 1.97
  },
  {
    "date": "2025-08-22",
    "elektrika_kWh": 1.11,
    "voda_m3": 0.84,
    "ogrevanje_kWh": 0,
    "skupaj": 1.95
  },
  {
    "date": "2025-08-23",
    "elektrika_kWh": 0.76,
    "voda_m3": 0.69,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.45
  },
  {
    "date": "2025-08-24",
    "elektrika_kWh": 0.76,
    "voda_m3": 0.71,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.47
  },
  {
    "date": "2025-08-25",
    "elektrika_kWh": 1.09,
    "voda_m3": 0.91,
    "ogrevanje_kWh": 0,
    "skupaj": 2.0
  },
  {
    "date": "2025-08-26",
    "elektrika_kWh": 1.1,
    "voda_m3": 0.94,
    "ogrevanje_kWh": 0,
    "skupaj": 2.04
  },
  {
    "date": "2025-08-27",
    "elektrika_kWh": 1.12,
    "voda_m3": 0.97,
    "ogrevanje_kWh": 0,
    "skupaj": 2.09
  },
  {
    "date": "2025-08-28",
    "elektrika_kWh": 1.16,
    "voda_m3": 1.0,
    "ogrevanje_kWh": 0,
    "skupaj": 2.16
  },
  {
    "date": "2025-08-29",
    "elektrika_kWh": 1.2,
    "voda_m3": 1.02,
    "ogrevanje_kWh": 0,
    "skupaj": 2.22
  },
  {
    "date": "2025-08-30",
    "elektrika_kWh": 0.87,
    "voda_m3": 0.84,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.71
  },
  {
    "date": "2025-08-31",
    "elektrika_kWh": 0.91,
    "voda_m3": 0.86,
    "ogrevanje_kWh": 0.0,
    "skupaj": 1.77
  },
  {
    "date": "2025-09-01",
    "elektrika_kWh": 1.5,
    "voda_m3": 1.16,
    "ogrevanje_kWh": 8.18,
    "skupaj": 10.84
  },
  {
    "date": "2025-09-02",
    "elektrika_kWh": 1.56,
    "voda_m3": 1.18,
    "ogrevanje_kWh": 8.0,
    "skupaj": 10.74
  },
  {
    "date": "2025-09-03",
    "elektrika_kWh": 1.62,
    "voda_m3": 1.19,
    "ogrevanje_kWh": 7.77,
    "skupaj": 10.58
  },
  {
    "date": "2025-09-04",
    "elektrika_kWh": 1.68,
    "voda_m3": 1.19,
    "ogrevanje_kWh": 7.49,
    "skupaj": 10.36
  },
  {
    "date": "2025-09-05",
    "elektrika_kWh": 1.72,
    "voda_m3": 1.18,
    "ogrevanje_kWh": 7.17,
    "skupaj": 10.07
  },
  {
    "date": "2025-09-06",
    "elektrika_kWh": 1.23,
    "voda_m3": 0.94,
    "ogrevanje_kWh": 6.14,
    "skupaj": 8.31
  },
  {
    "date": "2025-09-07",
    "elektrika_kWh": 1.25,
    "voda_m3": 0.92,
    "ogrevanje_kWh": 5.83,
    "skupaj": 8.0
  },
  {
    "date": "2025-09-08",
    "elektrika_kWh": 1.8,
    "voda_m3": 1.13,
    "ogrevanje_kWh": 6.14,
    "skupaj": 9.07
  },
  {
    "date": "2025-09-09",
    "elektrika_kWh": 1.8,
    "voda_m3": 1.1,
    "ogrevanje_kWh": 5.82,
    "skupaj": 8.72
  },
  {
    "date": "2025-09-10",
    "elektrika_kWh": 1.79,
    "voda_m3": 1.07,
    "ogrevanje_kWh": 5.54,
    "skupaj": 8.4
  },
  {
    "date": "2025-09-11",
    "elektrika_kWh": 1.76,
    "voda_m3": 1.04,
    "ogrevanje_kWh": 5.31,
    "skupaj": 8.11
  },
  {
    "date": "2025-09-12",
    "elektrika_kWh": 1.72,
    "voda_m3": 1.01,
    "ogrevanje_kWh": 5.14,
    "skupaj": 7.87
  },
  {
    "date": "2025-09-13",
    "elektrika_kWh": 1.17,
    "voda_m3": 0.78,
    "ogrevanje_kWh": 4.53,
    "skupaj": 6.48
  },
  {
    "date": "2025-09-14",
    "elektrika_kWh": 1.14,
    "voda_m3": 0.76,
    "ogrevanje_kWh": 4.5,
    "skupaj": 6.4
  },
  {
    "date": "2025-09-15",
    "elektrika_kWh": 1.56,
    "voda_m3": 0.92,
    "ogrevanje_kWh": 5.04,
    "skupaj": 7.52
  },
  {
    "date": "2025-09-16",
    "elektrika_kWh": 1.5,
    "voda_m3": 0.9,
    "ogrevanje_kWh": 5.15,
    "skupaj": 7.55
  },
  {
    "date": "2025-09-17",
    "elektrika_kWh": 1.44,
    "voda_m3": 0.89,
    "ogrevanje_kWh": 5.33,
    "skupaj": 7.66
  },
  {
    "date": "2025-09-18",
    "elektrika_kWh": 1.38,
    "voda_m3": 0.88,
    "ogrevanje_kWh": 5.56,
    "skupaj": 7.82
  },
  {
    "date": "2025-09-19",
    "elektrika_kWh": 1.32,
    "voda_m3": 0.88,
    "ogrevanje_kWh": 5.85,
    "skupaj": 8.05
  },
  {
    "date": "2025-09-20",
    "elektrika_kWh": 0.89,
    "voda_m3": 0.71,
    "ogrevanje_kWh": 5.55,
    "skupaj": 7.15
  },
  {
    "date": "2025-09-21",
    "elektrika_kWh": 0.87,
    "voda_m3": 0.72,
    "ogrevanje_kWh": 5.86,
    "skupaj": 7.45
  },
  {
    "date": "2025-09-22",
    "elektrika_kWh": 1.21,
    "voda_m3": 0.91,
    "ogrevanje_kWh": 6.86,
    "skupaj": 8.98
  },
  {
    "date": "2025-09-23",
    "elektrika_kWh": 1.2,
    "voda_m3": 0.94,
    "ogrevanje_kWh": 7.2,
    "skupaj": 9.34
  },
  {
    "date": "2025-09-24",
    "elektrika_kWh": 1.2,
    "voda_m3": 0.96,
    "ogrevanje_kWh": 7.51,
    "skupaj": 9.67
  },
  {
    "date": "2025-09-25",
    "elektrika_kWh": 1.21,
    "voda_m3": 0.99,
    "ogrevanje_kWh": 7.79,
    "skupaj": 9.99
  },
  {
    "date": "2025-09-26",
    "elektrika_kWh": 1.24,
    "voda_m3": 1.03,
    "ogrevanje_kWh": 8.03,
    "skupaj": 10.3
  },
  {
    "date": "2025-09-27",
    "elektrika_kWh": 0.89,
    "voda_m3": 0.85,
    "ogrevanje_kWh": 7.38,
    "skupaj": 9.12
  },
  {
    "date": "2025-09-28",
    "elektrika_kWh": 0.93,
    "voda_m3": 0.87,
    "ogrevanje_kWh": 7.47,
    "skupaj": 9.27
  },
  {
    "date": "2025-09-29",
    "elektrika_kWh": 1.38,
    "voda_m3": 1.12,
    "ogrevanje_kWh": 8.33,
    "skupaj": 10.83
  },
  {
    "date": "2025-09-30",
    "elektrika_kWh": 1.44,
    "voda_m3": 1.14,
    "ogrevanje_kWh": 8.29,
    "skupaj": 10.87
  }
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  }
  
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")



  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date();
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <div className="flex flex-row gap-4 ">
    <Card className="@container/card flex-1" >
      <CardHeader>
        <CardTitle>Skupna poraba</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Prikaz komulativne porabe
          </span>
          <span className="@[540px]/card:hidden">Prikaz komulativne porabe</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Zadnje 3 mesece</ToggleGroupItem>
            <ToggleGroupItem value="30d">Zadnjih 30 dni</ToggleGroupItem>
            <ToggleGroupItem value="7d">Zadnjih 7 dni</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[400px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fill1" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fill2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
                <linearGradient id="fill3" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
                <linearGradient id="fill4" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-4)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-4)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
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
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
         
            <Area
              dataKey="elektrika_kWh"
              type="natural"
              fill="url(#fill1)"
              stroke="var(--color-desktop)"
              stackId="b"
            />
             <Area
              dataKey="ogrevanje_kWh"
              type="natural"
              fill="url(#fill2)"
              stroke="var(--color-desktop)"
              stackId="b"
            />
             <Area
              dataKey="voda_m3"
              type="natural"
              fill="url(#fill3)"
              stroke="var(--color-desktop)"
              stackId="b"
            />
             <Area
              dataKey="skupaj"
              type="natural"
              fill="url(#fill4)"
              stroke="var(--color-desktop)"
              stackId="b"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
    
      <ChartPieDonutText />
    
    </div>
  )
}
