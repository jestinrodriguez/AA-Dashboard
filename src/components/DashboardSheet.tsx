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
          Edit Variable
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[40%] p-5 overflow-y-auto">
        <SheetHeader className="p-0 pt-2">
          <SheetTitle className="text-white">Edit Variables</SheetTitle>
        </SheetHeader>
        <div className="flex gap-3">
          <SearchBar />
          <Button variant="primary">Autofill</Button>
          <Button variant="primary">Rerun</Button>
        </div>
        <div>
          <div className="bg-dashboard !bg-[#161618] p-6 max-h-[450px] min-h-[400px] overflow-y-auto !rounded-b-none">
            <CategorySelector />
          </div>
          <div
            className={cn(
              "bg-dashboard !bg-[#222324] p-6 !rounded-t-none transition-opacity transition-transform duration-700 ease-out",
              hoveredCategory
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none translate-y-2"
            )}
          >
            {hoveredCategory && (
              <>
                <h4 className="pb-3">
                  <div className="flex items-center">
                    {hoveredCategory}
                    <Info className="ml-2" size={15} />
                  </div>
                </h4>
                <div>{categoryDetails[hoveredCategory]?.longDesc}</div>
              </>
            )}
          </div>
        </div>
        <DashboardAccordion title={"Primary Variable"} />
        <DashboardAccordion title={"Secondary Variable"} />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSheet;
