import React from "react";
import {
  Card
} from "./ui/card";
import { CircleHelp, TrendingUpIcon } from "lucide-react";

const DashboardCards = () => {
  const cardData = [
    {
      title: "Infrastructure Units",
      value: "$1,250.00",
      badge: "+12.5%",
      badgeIcon: TrendingUpIcon,
      description: "Trending up this month",
      subtext: "Visitors for the last 6 months",
    },
    {
      title: "Charging Growth",
      value: "1,234",
      badge: "+5.2%",
      badgeIcon: TrendingUpIcon,
      description: "Steady growth",
      subtext: "Past 6 months",
    },
    {
      title: "Localization change",
      value: "1,234",
      badge: "+5.2%",
      badgeIcon: TrendingUpIcon,
      description: "Steady growth",
      subtext: "Past 6 months",
    },
    {
      title: "Fleet growth",
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
        <Card
          key={idx}
          className="@container/card rounded-sm dashboard-cards p-6"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="truncate text-xl">{card.title}</div>
                <span className="text-[#888888]"><CircleHelp/></span>
              </div>
              <div className="truncate text-xs text-[#BBBBBB]">{card.description}</div>
            </div>
            <div className="text-3xl text-end font-bold">{card.value}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;
