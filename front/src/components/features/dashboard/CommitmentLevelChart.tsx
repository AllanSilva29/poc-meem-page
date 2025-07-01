import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { getDistrictDataByCity } from "@/services/mockData";

interface CommitmentLevelChartProps {
  locality?: string;
}

const colors = {
    Normal: '#f87171', 
    Leve: '#2dd4bf', 
    Moderado: '#374151',
    Grave: '#facc15'
};

const CommitmentLevelChart = ({ locality }: CommitmentLevelChartProps) => {
  const chartData = locality ? getDistrictDataByCity(locality) : null;
  const hasData = chartData && chartData.length > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Distribuição por Nível de Comprometimento
          {locality && hasData && (
            <span className="text-sm font-normal text-muted-foreground ml-2">
              - {locality}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-120">
        {!hasData ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-4xl text-muted-foreground mb-2">📊</div>
              <p className="text-lg font-medium text-muted-foreground">Sem dados</p>
              <p className="text-sm text-muted-foreground">
                {locality ? `Nenhum dado encontrado para "${locality}"` : "Selecione uma localidade para visualizar os dados"}
              </p>
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                data={chartData} 
                margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="district" />
              <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}`} />
              <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              <Legend
                payload={[
                    { value: 'Normal', type: 'square', id: 'ID01', color: colors.Normal },
                    { value: 'Leve', type: 'square', id: 'ID02', color: colors.Leve },
                    { value: 'Moderado', type: 'square', id: 'ID03', color: colors.Moderado },
                    { value: 'Grave', type: 'square', id: 'ID04', color: colors.Grave },
                ]}
                wrapperStyle={{ paddingTop: '20px' }} 
              />
              <Bar dataKey="Normal" stackId="a" fill={colors.Normal} name="Normal" />
              <Bar dataKey="Leve" stackId="a" fill={colors.Leve} name="Leve" />
              <Bar dataKey="Moderado" stackId="a" fill={colors.Moderado} name="Moderado" />
              <Bar dataKey="Grave" stackId="a" fill={colors.Grave} name="Grave" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default CommitmentLevelChart;