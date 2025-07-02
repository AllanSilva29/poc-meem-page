// Serviço de filtragem de dados

import type { Patient } from './types/patient';
import type { FilterState } from './types/filter';
import { parseDate } from './utils/dateUtils';

/**
 * Filtra pacientes com base nos critérios fornecidos
 */
export function filterPatients(patients: Patient[], filters: FilterState): Patient[] {
  return patients.filter((patient) => {
    // Filtro por data
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

    // Filtro por faixa etária
    if (filters.ageRange !== 'Todas as faixas') {
      if (filters.ageRange === '60-70' && (patient.age < 60 || patient.age > 70)) return false;
      if (filters.ageRange === '71-80' && (patient.age < 71 || patient.age > 80)) return false;
      if (filters.ageRange === '81+' && patient.age < 81) return false;
    }

    // Filtro por escolaridade
    if (filters.scholarity !== 'Todas as escolaridades' && patient.scholarity !== filters.scholarity) {
      return false;
    }

    // Filtro por gênero
    if (filters.gender !== 'Todos' && patient.gender !== filters.gender) {
      return false;
    }

    return true;
  });
}

/**
 * Filtra dados temporais com base nos meses fornecidos
 */
export function filterTemporalData(data: any[], months: string[]): any[] {
  return data.filter((item) => months.includes(item.month));
}