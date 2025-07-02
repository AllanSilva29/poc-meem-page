// Constantes centralizadas do dashboard

import type { FilterState } from './types/filter';
import type { AgeRange, Scholarity, Gender } from './types/common';

export const defaultFilters: FilterState = {
  initialDate: undefined,
  finalDate: undefined,
  ageRange: "Todas as faixas",
  scholarity: "Todas as escolaridades",
  gender: "Todos",
  locality: "",
};

// Opções dos filtros
export const ageRangeOptions = [
  { value: "Todas as faixas", label: "Todas as faixas" },
  { value: "60-70", label: "60-70 anos" },
  { value: "71-80", label: "71-80 anos" },
  { value: "81+", label: "81+ anos" },
] as const;

export const scholarityOptions = [
  { value: "Todas as escolaridades", label: "Todas as escolaridades" },
  { value: "Analfabeto", label: "Analfabeto" },
  { value: "Ensino Fundamental", label: "Ensino Fundamental" },
  { value: "Ensino Médio", label: "Ensino Médio" },
  { value: "Ensino Superior", label: "Ensino Superior" },
] as const;

export const genderOptions = [
  { value: "Todos", label: "Todos" },
  { value: "M", label: "M" },
  { value: "F", label: "F" },
] as const;

export const availableCities = ["Curitiba", "São Paulo"] as const;

// Mapeamento de meses
export const monthMap = {
  'Jan': 0, 'Fev': 1, 'Mar': 2, 'Abr': 3, 'Mai': 4, 'Jun': 5,
  'Jul': 6, 'Ago': 7, 'Set': 8, 'Out': 9, 'Nov': 10, 'Dez': 11
};

export const monthNames = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

// Configurações de gráficos
export const ageRangeLines = [
  { key: '60-70', color: '#ef4444', name: '60-70 anos' },
  { key: '71-80', color: '#14b8a6', name: '71-80 anos' },
  { key: '81+', color: '#274754', name: '81+ anos' },
] as const;