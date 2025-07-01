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

export const cityDistrictsData: CityData = {
  "Curitiba": [
    { district: 'Boqueirão', Normal: 40, Leve: 35, Moderado: 15, Grave: 10 },
    { district: 'Santa Felicidade', Normal: 45, Leve: 30, Moderado: 15, Grave: 10 },
    { district: 'Cajuru', Normal: 35, Leve: 40, Moderado: 18, Grave: 7 },
    { district: 'Portão', Normal: 30, Leve: 35, Moderado: 25, Grave: 10 },
    { district: 'Bairro Alto', Normal: 33, Leve: 33, Moderado: 22, Grave: 12 },
    { district: 'Centro', Normal: 25, Leve: 30, Moderado: 30, Grave: 15 },
    { district: 'Batel', Normal: 50, Leve: 25, Moderado: 15, Grave: 10 },
    { district: 'Mercês', Normal: 38, Leve: 32, Moderado: 20, Grave: 10 },
  ],
  "São Paulo": [
    { district: 'Vila Madalena', Normal: 35, Leve: 40, Moderado: 18, Grave: 7 },
    { district: 'Pinheiros', Normal: 42, Leve: 28, Moderado: 20, Grave: 10 },
    { district: 'Itaim Bibi', Normal: 45, Leve: 25, Moderado: 20, Grave: 10 },
    { district: 'Moema', Normal: 38, Leve: 32, Moderado: 22, Grave: 8 },
    { district: 'Vila Mariana', Normal: 33, Leve: 35, Moderado: 25, Grave: 7 },
    { district: 'Jardins', Normal: 40, Leve: 30, Moderado: 20, Grave: 10 },
    { district: 'Consolação', Normal: 28, Leve: 35, Moderado: 25, Grave: 12 },
    { district: 'Bela Vista', Normal: 30, Leve: 32, Moderado: 28, Grave: 10 },
  ]
};

export const getDistrictDataByCity = (cityName: string): DistrictData[] | null => {
  const normalizedCityName = cityName.trim().toLowerCase();
  
  for (const [city, data] of Object.entries(cityDistrictsData)) {
    if (city.toLowerCase() === normalizedCityName) {
      return data;
    }
  }
  
  return null;
}; 