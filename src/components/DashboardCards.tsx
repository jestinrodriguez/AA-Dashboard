import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

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
        <Card key={idx} className="@container/card rounded-sm dashboard-cards">
          <CardHeader className="relative">
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {card.value}
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                <card.badgeIcon className="size-3" />
                {card.badge}
              </Badge>
            </div>
          </CardHeader>

          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {card.description} <card.badgeIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">{card.subtext}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;
