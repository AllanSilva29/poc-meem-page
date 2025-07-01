import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const mockPatients = [
  { id: '001', name: 'Paciente 001', scholarity: "Ensino Superior", age: 65, score: 28, date: '01/12/2023', level: 'Normal', gender: 'M' },
  { id: '002', name: 'Paciente 002', scholarity: "Analfabeto", age: 73, score: 22, date: '02/12/2023', level: 'Leve', gender: 'F' },
  { id: '003', name: 'Paciente 003', scholarity: "Ensino Médio", age: 82, score: 8, date: '03/12/2023', level: 'Grave', gender: 'F' },
  { id: '004', name: 'Paciente 004', scholarity: "Ensino Fundamental", age: 68, score: 19, date: '04/12/2023', level: 'Moderado', gender: 'M' },
  { id: '005', name: 'Paciente 005', scholarity: "Ensino Superior", age: 75, score: 25, date: '05/12/2023', level: 'Normal', gender: 'M' },
];

const getBadgeClass = (level: string) => {
    switch (level) {
        case 'Normal': return 'bg-green-100 text-green-800 hover:bg-green-200 border-green-300';
        case 'Leve': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-300';
        case 'Moderado': return 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-300';
        case 'Grave': return 'bg-red-100 text-red-800 hover:bg-red-200 border-red-300';
        default: return 'bg-gray-100 text-gray-800';
    }
}

type PatientListProps = {
  filters: {
    initialDate?: Date;
    finalDate?: Date;
    ageRange: string;
    scholarity: string;
    gender: string;
    locality: string;
  };
};

function parseDate(dateStr: string) {
  // dateStr: 'dd/mm/yyyy'
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

const PatientList = ({ filters }: PatientListProps) => {
  const filteredPatients = mockPatients.filter((patient) => {
    // Date filter
    if (filters.initialDate && filters.finalDate) {
      const patientDate = parseDate(patient.date);
      if (filters.initialDate > filters.finalDate) return false;
      if (patientDate < filters.initialDate || patientDate > filters.finalDate) return false;
    } else if (filters.initialDate) {
      const patientDate = parseDate(patient.date);
      if (patientDate < filters.initialDate) return false;
    } else if (filters.finalDate) {
      const patientDate = parseDate(patient.date);
      if (patientDate > filters.finalDate) return false;
    }
    // Age range filter
    if (filters.ageRange !== 'Todas as faixas') {
      if (filters.ageRange === '60-70' && (patient.age < 60 || patient.age > 70)) return false;
      if (filters.ageRange === '71-80' && (patient.age < 71 || patient.age > 80)) return false;
      if (filters.ageRange === '81+' && patient.age < 81) return false;
    }
    // Scholarity filter
    if (filters.scholarity !== 'Todas as escolaridades' && patient.scholarity !== filters.scholarity) {
      return false;
    }
    // Gender filter
    if (filters.gender !== 'Todos' && patient.gender !== filters.gender) {
      return false;
    }
    // Locality filter (not implemented)
    return true;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Lista de Pacientes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Escolaridade</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>Pontuação</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Nível</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id} className="h-16">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {patient.level === 'Grave' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    {patient.name}
                  </div>
                </TableCell>
                <TableCell>{patient.scholarity}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell className={patient.level === 'Grave' ? 'text-red-600 font-bold' : ''}>{patient.score}</TableCell>
                <TableCell>{patient.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getBadgeClass(patient.level)}>{patient.level}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PatientList;