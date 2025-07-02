// Serviço de cidades e distritos

import type { DistrictData } from './types/visualization';
import { cityDistrictsData } from './data/cities';

/**
 * Busca dados de distritos por nome da cidade
 */
export function getDistrictDataByCity(cityName: string): DistrictData[] | null {
  const normalizedCityName = cityName.trim().toLowerCase();
  
  for (const [city, data] of Object.entries(cityDistrictsData)) {
    if (city.toLowerCase() === normalizedCityName) {
      return data;
    }
  }
  
  return null;
}

/**
 * Retorna lista de todas as cidades disponíveis
 */
export function getAvailableCities(): string[] {
  return Object.keys(cityDistrictsData);
}

/**
 * Verifica se uma cidade existe nos dados
 */
export function isCityAvailable(cityName: string): boolean {
  const normalizedCityName = cityName.trim().toLowerCase();
  return Object.keys(cityDistrictsData).some(
    city => city.toLowerCase() === normalizedCityName
  );
}

/**
 * Retorna estatísticas resumidas de uma cidade
 */
export function getCityStats(cityName: string) {
  const districts = getDistrictDataByCity(cityName);
  if (!districts) return null;

  const totalDistricts = districts.length;
  const totalNormal = districts.reduce((sum, d) => sum + d.Normal, 0);
  const totalLeve = districts.reduce((sum, d) => sum + d.Leve, 0);
  const totalModerado = districts.reduce((sum, d) => sum + d.Moderado, 0);
  const totalGrave = districts.reduce((sum, d) => sum + d.Grave, 0);

  return {
    cityName,
    totalDistricts,
    totalNormal,
    totalLeve,
    totalModerado,
    totalGrave,
    total: totalNormal + totalLeve + totalModerado + totalGrave
  };
}