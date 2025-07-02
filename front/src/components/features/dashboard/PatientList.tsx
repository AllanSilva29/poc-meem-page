import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { mockPatients } from "@/services/data/patients";
import { filterPatients } from "@/services/filterService";
import { type FilterState } from "@/services/types/filter";

type PatientListProps = {
  filters: FilterState;
};

const getBadgeClass = (level: string) => {
    switch (level) {
        case 'Normal': return 'bg-green-100 text-green-800 hover:bg-green-200 border-green-300';
        case 'Leve': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-300';
        case 'Moderado': return 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-300';
        case 'Grave': return 'bg-red-100 text-red-800 hover:bg-red-200 border-red-300';
        default: return 'bg-gray-100 text-gray-800';
    }
}

const PatientList = ({ filters }: PatientListProps) => {
  const filteredPatients = filterPatients(mockPatients, filters);

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
            {filteredPatients.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground text-lg">
                  Não há dados nesse intervalo
                </TableCell>
              </TableRow>
            ) : (
              filteredPatients.map((patient) => (
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
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PatientList;