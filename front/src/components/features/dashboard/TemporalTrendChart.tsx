import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', '60-70': 24, '71-80': 22, '81+': 18 },
  { month: 'Fev', '60-70': 25, '71-80': 21, '81+': 19 },
  { month: 'Mar', '60-70': 24, '71-80': 22, '81+': 18 },
  { month: 'Abr', '60-70': 26, '71-80': 23, '81+': 20 },
  { month: 'Mai', '60-70': 25, '71-80': 23, '81+': 22 },
  { month: 'Jun', '60-70': 26, '71-80': 23, '81+': 20 },
  { month: 'Jul', '60-70': 27, '71-80': 23, '81+': 20 },
  { month: 'Ago', '60-70': 26, '71-80': 23, '81+': 21 },
  { month: 'Set', '60-70': 28, '71-80': 24, '81+': 22 },
  { month: 'Out', '60-70': 26, '71-80': 25, '81+': 23 },
  { month: 'Nov', '60-70': 26, '71-80': 25, '81+': 20 },
  { month: 'Dez', '60-70': 26, '71-80': 24, '81+': 20 },
];

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

const monthMap: { [key: string]: number } = {
  'Jan': 0, 'Fev': 1, 'Mar': 2, 'Abr': 3, 'Mai': 4, 'Jun': 5,
  'Jul': 6, 'Ago': 7, 'Set': 8, 'Out': 9, 'Nov': 10, 'Dez': 11
};
const monthNames = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

function getMonthDate(month: string, year = 2023) {
  return new Date(year, monthMap[month], 1);
}

function getMonthIndex(month: string) {
  return monthMap[month];
}

function getFilteredMonths(initialDate?: Date, finalDate?: Date) {
  let startIdx = 0;
  let endIdx = 11;
  if (initialDate && finalDate) {
    // If initialDate > finalDate, show only the month of initialDate
    if (initialDate > finalDate) {
      startIdx = endIdx = initialDate.getMonth();
    } else {
      startIdx = initialDate.getMonth();
      endIdx = finalDate.getMonth();
    }
  } else if (initialDate) {
    startIdx = initialDate.getMonth();
    endIdx = Math.min(startIdx + 11, 11);
  } else if (finalDate) {
    endIdx = finalDate.getMonth();
    startIdx = Math.max(endIdx - 11, 0);
  }
  // Clamp to 12 months
  if (endIdx - startIdx > 11) endIdx = startIdx + 11;
  return monthNames.slice(startIdx, endIdx + 1);
}

const TemporalTrendChart = ({ ageRange, initialDate, finalDate }: TemporalTrendChartProps) => {
  const filteredMonths = getFilteredMonths(initialDate, finalDate);
  const filteredData = mockData.filter((item) => filteredMonths.includes(item.month));

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