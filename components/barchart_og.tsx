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

function filterByRange(range: '7d' | '30d' | '90d') {
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
    },
    {
        "date": "2025-09-30",
        "value": 0.0723
    },
    {
        "date": "2025-10-01",
        "value": 0.1054
    },
    {
        "date": "2025-10-02",
        "value": 0.0478
    },
    {
        "date": "2025-10-03",
        "value": 0.0891
    },
    {
        "date": "2025-10-04",
        "value": 0.0167
    },
    {
        "date": "2025-10-05",
        "value": 0.0214
    },
    {
        "date": "2025-10-06",
        "value": 0.0349
    },
    {
        "date": "2025-10-07",
        "value": 0.0622
    },
    {
        "date": "2025-10-08",
        "value": 0.0135
    },
    {
        "date": "2025-10-09",
        "value": 0.0789
    },
    {
        "date": "2025-10-10",
        "value": 0.0916
    },
    {
        "date": "2025-10-11",
        "value": 0.0298
    },
    {
        "date": "2025-10-12",
        "value": 0.0567
    },
    {
        "date": "2025-10-13",
        "value": 0.1203
    },
    {
        "date": "2025-10-14",
        "value": 0.0394
    },
    {
        "date": "2025-10-15",
        "value": 0.0089
    },
    {
        "date": "2025-10-16",
        "value": 0.0471
    },
    {
        "date": "2025-10-17",
        "value": 0.0638
    },
    {
        "date": "2025-10-18",
        "value": 0.0332
    },
    {
        "date": "2025-10-19",
        "value": 0.0540
    },
 {
        "date": "2025-10-20",
        "value": 0.0417
    },
    {
        "date": "2025-10-21",
        "value": 0.0834
    },
    {
        "date": "2025-10-22",
        "value": 0.1156
    },
    {
        "date": "2025-10-23",
        "value": 0.0923
    },
    {
        "date": "2025-10-24",
        "value": 0.1289
    },
    {
        "date": "2025-10-25",
        "value": 0.0612
    },  // Saturday - lower
    {
        "date": "2025-10-26",
        "value": 0.0734
    },  // Sunday - lower
    {
        "date": "2025-10-27",
        "value": 0.1545
    },
    {
        "date": "2025-10-28",
        "value": 0.1312
    },
    {
        "date": "2025-10-29",
        "value": 0.1689
    },
    {
        "date": "2025-10-30",
        "value": 0.1834
    },
    {
        "date": "2025-10-31",
        "value": 0.1456
    },
    {
        "date": "2025-11-01",
        "value": 0.0856
    },  // Saturday - lower
    {
        "date": "2025-11-02",
        "value": 0.0923
    },  // Sunday - lower
    {
        "date": "2025-11-03",
        "value": 0.1967
    },
    {
        "date": "2025-11-04",
        "value": 0.2234
    },
    {
        "date": "2025-11-05",
        "value": 0.1889
    },
    {
        "date": "2025-11-06",
        "value": 0.2456
    },
    {
        "date": "2025-11-07",
        "value": 0.2178
    },
    {
        "date": "2025-11-08",
        "value": 0.1089
    },  // Saturday - lower
    {
        "date": "2025-11-09",
        "value": 0.1134
    },  // Sunday - lower
    {
        "date": "2025-11-10",
        "value": 0.2567
    },
    {
        "date": "2025-11-11",
        "value": 0.2389
    },
    {
        "date": "2025-11-12",
        "value": 0.2145
    },
    {
        "date": "2025-11-13",
        "value": 0.2512
    },
    {
        "date": "2025-11-14",
        "value": 0.2234
    },
    {
        "date": "2025-11-15",
        "value": 0.1156
    },  // Saturday - lower
    {
        "date": "2025-11-16",
        "value": 0.1201
    },  // Sunday - lower
    {
        "date": "2025-11-17",
        "value": 0.2678
    },
    {
        "date": "2025-11-18",
        "value": 0.2445
    },
    {
        "date": "2025-11-19",
        "value": 0.2589
    },
    {
        "date": "2025-11-20",
        "value": 0.2034
    },
      {
        "date": "2025-11-21",
        "value": 0.2245
    },
        {
        "date": "2025-11-22",
        "value": 0.1156
    },  // Saturday - lower
    {
        "date": "2025-11-23",
        "value": 0.1201
    }, 
        {
        "date": "2025-11-24",
        "value": 0.2512
    },
    {
        "date": "2025-11-25",
        "value": 0.2234
    },
]

const chartConfig = {
  value: {
    label: 'Vrednost',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export default function ChartBarInteractive() {
  const [timeRange, setTimeRange] = useState('90d');

  const timeFilter = filterByRange(timeRange as '7d' | '30d' | '90d');

  function handler(e: string) {
    if (!e) return;
    setTimeRange(e);
  }



  return (
    <div className="flex  flex-row gap-4 flex-1 min-w-[300px]">
      <Card className="flex-1">
        <CardHeader className="">
          <CardTitle>Pregled porabe</CardTitle>
          <CardDescription>Poraba v kWh</CardDescription>
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
         
        </CardFooter>
      </Card>
    </div>
  );
}
