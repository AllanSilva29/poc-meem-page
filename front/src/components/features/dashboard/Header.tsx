import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import FilterTrigger from "./FilterTrigger";

const Header = ({ onExport }: { onExport: () => void }) => {
  return (
    <header className="flex items-center justify-between">
      
      <Button variant="outline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar
      </Button>
      <h1 className="text-2xl font-bold text-foreground">Dashboard MEEM</h1>
      <Button onClick={onExport}>
        <Download className="mr-2 h-4 w-4" />
        Exportar Relatório
      </Button>
    </header>
  );
};

export default Header;