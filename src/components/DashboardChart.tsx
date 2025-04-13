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

const defaultChartData = [
  { month: "January", amount: 220 },
  { month: "February", amount: 240 },
  { month: "March", amount: 333 },
  { month: "April", amount: 400 },
  { month: "May", amount: 500 },
  { month: "June", amount: 700 },
];

const getIntroOfPage = (label) => {
  if (label === "January") {
    return "Higher car charging demand as cold weather reduces battery efficiency.";
  }
  if (label === "February") {
    return "Consistent charging activity, with a focus on maintaining battery health in lower temperatures.";
  }
  if (label === "March") {
    return "Gradual increase in charging as vehicles prepare for longer commutes in spring.";
  }
  if (label === "April") {
    return "More frequent charging sessions as electric vehicles are used for road trips during the spring break.";
  }
  if (label === "May") {
    return "Increased car charging for vacations and longer weekend trips.";
  }
  if (label === "June") {
    return "Peak charging demand due to summer road trips and extended daylight hours.";
  }
  return "";
};


const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
<div className="bg-[#2c2d2f] p-2 sm:p-3 rounded-md shadow-lg w-full max-w-[50vw] sm:max-w-xs transition-all duration-200 ease-out animate-fadeIn border border-[#3b3c3f]">
  <p className="text-[10px] sm:text-xs text-[#e4e4e7] font-medium mb-1">{label}</p>
  <p className="text-base sm:text-lg font-bold text-[#C8E972] flex items-center gap-1 mb-1">
    ⚡ {payload[0].value}
  </p>
  <p className="text-[10px] sm:text-xs text-[#a1a1aa] mb-1">{getIntroOfPage(label)}</p>
  <p className="text-[10px] sm:text-xs text-[#d1d1d6] italic leading-tight">
    View energy trend insights for this month.
  </p>
</div>
  );
};

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
    const existingMonth = acc.find((item) => item.month === curr.month);
    if (existingMonth) {
      existingMonth.amount += curr.amount; // Sum the amounts
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);
  return (
    <Card className="dashboard-cards flex flex-col flex-1 h-full overflow-hidden">
      <CardHeader>Unsatisfied Demand</CardHeader>
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
