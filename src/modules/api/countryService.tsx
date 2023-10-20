import { Country } from '../types/country';

export const fetchCountriesData = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');

    if (!response.ok) {
      throw new Error('Failed to fetch countries data');
    }

    const countriesJson: any[] = await response.json();

    const countries: Country[] = countriesJson
      .map((country: any) => ({
        id: country.altSpellings[0],
        name: country.name.common
      }))
      .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

    return countries;
  } catch (error) {
    throw new Error(`Error fetching countries data: ${error.message}`);
  }
};
