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

const TemporalTrendChart = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">Tendência Temporal MEEM</CardTitle>
    </CardHeader>
    <CardContent className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 30]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="60-70" stroke="#ef4444" name="60-70 anos" />
          <Line type="monotone" dataKey="71-80" stroke="#14b8a6" name="71-80 anos" />
          <Line type="monotone" dataKey="81+"  stroke="#274754" name="81+ anos" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default TemporalTrendChart;