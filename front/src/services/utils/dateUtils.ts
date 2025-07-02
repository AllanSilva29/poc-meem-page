// Utilitários de data

import { monthNames } from '../constants';

/**
 * Converte uma string de data no formato 'dd/mm/yyyy' para um objeto Date
 */
export function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Retorna os meses filtrados com base nas datas inicial e final
 */
export function getFilteredMonths(initialDate?: Date, finalDate?: Date): string[] {
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

/**
 * Formata uma data para o formato brasileiro (dd/mm/yyyy)
 */
export function formatDateBR(date: Date): string {
  return date.toLocaleDateString('pt-BR');
}

/**
 * Verifica se uma data está dentro de um intervalo
 */
export function isDateInRange(date: Date, startDate?: Date, endDate?: Date): boolean {
  if (startDate && endDate) {
    return date >= startDate && date <= endDate;
  } else if (startDate) {
    return date >= startDate;
  } else if (endDate) {
    return date <= endDate;
  }
  return true;
}