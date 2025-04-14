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
import { Info, RotateCw, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";
import Spinner from "./Spinner";

const DashboardSheet = () => {
  const { hoveredCategory, loadingCategory } = useCategoryStore();
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
        <div className="flex items-center gap-3">
          <div className="flex-grow">
            <SearchBar />
          </div>
          <Button variant="primary">
            <span className="flex items-center gap-2">
              <Sparkles />
              Autofill
            </span>
          </Button>
          <Button variant="secondary">
            <span className="flex items-center gap-2">
              <RotateCw />
              Rerun
            </span>
          </Button>
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
              <div>
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
          {loadingCategory && !hoveredCategory && (
            <div className="text-sm text-gray-300 flex items-center justify-center p-2">
              <Spinner />
            </div>
          )}
        </div>
        <DashboardAccordion
          title="Primary Variable"
          className="bg-[#222324] border border-[#525252] rounded-sm font-medium"
          icon={false}
          textColor="#C8E972"
        />
        <DashboardAccordion
          title="Secondary Variable"
          className="bg-[#222324] border border-[#525252] rounded-sm font-medium"
          icon={false}
          textColor="#C8E972"
        />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSheet;
