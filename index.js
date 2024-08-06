"use strict";
const _ = require('lodash')
const cityMapping = require('./data/cityMap.json')

/**
 * Look up timezone data via City name
 * @param {string} city - The city name to find
 * @returns {CityData[]} - array of city data matches
 */
function lookupViaCity(city) {
  const cityLookup = _.filter(cityMapping, function (o) { return o.city.toLowerCase() === city.toLowerCase() })
  if (cityLookup && cityLookup.length) {
    return cityLookup
  } else {
    return []
  }
}

/**
 * Find a partial match on the provided String array for a given search string
 * @param itemsToSearch {string[]}
 * @param searchString {string}
 * @returns {boolean} match found
 */
function findPartialMatch(itemsToSearch, searchString) {
    const searchItems = searchString.split(" ");
    const isPartialMatch = searchItems.every(function(i) {
        return itemsToSearch.join().toLowerCase().indexOf(i.toLowerCase()) >= 0;
    })
    return isPartialMatch
}

/**
 * Find city data via a city name, province, state or country combination
 * @param {string} searchString search containing a city / state / province
 * @returns {CityData[]} - array of city data matches
 */
function findFromCityStateProvince(searchString) {
  if (searchString) {
    const cityLookup = _.filter(cityMapping, function (o) { return findPartialMatch([o.city,o.state_ansi,o.province,o.country], searchString) })
    if (cityLookup && cityLookup.length) {
      return cityLookup
    } else {
      return []
    }
  } else {
    return []
  }
}

/**
 * Find city data via its ISO2 or ISO3 code
 * @param {string} isoCodeValue Iso2 or iso3 code
 * @returns {CityData[]} - array of city data matches
 */
function findFromIsoCode(isoCodeValue){
  if (isoCodeValue) {
    const cityLookup = _.filter(cityMapping, function (o) {
      return o.iso2.toString().toLowerCase() === isoCodeValue.toLowerCase() || o.iso3.toString().toLowerCase() === isoCodeValue.toLowerCase() })
    if (cityLookup && cityLookup.length) {
      return cityLookup
    } else {
      return []
    }
  } else {
    return []
  }
}

module.exports = {
  lookupViaCity,
  findFromCityStateProvince,
  findFromIsoCode,
  cityMapping
};
