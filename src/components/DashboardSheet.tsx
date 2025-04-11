import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Input } from "./ui/input"
import CategorySelector from "./CategorySelector"

const DashboardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Variables</SheetTitle>
        </SheetHeader>
        <div>
          <Input/>
          <Button>Autofill</Button>
          <Button>Rerun</Button>
        </div>
        <div>
          <div>Variable Category</div>
          <CategorySelector/>
        </div>
        <div>Primary Variables</div>
        <div>Secondary Variables</div>
      </SheetContent>
    </Sheet>
  )
}

export default DashboardSheet