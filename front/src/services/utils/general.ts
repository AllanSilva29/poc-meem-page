// Utilitários gerais de lógica de negócio

/**
 * Normaliza uma data para o início do dia (00:00:00)
 */
export function normalizeDate(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
} 