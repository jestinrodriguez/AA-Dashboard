import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge, TrendingUpIcon } from "lucide-react";

const DashboardCards = () => {
  const cardData = [
    {
      title: "Total Revenue",
      value: "$1,250.00",
      badge: "+12.5%",
      badgeIcon: TrendingUpIcon,
      description: "Trending up this month",
      subtext: "Visitors for the last 6 months",
    },
    {
      title: "New Customers",
      value: "1,234",
      badge: "+5.2%",
      badgeIcon: TrendingUpIcon,
      description: "Steady growth",
      subtext: "Past 6 months",
    },
    {
      title: "New Customers",
      value: "1,234",
      badge: "+5.2%",
      badgeIcon: TrendingUpIcon,
      description: "Steady growth",
      subtext: "Past 6 months",
    },
    {
      title: "New Customers",
      value: "1,234",
      badge: "+5.2%",
      badgeIcon: TrendingUpIcon,
      description: "Steady growth",
      subtext: "Past 6 months",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
      {cardData.map((card, idx) => (
        <Card key={idx} className="@container/card rounded-sm dashboard-cards p-6">
          <div>
            <h3>{card.title}</h3>
            <div>{card.description}</div>
          </div>
          <div>{card.value}</div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;
