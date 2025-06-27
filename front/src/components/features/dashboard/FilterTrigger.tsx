import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import Placeholder from "@/components/shared/Placeholder";
import FilterSheetContent from "./FilterSheetContent";

const FilterTrigger = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="fixed left-0 top-1/2 z-10 h-24 w-12 -translate-y-1/2 rounded-l-none rounded-r-lg p-3 ring-2 ring-slate-200"
        >
          <SlidersHorizontal className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[350px] sm:w-[400px] p-0">
        <div className="flex h-full flex-col p-6">
            <SheetHeader>
              <SheetDescription />
              <SheetTitle className="text-xl">Filtros de Análise</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex-grow">
                <FilterSheetContent />
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterTrigger;