// Tipos relacionados a visualização de dados

import type { AgeRange } from './common';

export interface TemporalTrendData {
  month: string;
  '60-70': number;
  '71-80': number;
  '81+': number;
}

export interface DistrictData {
  district: string;
  Normal: number;
  Leve: number;
  Moderado: number;
  Grave: number;
}

export interface CityData {
  [cityName: string]: DistrictData[];
}

export interface AgeRangeLine {
  key: AgeRange;
  color: string;
  name: string;
} 