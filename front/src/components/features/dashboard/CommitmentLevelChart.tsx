import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockData = [
  { region: 'Sul', Normal: 40, Leve: 35, Moderado: 15, Grave: 10 },
  { region: 'Sudeste', Normal: 45, Leve: 30, Moderado: 15, Grave: 10 },
  { region: 'Centro-Oeste', Normal: 35, Leve: 40, Moderado: 18, Grave: 7 },
  { region: 'Norte', Normal: 30, Leve: 35, Moderado: 25, Grave: 10 },
  { region: 'Nordeste', Normal: 33, Leve: 33, Moderado: 22, Grave: 12 },
];

const colors = {
    Normal: '#f87171', 
    Leve: '#2dd4bf', 
    Moderado: '#374151',
    Grave: '#facc15'
};


const CommitmentLevelChart = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">Distribuição por Nível de Comprometimento</CardTitle>
    </CardHeader>
    <CardContent className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
            data={mockData} 
            margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="region" />
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
    </CardContent>
  </Card>
);

export default CommitmentLevelChart;