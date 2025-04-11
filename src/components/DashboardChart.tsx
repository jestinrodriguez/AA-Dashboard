// import { TrendingUp } from "lucide-react"
// import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "../components/ui/chart"

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ]

// const chartConfig: ChartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// }

// const DashboardChart = () => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Area Chart - Linear</CardTitle>
//         <CardDescription>
//           Showing total visitors for the last 6 months
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart width={600} height={300} data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Area
//               type="monotone"
//               dataKey="desktop"
//               stroke="hsl(var(--chart-1))"
//               fill="hsl(var(--chart-1))"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }

// export default DashboardChart

// src/components/DashboardChart.tsx

// import { TrendingUp } from "lucide-react"
// import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "../components/ui/chart"
// import { useCategoryStore } from '../store/useCategoryStore'

// // Example chart data for each category
// const categoryData = {
//   'Carbon 1': [
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 73 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 214 },
//   ],
//   'Co2 Distribution': [
//     { month: "January", desktop: 120 },
//     { month: "February", desktop: 200 },
//     { month: "March", desktop: 150 },
//     { month: "April", desktop: 90 },
//     { month: "May", desktop: 210 },
//     { month: "June", desktop: 175 },
//   ],
//   'Fleet sizing': [
//     { month: "January", desktop: 300 },
//     { month: "February", desktop: 400 },
//     { month: "March", desktop: 350 },
//     { month: "April", desktop: 280 },
//     { month: "May", desktop: 290 },
//     { month: "June", desktop: 320 },
//   ],
// }

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig

// const DashboardChart = () => {
//   const { selectedCategories } = useCategoryStore()

//   // If no categories are selected, fallback to default chart data
//   const chartData = selectedCategories.length
//     ? selectedCategories.flatMap((category) => categoryData[category] || [])
//     : categoryData['Carbon 1'] // Default chart data

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Area Chart - Linear</CardTitle>
//         <CardDescription>
//           Showing total visitors for the last 6 months
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={true} stroke="#e0e0e0" strokeDasharray="3 3" />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <YAxis
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => `${value}`}
//               domain={['auto', 'auto']}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dot" hideLabel />}
//             />
//             <Area
//               dataKey="desktop"
//               type="linear"
//               fill="var(--color-desktop)"
//               fillOpacity={0.4}
//               stroke="var(--color-desktop)"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter>
//         <div className="flex w-full items-start gap-2 text-sm">
//           <div className="grid gap-2">
//             <div className="flex items-center gap-2 font-medium leading-none">
//               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//             </div>
//             <div className="flex items-center gap-2 leading-none text-muted-foreground">
//               January - June 2024
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }

// export default DashboardChart
// src/components/DashboardChart.tsx

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"
import { useCategoryStore } from '../store/useCategoryStore'

// Example chart data for each category
const categoryData = {
  'Carbon 1': [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ],
  'Co2 Distribution': [
    { month: "January", desktop: 120 },
    { month: "February", desktop: 200 },
    { month: "March", desktop: 150 },
    { month: "April", desktop: 90 },
    { month: "May", desktop: 210 },
    { month: "June", desktop: 175 },
  ],
  'Fleet sizing': [
    { month: "January", desktop: 300 },
    { month: "February", desktop: 400 },
    { month: "March", desktop: 350 },
    { month: "April", desktop: 280 },
    { month: "May", desktop: 290 },
    { month: "June", desktop: 320 },
  ],
  'Parking rate': [
    { month: "January", desktop: 50 },
    { month: "February", desktop: 70 },
    { month: "March", desktop: 60 },
    { month: "April", desktop: 80 },
    { month: "May", desktop: 65 },
    { month: "June", desktop: 75 },
  ],
  'Border rate': [
    { month: "January", desktop: 30 },
    { month: "February", desktop: 40 },
    { month: "March", desktop: 35 },
    { month: "April", desktop: 45 },
    { month: "May", desktop: 38 },
    { month: "June", desktop: 50 },
  ],
  'Request rate': [
    { month: "January", desktop: 90 },
    { month: "February", desktop: 120 },
    { month: "March", desktop: 110 },
    { month: "April", desktop: 130 },
    { month: "May", desktop: 105 },
    { month: "June", desktop: 125 },
  ],
  'Variable 1': [
    { month: "January", desktop: 220 },
    { month: "February", desktop: 240 },
    { month: "March", desktop: 230 },
    { month: "April", desktop: 250 },
    { month: "May", desktop: 235 },
    { month: "June", desktop: 245 },
  ],
  'Variable 2': [
    { month: "January", desktop: 180 },
    { month: "February", desktop: 210 },
    { month: "March", desktop: 195 },
    { month: "April", desktop: 220 },
    { month: "May", desktop: 205 },
    { month: "June", desktop: 215 },
  ],
  'Variable 3': [
    { month: "January", desktop: 160 },
    { month: "February", desktop: 180 },
    { month: "March", desktop: 170 },
    { month: "April", desktop: 190 },
    { month: "May", desktop: 175 },
    { month: "June", desktop: 185 },
  ],
  'Variable X': [
    { month: "January", desktop: 220 },
    { month: "February", desktop: 240 },
    { month: "March", desktop: 230 },
    { month: "April", desktop: 250 },
    { month: "May", desktop: 235 },
    { month: "June", desktop: 245 },
  ],
  'Variable Y': [
    { month: "January", desktop: 180 },
    { month: "February", desktop: 210 },
    { month: "March", desktop: 195 },
    { month: "April", desktop: 220 },
    { month: "May", desktop: 205 },
    { month: "June", desktop: 215 },
  ],
  'Variable Z': [
    { month: "January", desktop: 160 },
    { month: "February", desktop: 180 },
    { month: "March", desktop: 170 },
    { month: "April", desktop: 190 },
    { month: "May", desktop: 175 },
    { month: "June", desktop: 185 },
  ],
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const DashboardChart = () => {
  const { selectedCategoriesSet1, selectedCategoriesSet2, selectedCategoriesSet3, selectedCategoriesSet4 } = useCategoryStore()

  // Combine selected category data from both sets
  const chartData = [
    ...selectedCategoriesSet1.flatMap((category) => categoryData[category] || []),
    ...selectedCategoriesSet2.flatMap((category) => categoryData[category] || []),
    ...selectedCategoriesSet3.flatMap((category) => categoryData[category] || []),
    ...selectedCategoriesSet4.flatMap((category) => categoryData[category] || []),
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Linear</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} stroke="#e0e0e0" strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
              domain={['auto', 'auto']}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.2}
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <TrendingUp className="h-4 w-4" />
      </CardFooter>
    </Card>
  )
}

export default DashboardChart
