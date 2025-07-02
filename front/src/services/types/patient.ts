// Tipos relacionados a pacientes

import type { Scholarity, Gender } from './common';

export interface Patient {
  id: string;
  name: string;
  scholarity: Scholarity;
  age: number;
  score: number;
  date: string;
  level: 'Normal' | 'Leve' | 'Moderado' | 'Grave';
  gender: Gender;
} 