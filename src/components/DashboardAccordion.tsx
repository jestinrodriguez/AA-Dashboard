import { Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "../lib/utils";

type DashboardAccordionProps = {
  title: string;
  className?: string;
  icon?: boolean;
  textColor?: string; // Dynamically passed color value
};

const DashboardAccordion = ({
  title,
  className,
  icon = true,
  textColor = "#DAFD7F"
}: DashboardAccordionProps) => (
  <Accordion type="single" collapsible className={cn("px-4", className)}>
    <AccordionItem value="item-1">
      <AccordionTrigger className="min-w-0 overflow-hidden hover:no-underline">
      <span style={{ color: textColor }} className="flex items-center">
          {icon && <Sparkles size={18} className="mr-2" />}
          <h2>{title}</h2> {/* Apply dynamic text color */}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="results-output rounded-sm border px-4 py-3 mb-4">
          The best found configuration is with 11 zones max and these charging stations.
        </div>
        <div className="results-output rounded-sm border px-4 py-3">
          The best found configuration is with 11 zones max and these charging stations.
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default DashboardAccordion;