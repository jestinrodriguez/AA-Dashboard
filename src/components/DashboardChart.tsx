import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { ChartTooltip } from "../components/ui/chart";
import { useCategoryStore } from "../store/useCategoryStore";
import { categoryData } from "../data/dummy";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import CustomTooltip from "./CustomTooltip";

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

  type DataPoint = {
    month: string;
    amount: number;
  };
  const aggregatedData = chartData.reduce<DataPoint[]>((acc, curr) => {
    const existingMonth = acc.find((item) => item.month === curr.month);
    if (existingMonth) {
      existingMonth.amount += curr.amount;
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);
  
  return (
    <Card className="dashboard-cards flex flex-col flex-1 h-full overflow-hidden">
      <CardHeader className="text-end">
        <div>
          <Button
            variant="inactive"
            className="text-white bg-[#18181A80] border not-odd:border-[#5A5A5AA1]"
          >
            Unsatisfied Demand %
            <ChevronDown />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 flex flex-col">
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={aggregatedData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} stroke="#e0e0e0" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<CustomTooltip />} />
              <Line
                dataKey="amount"
                stroke="#C8E972"
                strokeWidth={4}
                dot={true}
                type="linear"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
