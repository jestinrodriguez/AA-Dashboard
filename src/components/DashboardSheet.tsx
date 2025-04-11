import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";

const DashboardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary" className="text-white">
          Edit Variable
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[40%] p-5">
        <SheetHeader className="p-0 pt-2">
          <SheetTitle className="text-white">Edit Variables</SheetTitle>
        </SheetHeader>
        <div className="flex gap-3">
          <SearchBar />
          <Button variant="primary">Autofill</Button>
          <Button variant="primary">Rerun</Button>
        </div>
        <div>
          <CategorySelector />
        </div>
        <div>Primary Variables</div>
        <div>Secondary Variables</div>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSheet;
