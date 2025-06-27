import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Search } from "lucide-react";
import { useState } from "react";

const FilterSheetContent = () => {
  const [initialDate, setInitialDate] = useState<Date | undefined>();
  const [finalDate, setFinalDate] = useState<Date | undefined>();

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex-1 space-y-8 overflow-y-auto pr-4">
        {/* Período de Análise */}
        <div className="space-y-2">
          <Label>Período de Análise</Label>
          <div className="grid grid-cols-2 gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="justify-start font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {initialDate ? initialDate.toLocaleDateString('pt-BR') : <span>Data Inicial</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={initialDate} onSelect={setInitialDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="justify-start font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {finalDate ? finalDate.toLocaleDateString('pt-BR') : <span>Data Final</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={finalDate} onSelect={setFinalDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Faixa Etária */}
        <div className="space-y-2">
          <Label>Faixa Etária</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Todas as faixas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as faixas</SelectItem>
              <SelectItem value="60-70">60-70 anos</SelectItem>
              <SelectItem value="71-80">71-80 anos</SelectItem>
              <SelectItem value="81+">81+ anos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Escolaridade */}
        <div className="space-y-2">
            <Label>Escolaridade</Label>
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="analfabeto" />
                    <Label htmlFor="analfabeto" className="font-normal">Analfabeto</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="fundamental" />
                    <Label htmlFor="fundamental" className="font-normal">Ensino Fundamental</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="medio" />
                    <Label htmlFor="medio" className="font-normal">Ensino Médio</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="superior" />
                    <Label htmlFor="superior" className="font-normal">Superior</Label>
                </div>
            </div>
        </div>

        {/* Gênero */}
        <div className="space-y-2">
            <Label>Gênero</Label>
            <RadioGroup defaultValue="todos" className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="todos" id="todos" />
                    <Label htmlFor="todos" className="font-normal">Todos</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="M" id="masculino" />
                    <Label htmlFor="masculino" className="font-normal">M</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="F" id="feminino" />
                    <Label htmlFor="feminino" className="font-normal">F</Label>
                </div>
            </RadioGroup>
        </div>
        
        {/* Localidade */}
        <div className="space-y-2">
            <Label htmlFor="localidade">Localidade</Label>
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="localidade" placeholder="Digite a localidade" className="pl-8" />
            </div>
        </div>
      </div>
      <Button variant="outline" className="w-full">Limpar Filtros</Button>
    </div>
  );
};
export default FilterSheetContent;