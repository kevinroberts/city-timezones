const assert = require('assert');
const cityTimezones = require('../index.js');

describe('Valid locations', function() {
    it('finding Chicago', function() {
      let city = cityTimezones.lookupViaCity('Chicago')
      console.log('found Chicago by name:', city)
      assert.equal(41.82999066, city[0].lat);
    });
});
