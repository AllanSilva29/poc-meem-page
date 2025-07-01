// Dados mockados de pacientes
export const mockPatients = [
  { id: '001', name: 'Paciente 001', scholarity: "Ensino Superior", age: 65, score: 28, date: '01/12/2023', level: 'Normal', gender: 'M' },
  { id: '002', name: 'Paciente 002', scholarity: "Analfabeto", age: 73, score: 22, date: '02/12/2023', level: 'Leve', gender: 'F' },
  { id: '003', name: 'Paciente 003', scholarity: "Ensino Médio", age: 82, score: 8, date: '03/12/2023', level: 'Grave', gender: 'F' },
  { id: '004', name: 'Paciente 004', scholarity: "Ensino Fundamental", age: 68, score: 19, date: '04/12/2023', level: 'Moderado', gender: 'M' },
  { id: '005', name: 'Paciente 005', scholarity: "Ensino Superior", age: 75, score: 25, date: '05/12/2023', level: 'Normal', gender: 'M' },
];

// Dados mockados de tendência temporal
export const temporalTrendMockData = [
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

// Mapeamento de meses
export const monthMap = {
  'Jan': 0, 'Fev': 1, 'Mar': 2, 'Abr': 3, 'Mai': 4, 'Jun': 5,
  'Jul': 6, 'Ago': 7, 'Set': 8, 'Out': 9, 'Nov': 10, 'Dez': 11
};

export const monthNames = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

// Helpers de datas
export function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

export function getFilteredMonths(initialDate?: Date, finalDate?: Date) {
  let startIdx = 0;
  let endIdx = 11;
  if (initialDate && finalDate) {
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
  if (endIdx - startIdx > 11) endIdx = startIdx + 11;
  return monthNames.slice(startIdx, endIdx + 1);
}

// Filtragem de pacientes
export function filterPatients(patients: typeof mockPatients, filters: any) {
  return patients.filter((patient) => {
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
    if (filters.ageRange !== 'Todas as faixas') {
      if (filters.ageRange === '60-70' && (patient.age < 60 || patient.age > 70)) return false;
      if (filters.ageRange === '71-80' && (patient.age < 71 || patient.age > 80)) return false;
      if (filters.ageRange === '81+' && patient.age < 81) return false;
    }
    if (filters.scholarity !== 'Todas as escolaridades' && patient.scholarity !== filters.scholarity) {
      return false;
    }
    if (filters.gender !== 'Todos' && patient.gender !== filters.gender) {
      return false;
    }
    return true;
  });
}

// Geração de CSV do dashboard
export function generateDashboardCSV(filters: any, patients: typeof mockPatients, chartData: any, temporalData: any) {
  let csv = 'Relatório do Dashboard\n\n';
  csv += 'Filtros Aplicados:\n';
  Object.entries(filters).forEach(([key, value]) => {
    csv += `${key}: ${value ?? ''}\n`;
  });
  csv += '\nLista de Pacientes:\n';
  csv += 'Nome,Escolaridade,Idade,Pontuação,Data,Nível,Gênero\n';
  patients.forEach((p) => {
    csv += `${p.name},${p.scholarity},${p.age},${p.score},${p.date},${p.level},${p.gender}\n`;
  });
  if (chartData) {
    csv += '\nDados do Gráfico de Comprometimento:\n';
    csv += 'Distrito,Normal,Leve,Moderado,Grave\n';
    chartData.forEach((d: any) => {
      csv += `${d.district},${d.Normal},${d.Leve},${d.Moderado},${d.Grave}\n`;
    });
  }
  csv += '\nTendência Temporal MEEM:\n';
  if (filters.ageRange === 'Todas as faixas') {
    csv += 'Mês,60-70,71-80,81+\n';
    temporalData.forEach((row: any) => {
      csv += `${row.month},${row['60-70']},${row['71-80']},${row['81+']}\n`;
    });
  } else {
    csv += `Mês,${filters.ageRange}\n`;
    temporalData.forEach((row: any) => {
      csv += `${row.month},${row[filters.ageRange]}\n`;
    });
  }
  return csv;
} 