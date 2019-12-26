const assert = require('assert');
const cityTimezones = require('../index.js');

describe('City lookup tests', function() {
    it('finding Chicago', function() {
      let city = cityTimezones.lookupViaCity('Chicago')
      console.log('found Chicago by name: ', city)
      assert.equal(41.82999066, city[0].lat);
    });
    it('finding Chicago lower cased', function() {
      let city = cityTimezones.lookupViaCity('chicago')
      console.log('found Chicago by name lower case: ', city)
      assert.equal(41.82999066, city[0].lat);
    });
    it('return empty for non matching city', function() {
      let city = cityTimezones.lookupViaCity('Foobar')
      assert.deepEqual([], city);
    })
    it('return multiple matches', function() {
      let city = cityTimezones.lookupViaCity('Springfield')
      console.log(city.length + ' matches found for Springfield')
      assert(city.length > 1, city);
    });
});

describe('Partial lookup tests', function() {
  it('finding Springfield MO', function() {
    let city = cityTimezones.findFromCityStateProvince('springfield mo')
    console.log('found Springfield by match: ', city)
    assert.equal(37.18001609, city[0].lat)
  });
  it('finding cities matching London', function() {
    let city = cityTimezones.findFromCityStateProvince('London')
    console.log('found 6 London\'s by match: ', city)
    assert.equal(6, city.length);
  });
  it('return nothing from nothing', function() {
    let city = cityTimezones.findFromCityStateProvince('')
    console.log('found no matches ', city)
    assert.deepEqual([], city)
  });
});

describe('Returns full list of cities from source JSON', function() {
    it('finding all cities', function() {
        const cityMapping = cityTimezones.cityMapping
        console.log('found number of cities: ', cityMapping.length)
        assert(cityMapping.length >= 7323, 'finding all cities');
    });
});


