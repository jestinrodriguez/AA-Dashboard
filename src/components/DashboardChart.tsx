import {
  Area,
  AreaChart,
  CartesianGrid,
  Customized,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const DashboardChart = () => {
  const {
    selectedCategoriesSet1,
    selectedCategoriesSet2,
    selectedCategoriesSet3,
    selectedCategoriesSet4,
  } = useCategoryStore();
  // Combine selected category data from both sets
  const chartData = [
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

  return (
    <Card className="dashboard-cards">
      <CardHeader>Unsatisfied Demand</CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[375px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} stroke="#e0e0e0" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              <Line
                dataKey="desktop"
                stroke="#C8E972"
                strokeWidth={3}
                dot={false}
                type="linear"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
