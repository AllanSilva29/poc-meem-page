import Header from "@/components/features/dashboard/Header";
import FilterTrigger from "@/components/features/dashboard/FilterTrigger";
import TemporalTrendChart from "@/components/features/dashboard/TemporalTrendChart";
import CommitmentLevelChart from "@/components/features/dashboard/CommitmentLevelChart";
import PatientList from "@/components/features/dashboard/PatientList";
import { useState } from "react";
import { getDistrictDataByCity } from "@/services/mockData";

const defaultFilters = {
  initialDate: undefined,
  finalDate: undefined,
  ageRange: "Todas as faixas",
  scholarity: "Todas as escolaridades",
  gender: "Todos",
  locality: "",
};

type FilterState = typeof defaultFilters;
  // Chart data
  const chartData = filters.locality ? getDistrictDataByCity(filters.locality) : null;

const DashboardPage = () => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      <FilterTrigger
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <div className="flex flex-col gap-6 p-4 pl-20 sm:p-6 sm:pl-24 lg:p-8 lg:pl-28">
        <Header />
        <TemporalTrendChart ageRange={filters.ageRange} initialDate={filters.initialDate} finalDate={filters.finalDate} />
        <CommitmentLevelChart locality={filters.locality} />
        <PatientList filters={filters} />
      </div>
    </div>
  );
};

export default DashboardPage;