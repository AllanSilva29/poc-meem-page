// Serviço de geração de relatórios

import type { Patient } from './types/patient';
import type { FilterState } from './types/filter';

/**
 * Gera um relatório CSV do dashboard com base nos filtros e dados fornecidos
 */
export function generateDashboardCSV(
  filters: FilterState, 
  patients: Patient[], 
  chartData: any, 
  temporalData: any
): string {
  let csv = 'Relatório do Dashboard\n\n';
  
  // Seção de filtros aplicados
  csv += 'Filtros Aplicados:\n';
  Object.entries(filters).forEach(([key, value]) => {
    csv += `${key}: ${value ?? ''}\n`;
  });
  
  // Seção de pacientes
  csv += '\nLista de Pacientes:\n';
  csv += 'Nome,Escolaridade,Idade,Pontuação,Data,Nível,Gênero\n';
  patients.forEach((p) => {
    csv += `${p.name},${p.scholarity},${p.age},${p.score},${p.date},${p.level},${p.gender}\n`;
  });
  
  // Seção de dados do gráfico de comprometimento
  if (chartData) {
    csv += '\nDados do Gráfico de Comprometimento:\n';
    csv += 'Distrito,Normal,Leve,Moderado,Grave\n';
    chartData.forEach((d: any) => {
      csv += `${d.district},${d.Normal},${d.Leve},${d.Moderado},${d.Grave}\n`;
    });
  }
  
  // Seção de tendência temporal
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

/**
 * Gera um relatório resumido com estatísticas básicas
 */
export function generateSummaryReport(patients: Patient[]): string {
  const totalPatients = patients.length;
  const averageAge = patients.reduce((sum, p) => sum + p.age, 0) / totalPatients;
  const averageScore = patients.reduce((sum, p) => sum + p.score, 0) / totalPatients;
  
  let report = 'Relatório Resumido\n\n';
  report += `Total de Pacientes: ${totalPatients}\n`;
  report += `Idade Média: ${averageAge.toFixed(1)} anos\n`;
  report += `Pontuação Média: ${averageScore.toFixed(1)}\n`;
  
  return report;
}