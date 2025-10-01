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
  { date: '2025-07-01', value: 0.0889 },
  { date: '2025-07-02', value: 0.0563 },
  { date: '2025-07-03', value: 0.1925 },
  { date: '2025-07-04', value: 0.0092 },
  { date: '2025-07-05', value: 0.0095 },
  { date: '2025-07-06', value: 0.0842 },
  { date: '2025-07-07', value: 0.1929 },
  { date: '2025-07-08', value: 0.0197 },
  { date: '2025-07-09', value: 0.0699 },
  { date: '2025-07-10', value: 0.1851 },
  { date: '2025-07-11', value: 0.036 },
  { date: '2025-07-12', value: 0.0298 },
  { date: '2025-07-13', value: 0.1382 },
  { date: '2025-07-14', value: 0.1006 },
  { date: '2025-07-15', value: 0.1295 },
  { date: '2025-07-16', value: 0.1125 },
  { date: '2025-07-17', value: 0.0334 },
  { date: '2025-07-18', value: 0.0483 },
  { date: '2025-07-19', value: 0.0394 },
  { date: '2025-07-20', value: 0.0836 },
  { date: '2025-07-21', value: 0.1887 },
  { date: '2025-07-22', value: 0.0291 },
  { date: '2025-07-23', value: 0.1201 },
  { date: '2025-07-24', value: 0.0386 },
  { date: '2025-07-25', value: 0.0349 },
  { date: '2025-07-26', value: 0.0387 },
  { date: '2025-07-27', value: 0.0935 },
  { date: '2025-07-28', value: 0.1226 },
  { date: '2025-07-29', value: 0.0562 },
  { date: '2025-07-30', value: 0.0596 },
  { date: '2025-07-31', value: 0.1681 },
  { date: '2025-08-01', value: 0.0497 },
  { date: '2025-08-02', value: 0.0434 },
  { date: '2025-08-03', value: 0.1572 },
  { date: '2025-08-04', value: 0.1107 },
  { date: '2025-08-05', value: 0.1472 },
  { date: '2025-08-06', value: 0.0714 },
  { date: '2025-08-07', value: 0.0684 },
  { date: '2025-08-08', value: 0.0828 },
  { date: '2025-08-09', value: 0.0177 },
  { date: '2025-08-10', value: 0.1004 },
  { date: '2025-08-11', value: 0.0049 },
  { date: '2025-08-12', value: 0.0617 },
  { date: '2025-08-13', value: 0.1483 },
  { date: '2025-08-14', value: 0.1146 },
  { date: '2025-08-15', value: 0.2005 },
  { date: '2025-08-16', value: 0.1174 },
  { date: '2025-08-17', value: 0.1813 },
  { date: '2025-08-18', value: 0.0602 },
  { date: '2025-08-19', value: 0.0546 },
  { date: '2025-08-20', value: 0.0315 },
  { date: '2025-08-21', value: 0.0679 },
  { date: '2025-08-22', value: 0.123 },
  { date: '2025-08-23', value: 0.1866 },
  { date: '2025-08-24', value: 0.1008 },
  { date: '2025-08-25', value: 0.1068 },
  { date: '2025-08-26', value: 0.1929 },
  { date: '2025-08-27', value: 0.0975 },
  { date: '2025-08-28', value: 0.1787 },
  { date: '2025-08-29', value: 0.1964 },
  { date: '2025-08-30', value: 0.1728 },
  { date: '2025-08-31', value: 0.0397 },
  { date: '2025-09-01', value: 0.094 },
  { date: '2025-09-02', value: 0.1859 },
  { date: '2025-09-03', value: 0.0662 },
  { date: '2025-09-04', value: 0.0243 },
  { date: '2025-09-05', value: 0.1349 },
  { date: '2025-09-06', value: 0.0889 },
  { date: '2025-09-07', value: 0.0088 },
  { date: '2025-09-08', value: 0.087 },
  { date: '2025-09-09', value: 0.0359 },
  { date: '2025-09-10', value: 0.1029 },
  { date: '2025-09-11', value: 0.0669 },
  { date: '2025-09-12', value: 0.1314 },
  { date: '2025-09-13', value: 0.1097 },
  { date: '2025-09-14', value: 0.0239 },
  { date: '2025-09-15', value: 0.0534 },
  { date: '2025-09-16', value: 0.1464 },
  { date: '2025-09-17', value: 0.0204 },
  { date: '2025-09-18', value: 0.0044 },
  { date: '2025-09-19', value: 0.0829 },
  { date: '2025-09-20', value: 0.1089 },
  { date: '2025-09-21', value: 0.0879 },
  { date: '2025-09-22', value: 0.1716 },
  { date: '2025-09-23', value: 0.1094 },
  { date: '2025-09-24', value: 0.0703 },
  { date: '2025-09-25', value: 0.0326 },
  { date: '2025-09-26', value: 0.1628 },
  { date: '2025-09-27', value: 0.0717 },
  { date: '2025-09-28', value: 0.0863 },
  { date: '2025-09-29', value: 0.1346 },
];


const chartConfig = {
  value: {
    label: 'Voda (m3)',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export default function ChartBarInteractive() {
  const [timeRange, setTimeRange] = useState('90d');

  const timeFilter = filterByRange(timeRange);

  function handler(e) {
    if (!e) return;
    setTimeRange(e);
  }

  return (
    <div className="flex flex-row gap-4 flex-1 min-w-[300px]">
      <Card className="@container/card flex-1">
        <CardHeader className="">
          <CardTitle>Pregled porabe</CardTitle>
          <CardDescription>poraba m3 </CardDescription>
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
            className="aspect-auto h-[400px] w-full"
            config={chartConfig}
          >
            <BarChart accessibilityLayer data={timeFilter}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(-2) }
              />
               <YAxis label={{ value: 'm3', angle: -90, position: 'insideLeft' }} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent nameKey="value" hideLabel />}
              />
              <Bar dataKey="value" fill="#287dd7ff" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
         
        </CardFooter>
      </Card>
    </div>
  );
}


