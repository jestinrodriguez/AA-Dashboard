import { Sparkle, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const DashboardAccordion = () => {
  return (
    <Accordion type="single" collapsible className="px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="min-w-0 overflow-hidden hover:no-underline">
          <span className="flex items-center text-[#DCFF7FFD]">
            <Sparkles size={18} className="mr-2" />
            <h2>Best Scenario Results</h2>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="results-output rounded-sm border px-4 py-3 mb-3">
            The best found configuration based on profit is characterized by 11
            zones max with these charging stations
          </div>
          <div className="results-output rounded-sm border px-4 py-3">
            The best found configuration based on profit is characterized by 11
            zones max with these charging stations
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DashboardAccordion;
