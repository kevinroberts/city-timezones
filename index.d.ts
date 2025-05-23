declare module 'city-timezones' {
    interface CityData {
        readonly lat: number;
        readonly lng: number;
        readonly pop: number;
        readonly city: string;
        readonly iso2: string;
        readonly iso3: string;
        readonly country: string;
        readonly timezone: string;
        readonly province: string;
        readonly exactCity: string;
        readonly city_ascii: string;
        readonly state_ansi: string;
        readonly exactProvince: string;
    }

    /**
     * Search for city info by searching by city name.
     *
     * @param input City name.
     * @returns All the matching cities from search criteria.
     */
    export function lookupViaCity(input: string): CityData[];

    /**
     * Search for city info by searching a state or province name I.E. Springfield MO
     *
     * @param input State or province name.
     * @returns All the matching cities from search criteria.
     */
    export function findFromCityStateProvince(input: string): CityData[];

     /**
     * Find city data via its ISO2 or ISO3 code
     * @param input Iso2 or iso3 code
     * @returns All the matching cities from search criteria.
     */
    export function findFromIsoCode(input: string): CityData[];

    /**
     * Array of all city objects
     *
     * @returns All the cities.
     */
    export const cityMapping: CityData[];
}
