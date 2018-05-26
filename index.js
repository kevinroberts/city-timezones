"use strict";
const _ = require('lodash')
const cityMapping = require('./data/cityMap.json')

function lookupViaCity(city) {
  const cityLookup = _.filter(cityMapping, function (o) { return o.city.toLowerCase() === city.toLowerCase() })
  if (cityLookup && cityLookup.length > 0) {
    return cityLookup
  } else {
    return []
  }
}

function findPartialMatch(itemsToSearch, searchString) {
    var searchItems = searchString.split(" ");
    var isPartialMatch = searchItems.every(function(i) {
        return itemsToSearch.join().toLowerCase().indexOf(i.toLowerCase()) >= 0;
    })
    return isPartialMatch;
}

function lookupViaPartialMatch(searchString) {
  var searchItems = searchString.split(" ");
  const cityLookup = _.filter(cityMapping, function (o) { return findPartialMatch([o.city,o.province,o.country], searchString) })
  if (cityLookup && cityLookup.length > 0) {
    return cityLookup
  } else {
    return []
  }
}

module.exports = {
  lookupViaCity,
  lookupViaPartialMatch
};
