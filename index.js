"use strict";
const _ = require('lodash')
const cityMapping = require('./data/cityMap.json')

function lookupViaCity(city) {
  const cityLookup = _.filter(cityMapping, function (o) { return o.city.toLowerCase() === city.toLowerCase() })
  if (cityLookup && cityLookup.length) {
    return cityLookup
  } else {
    return []
  }
}

function findPartialMatch(itemsToSearch, searchString) {
    const searchItems = searchString.split(" ");
    const isPartialMatch = searchItems.every(function(i) {
        return itemsToSearch.join().toLowerCase().indexOf(i.toLowerCase()) >= 0;
    })
    return isPartialMatch
}

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

module.exports = {
  lookupViaCity,
  findFromCityStateProvince,
  cityMapping
};
