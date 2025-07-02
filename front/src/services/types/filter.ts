// Tipos relacionados a filtros

import type { AgeRange, Scholarity, Gender } from './common';

export interface FilterState {
  initialDate?: Date;
  finalDate?: Date;
  ageRange: AgeRange;
  scholarity: Scholarity;
  gender: Gender;
  locality: string;
} 