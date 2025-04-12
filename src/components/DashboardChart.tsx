import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import { useCategoryStore } from "../store/useCategoryStore";
import { categoryData } from "../data/dummy";

const chartConfig = {
  desktop: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const defaultChartData = [
  { month: "January", amount: 220 },
  { month: "February", amount: 240 },
  { month: "March", amount: 333 },
  { month: "April", amount: 400 },
  { month: "May", amount: 500 },
  { month: "June", amount: 700 },
];

const DashboardChart = () => {
  const {
    selectedCategoriesSet1,
    selectedCategoriesSet2,
    selectedCategoriesSet3,
    selectedCategoriesSet4,
  } = useCategoryStore();

  // Combine selected category data from both sets
  const chartData = [
    ...defaultChartData,
    ...selectedCategoriesSet1.flatMap(
      (category) => categoryData[category] || []
    ),
    ...selectedCategoriesSet2.flatMap(
      (category) => categoryData[category] || []
    ),
    ...selectedCategoriesSet3.flatMap(
      (category) => categoryData[category] || []
    ),
    ...selectedCategoriesSet4.flatMap(
      (category) => categoryData[category] || []
    ),
  ];

  const aggregatedData = chartData.reduce((acc, curr) => {
    const existingMonth = acc.find(item => item.month === curr.month);
    if (existingMonth) {
      existingMonth.amount += curr.amount; // Sum the amounts
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);

  return (
    <Card className="dashboard-cards">
      <CardHeader>Unsatisfied Demand</CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[375px] w-full">
            <LineChart data={aggregatedData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} stroke="#e0e0e0" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent indicator="dot"/>} />
              <Line
                dataKey="amount"
                stroke="#C8E972"
                strokeWidth={3}
                dot={false}
                type="linear"
              />
            </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
