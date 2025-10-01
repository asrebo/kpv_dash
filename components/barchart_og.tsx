'use client';
import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { time } from 'console';

export const description = 'A bar chart';

function filterByRange(range) {
  const now = new Date();



  // Determine how many days back to include
  const daysMap = {
    '7d': 7,
    '30d': 30,
    '90d': 90,
  };

  const days = daysMap[range];
  if (!days) throw new Error("Invalid range. Use '7d', '30d', or '90d'.");

  // Calculate start date
  const startDate = new Date(now);
  startDate.setDate(now.getDate() - days ); // +1 to include today

  // Filter data
  return chartData.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= startDate && itemDate <= now;
  });
}

const chartData = [
    {
        "date": "2025-07-01",
        "value": 0.0101
    },
    {
        "date": "2025-07-02",
        "value": 0.0148
    },
    {
        "date": "2025-07-03",
        "value": 0.0144
    },
    {
        "date": "2025-07-04",
        "value": 0.0193
    },
    {
        "date": "2025-07-05",
        "value": 0.0143
    },
    {
        "date": "2025-07-06",
        "value": 0.0196
    },
    {
        "date": "2025-07-07",
        "value": 0.0152
    },
    {
        "date": "2025-07-08",
        "value": 0.0193
    },
    {
        "date": "2025-07-09",
        "value": 0.0153
    },
    {
        "date": "2025-07-10",
        "value": 0.0154
    },
    {
        "date": "2025-07-11",
        "value": 0.01
    },
    {
        "date": "2025-07-12",
        "value": 0.0151
    },
    {
        "date": "2025-07-13",
        "value": 0.0117
    },
    {
        "date": "2025-07-14",
        "value": 0.0106
    },
    {
        "date": "2025-07-15",
        "value": 0.0194
    },
    {
        "date": "2025-07-16",
        "value": 0.018
    },
    {
        "date": "2025-07-17",
        "value": 0.0146
    },
    {
        "date": "2025-07-18",
        "value": 0.0102
    },
    {
        "date": "2025-07-19",
        "value": 0.0176
    },
    {
        "date": "2025-07-20",
        "value": 0.0188
    },
    {
        "date": "2025-07-21",
        "value": 0.0199
    },
    {
        "date": "2025-07-22",
        "value": 0.0137
    },
    {
        "date": "2025-07-23",
        "value": 0.0121
    },
    {
        "date": "2025-07-24",
        "value": 0.0198
    },
    {
        "date": "2025-07-25",
        "value": 0.0178
    },
    {
        "date": "2025-07-26",
        "value": 0.0106
    },
    {
        "date": "2025-07-27",
        "value": 0.0175
    },
    {
        "date": "2025-07-28",
        "value": 0.0112
    },
    {
        "date": "2025-07-29",
        "value": 0.0199
    },
    {
        "date": "2025-07-30",
        "value": 0.012
    },
    {
        "date": "2025-07-31",
        "value": 0.0132
    },
    {
        "date": "2025-08-01",
        "value": 0.0164
    },
    {
        "date": "2025-08-02",
        "value": 0.0144
    },
    {
        "date": "2025-08-03",
        "value": 0.0163
    },
    {
        "date": "2025-08-04",
        "value": 0.0177
    },
    {
        "date": "2025-08-05",
        "value": 0.0102
    },
    {
        "date": "2025-08-06",
        "value": 0.0171
    },
    {
        "date": "2025-08-07",
        "value": 0.011
    },
    {
        "date": "2025-08-08",
        "value": 0.0115
    },
    {
        "date": "2025-08-09",
        "value": 0.0123
    },
    {
        "date": "2025-08-10",
        "value": 0.0136
    },
    {
        "date": "2025-08-11",
        "value": 0.0102
    },
    {
        "date": "2025-08-12",
        "value": 0.0182
    },
    {
        "date": "2025-08-13",
        "value": 0.0134
    },
    {
        "date": "2025-08-14",
        "value": 0.016
    },
    {
        "date": "2025-08-15",
        "value": 0.0123
    },
    {
        "date": "2025-08-16",
        "value": 0.0177
    },
    {
        "date": "2025-08-17",
        "value": 0.0156
    },
    {
        "date": "2025-08-18",
        "value": 0.0112
    },
    {
        "date": "2025-08-19",
        "value": 0.0172
    },
    {
        "date": "2025-08-20",
        "value": 0.0111
    },
    {
        "date": "2025-08-21",
        "value": 0.012
    },
    {
        "date": "2025-08-22",
        "value": 0.0195
    },
    {
        "date": "2025-08-23",
        "value": 0.01
    },
    {
        "date": "2025-08-24",
        "value": 0.0114
    },
    {
        "date": "2025-08-25",
        "value": 0.0158
    },
    {
        "date": "2025-08-26",
        "value": 0.0154
    },
    {
        "date": "2025-08-27",
        "value": 0.017
    },
    {
        "date": "2025-08-28",
        "value": 0.0131
    },
    {
        "date": "2025-08-29",
        "value": 0.0122
    },
    {
        "date": "2025-08-30",
        "value": 0.0147
    },
    {
        "date": "2025-08-31",
        "value": 0.012
    },
    {
        "date": "2025-09-01",
        "value": 0.0911
    },
    {
        "date": "2025-09-02",
        "value": 0.1802
    },
    {
        "date": "2025-09-03",
        "value": 0.0642
    },
    {
        "date": "2025-09-04",
        "value": 0.0236
    },
    {
        "date": "2025-09-05",
        "value": 0.1309
    },
    {
        "date": "2025-09-06",
        "value": 0.0935
    },
    {
        "date": "2025-09-07",
        "value": 0.0092
    },
    {
        "date": "2025-09-08",
        "value": 0.0844
    },
    {
        "date": "2025-09-09",
        "value": 0.0348
    },
    {
        "date": "2025-09-10",
        "value": 0.0997
    },
    {
        "date": "2025-09-11",
        "value": 0.0649
    },
    {
        "date": "2025-09-12",
        "value": 0.1274
    },
    {
        "date": "2025-09-13",
        "value": 0.1153
    },
    {
        "date": "2025-09-14",
        "value": 0.0251
    },
    {
        "date": "2025-09-15",
        "value": 0.0518
    },
    {
        "date": "2025-09-16",
        "value": 0.1419
    },
    {
        "date": "2025-09-17",
        "value": 0.0198
    },
    {
        "date": "2025-09-18",
        "value": 0.0043
    },
    {
        "date": "2025-09-19",
        "value": 0.0804
    },
    {
        "date": "2025-09-20",
        "value": 0.1145
    },
    {
        "date": "2025-09-21",
        "value": 0.0925
    },
    {
        "date": "2025-09-22",
        "value": 0.1664
    },
    {
        "date": "2025-09-23",
        "value": 0.1061
    },
    {
        "date": "2025-09-24",
        "value": 0.0681
    },
    {
        "date": "2025-09-25",
        "value": 0.0316
    },
    {
        "date": "2025-09-26",
        "value": 0.1579
    },
    {
        "date": "2025-09-27",
        "value": 0.0754
    },
    {
        "date": "2025-09-28",
        "value": 0.0908
    },
    {
        "date": "2025-09-29",
        "value": 0.1305
    }
]

const chartConfig = {
  value: {
    label: 'Vrednost',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export default function ChartBarInteractive() {
  const [timeRange, setTimeRange] = useState<string | undefined>('90d');

  let timeFilter = filterByRange(timeRange);

  function handler(e) {
    if (!e) return;
    setTimeRange(e);
  }


console.log(timeRange)
  return (
    <div className="flex  flex-row gap-4 flex-1 min-w-[300px]">
      <Card className="flex-1">
        <CardHeader className="">
          <CardTitle>Bar Chart</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
          <CardAction>
            <ToggleGroup
              type="single"
              value={timeRange}
              onValueChange={(e) => handler(e)} 
              variant="outline"
              className=" *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
            >
              <ToggleGroupItem value="90d">Zadnje 3 mesece</ToggleGroupItem>
              <ToggleGroupItem value="30d">Zadnjih 30 dni</ToggleGroupItem>
              <ToggleGroupItem value="7d">Zadnjih 7 dni</ToggleGroupItem>
            </ToggleGroup>
          </CardAction>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="aspect-auto h-[400px] w-full "
            config={chartConfig}
          >
            <BarChart accessibilityLayer data={timeFilter}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(-2)}
              />
               <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="value" fill="#fc343b" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
