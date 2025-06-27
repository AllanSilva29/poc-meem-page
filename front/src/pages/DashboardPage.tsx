import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/features/dashboard/Header";
import Placeholder from "@/components/shared/Placeholder";
import FilterTrigger from "@/components/features/dashboard/FilterTrigger";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-100">
      <FilterTrigger />

      <div className="p-4 pl-20 sm:p-6 sm:pl-24 lg:p-8 lg:pl-28">
        
        <Card className="w-full">
          <CardContent className="flex flex-col gap-6 p-6">
            <Header />
            <Placeholder className="h-72">
              <div className="text-lg font-semibold">Tendência Temporal MEEM</div>
            </Placeholder>
            <Placeholder className="h-80">
              <div className="text-lg font-semibold">Distribuição por Nível de Comprometimento</div>
            </Placeholder>
            <Placeholder className="min-h-[24rem]">
              <div className="text-lg font-semibold">Lista de Pacientes</div>
            </Placeholder>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default DashboardPage;