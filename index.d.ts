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
     * Search city info trough searching its name.
     * 
     * @param input City name.
     * @returns All the matching cities from search criteria.
     */
    export function lookupViaCity(input: string): CityData[];

    /**
     * Search city info trough searching its state or province name
     * 
     * @param input State or province name.
     * @returns All the matching cities from search criteria.
     */
    export function findFromCityStateProvince(input: string): CityData[];
}
