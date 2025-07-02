// Dados mockados de pacientes

import type { Patient } from '../types/patient';

export const mockPatients: Patient[] = [
  { id: '001', name: 'Paciente 001', scholarity: "Ensino Superior", age: 65, score: 28, date: '01/12/2023', level: 'Normal', gender: 'M' },
  { id: '002', name: 'Paciente 002', scholarity: "Analfabeto", age: 73, score: 22, date: '02/12/2023', level: 'Leve', gender: 'F' },
  { id: '003', name: 'Paciente 003', scholarity: "Ensino Médio", age: 82, score: 8, date: '03/12/2023', level: 'Grave', gender: 'F' },
  { id: '004', name: 'Paciente 004', scholarity: "Ensino Fundamental", age: 68, score: 19, date: '04/12/2023', level: 'Moderado', gender: 'M' },
  { id: '005', name: 'Paciente 005', scholarity: "Ensino Superior", age: 75, score: 25, date: '05/12/2023', level: 'Normal', gender: 'M' },
];