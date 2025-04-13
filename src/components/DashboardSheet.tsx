import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";
import { useCategoryStore } from "../store/useCategoryStore";
import DashboardAccordion from "./DashboardAccordion";
import { categoryDetails } from "../data/dummy";
import { Info } from "lucide-react";
import { cn } from "../lib/utils";

const DashboardSheet = () => {
  const { hoveredCategory } = useCategoryStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary" className="text-white">
          Edit Variables
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[45%] p-5 overflow-y-auto">
        <SheetHeader className="p-0 pt-2">
          <SheetTitle className="text-white">Edit Variables</SheetTitle>
        </SheetHeader>
        <div className="flex gap-3">
          <SearchBar />
          <Button variant="primary">Autofill</Button>
          <Button variant="primary">Rerun</Button>
        </div>
        <div className="max-h-[600px]">
          <div className="bg-dashboard !bg-[#161618] p-6 max-h-[400px] overflow-y-auto !rounded-b-none">
            <CategorySelector />
          </div>
          <div
            className={cn(
              "bg-dashboard !bg-[#222324] !rounded-t-none overflow-hidden transition-all duration-500 ease-out",
              hoveredCategory
                ? "max-h-[200px] opacity-100 translate-y-0 p-6"
                : "max-h-0 opacity-0 translate-y-2 p-0 pointer-events-none"
            )}
          >
            <div className={hoveredCategory ? "block" : "hidden"}>
              <h4 className="pb-3">
                <div className="flex items-center">
                  {hoveredCategory}
                  <Info className="ml-2" size={15} />
                </div>
              </h4>
              <div>{categoryDetails[hoveredCategory]?.longDesc}</div>
            </div>
          </div>
        </div>
        <DashboardAccordion
          title="Primary Variable"
          className="bg-[#222324] border border-[#525252] rounded-sm"
          icon={false}
          textColor="#C8E972"
        />
        <DashboardAccordion
          title="Secondary Variable"
          className="bg-[#222324] border border-[#525252] rounded-sm"
          icon={false}
          textColor="#C8E972"
        />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSheet;
