var _ = require('lodash')
var cityMapping = require('./data/cityMap.json')

function lookupViaCity(city) {
  let cityLookup = _.filter(cityMapping, function (o) { return o.city === city })
  if (cityLookup && cityLookup.length > 0) {
    return cityLookup
  } else {
    return []
  }
}

module.exports = {
  lookupViaCity
};
