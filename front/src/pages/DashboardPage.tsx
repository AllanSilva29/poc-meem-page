import Header from "@/components/features/dashboard/Header";
import FilterTrigger from "@/components/features/dashboard/FilterTrigger";
import TemporalTrendChart from "@/components/features/dashboard/TemporalTrendChart";
import CommitmentLevelChart from "@/components/features/dashboard/CommitmentLevelChart";
import PatientList from "@/components/features/dashboard/PatientList";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <FilterTrigger />
      <div className="flex flex-col gap-6 p-4 pl-20 sm:p-6 sm:pl-24 lg:p-8 lg:pl-28">
        <Header />
        <TemporalTrendChart />
        <CommitmentLevelChart />
        <PatientList />
      </div>
    </div>
  );
};

export default DashboardPage;