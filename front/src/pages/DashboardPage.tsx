import Header from "@/components/features/dashboard/Header";
import FilterTrigger from "@/components/features/dashboard/FilterTrigger";
import TemporalTrendChart from "@/components/features/dashboard/TemporalTrendChart";
import CommitmentLevelChart from "@/components/features/dashboard/CommitmentLevelChart";
import PatientList from "@/components/features/dashboard/PatientList";
import { useState } from "react";
import { saveAs } from "file-saver";
import { getDistrictDataByCity } from "@/services/mockData";
import { mockPatients, getFilteredMonths, generateDashboardCSV, temporalTrendMockData, filterPatients } from "@/services/dashboardService";

const defaultFilters = {
  initialDate: undefined,
  finalDate: undefined,
  ageRange: "Todas as faixas",
  scholarity: "Todas as escolaridades",
  gender: "Todos",
  locality: "",
};

type FilterState = typeof defaultFilters;

const DashboardPage = () => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  const handleExport = () => {
    const filteredPatients = filterPatients(mockPatients, filters);
    const chartData = filters.locality ? getDistrictDataByCity(filters.locality) : null;
    const filteredMonths = getFilteredMonths(filters.initialDate, filters.finalDate);
    const filteredTemporalData = temporalTrendMockData.filter((item) => filteredMonths.includes(item.month));
    const csv = generateDashboardCSV(filters, filteredPatients, chartData, filteredTemporalData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'relatorio_dashboard.csv');
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      <FilterTrigger
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <div className="flex flex-col gap-6 p-4 pl-20 sm:p-6 sm:pl-24 lg:p-8 lg:pl-28">
        <Header onExport={handleExport} />
        <TemporalTrendChart ageRange={filters.ageRange} initialDate={filters.initialDate} finalDate={filters.finalDate} />
        <CommitmentLevelChart locality={filters.locality} />
        <PatientList filters={filters} />
      </div>
    </div>
  );
};

export default DashboardPage;