import { Ellipsis, Sparkles } from "lucide-react";
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
  textColor = "#DAFD7F",
}: DashboardAccordionProps) => (
  <Accordion type="single" collapsible className={cn("px-4", className)}>
    <AccordionItem value="item-1">
      <AccordionTrigger className="min-w-0 overflow-hidden hover:no-underline items-center">
        <span style={{ color: textColor }} className="flex items-center">
          {icon && <Sparkles size={18} className="mr-2" />}
          <h2>{title}</h2>
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="results-output rounded-sm border px-4 py-3 mb-4 flex justify-between items-center">
          <p>
            The best found configuration is with 11 zones max and these charging
            stations.
          </p>
          <div className="w-6 h-6 ml-3">
            <Ellipsis/>
          </div>
        </div>
        <div className="results-output rounded-sm border px-4 py-3 flex justify-between items-center">
          <p>
            The best found configuration is with 11 zones max and these charging
            stations.
          </p>
          <div className="w-6 h-6 ml-3">
            <Ellipsis/>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default DashboardAccordion;
