import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Search } from "lucide-react";
import { type FilterState } from "@/services/types/filter";
import { ageRangeOptions, scholarityOptions, genderOptions, availableCities } from "@/services/constants";

type FilterSheetContentProps = {
  filters: FilterState;
  onFilterChange: (key: string, value: any) => void;
  onClearFilters: () => void;
};

const FilterSheetContent = ({ filters, onFilterChange, onClearFilters }: FilterSheetContentProps) => {
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
                  {filters.initialDate ? filters.initialDate.toLocaleDateString('pt-BR') : <span>Data Inicial</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={filters.initialDate} onSelect={(date) => onFilterChange('initialDate', date)} initialFocus captionLayout="dropdown" />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="justify-start font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.finalDate ? filters.finalDate.toLocaleDateString('pt-BR') : <span>Data Final</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={filters.finalDate} onSelect={(date) => onFilterChange('finalDate', date)} initialFocus captionLayout="dropdown" />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Faixa Etária */}
        <div className="space-y-2">
          <Label>Faixa Etária</Label>
          <Select value={filters.ageRange} onValueChange={(value) => onFilterChange('ageRange', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as faixas" />
            </SelectTrigger>
            <SelectContent>
              {ageRangeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Escolaridade */}
        <div className="space-y-2">
            <Label>Escolaridade</Label>
            <Select value={filters.scholarity} onValueChange={(value) => onFilterChange('scholarity', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Todas as escolaridades" />
              </SelectTrigger>
              <SelectContent>
                {scholarityOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
        </div>

        {/* Gênero */}
        <div className="space-y-2">
            <Label>Gênero</Label>
            <RadioGroup value={filters.gender} onValueChange={(value) => onFilterChange('gender', value)} className="flex items-center space-x-4">
                {genderOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="font-normal">{option.label}</Label>
                  </div>
                ))}
            </RadioGroup>
        </div>
        
        {/* Localidade */}
        <div className="space-y-2">
            <Label htmlFor="localidade">Localidade</Label>
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="localidade" 
                  placeholder="Digite a localidade (ex: Curitiba, São Paulo)" 
                  className="pl-8" 
                  value={filters.locality} 
                  onChange={e => onFilterChange('locality', e.target.value)} 
                />
            </div>
            <p className="text-xs text-muted-foreground">
              Cidades disponíveis: {availableCities.join(', ')}
            </p>
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={onClearFilters}>Limpar Filtros</Button>
    </div>
  );
};
export default FilterSheetContent;