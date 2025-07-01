import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { temporalTrendMockData, getFilteredMonths } from "@/services/dashboardService";

type TemporalTrendChartProps = {
  ageRange: "Todas as faixas" | "60-70" | "71-80" | "81+";
  initialDate?: Date;
  finalDate?: Date;
};

const ageRangeLines = [
  { key: '60-70', color: '#ef4444', name: '60-70 anos' },
  { key: '71-80', color: '#14b8a6', name: '71-80 anos' },
  { key: '81+', color: '#274754', name: '81+ anos' },
];

const TemporalTrendChart = ({ ageRange, initialDate, finalDate }: TemporalTrendChartProps) => {
  const filteredMonths = getFilteredMonths(initialDate, finalDate);
  const filteredData = temporalTrendMockData.filter((item) => filteredMonths.includes(item.month));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Tendência Temporal MEEM</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 30]} />
            <Tooltip />
            <Legend />
            {ageRange === 'Todas as faixas'
              ? ageRangeLines.map(line => (
                  <Line key={line.key} type="monotone" dataKey={line.key} stroke={line.color} name={line.name} />
                ))
              : ageRangeLines.filter(line => line.key === ageRange).map(line => (
                  <Line key={line.key} type="monotone" dataKey={line.key} stroke={line.color} name={line.name} />
                ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TemporalTrendChart;