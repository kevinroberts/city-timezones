# city-timezones

A light and fast method of looking up timezones given the name of a city.

```bash
npm install city-timezones
```

```javascript
var cityTimezones = require('city-timezones');
```

### cityTimezones.lookupViaCity(city: string)

If a city is found, returns an **array** of possible matches with city, state, lat, lng, timezone. Returns an empty `[]` if nothing matches. Multiple cities can be found if they have the same name, i.e. Springfield.
A U.S. based city will contain a `state_ansi` property which is the abbreviated form of a US State [ANSI State Table](https://www.census.gov/geo/reference/ansi_statetables.html)

finding based on city name of Chicago:
```javascript
const cityLookup = cityTimezones.lookupViaCity('Chicago')
console.log(cityLookup)
```
Will return:
```javascript
[ { city: 'Chicago',
    city_ascii: 'Chicago',
    lat: 41.82999066,
    lng: -87.75005497,
    pop: 5915976,
    country: 'United States of America',
    iso2: 'US',
    iso3: 'USA',
    province: 'Illinois',
    exactCity: 'Chicago',
    exactProvince: 'IL',
    state_ansi: 'IL',
    timezone: 'America/Chicago' } ]
```
