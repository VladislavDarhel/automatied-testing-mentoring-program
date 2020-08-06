const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`multiply`, function() {
  let multiplier;
  beforeEach(function() {
    multiplier = new Calculator();
  });
  this.afterEach(function() {
    multiplier = null;
  });

  it(`should return 16016 if numbers are 11, 7, 13, 16`, function() {
    expect(multiplier.multiply(11, 7, 13, 16)).to.be.equal(16016);
  });

  it(`should return 21 if numbers are 7, 1, 3`, function() {
    expect(multiplier.multiply(7, 1, 3)).to.be.equal(21);
  });

  it('should throw an error if provided with not number', function() {
    const multiplyWithError = () => multiplier.multiply(7, 3, -1, false);
    // eslint-disable-next-line max-len
    expect(multiplyWithError).to.throw(`At least one of parameters is not of type "Number"`);
  });

  it(`should return 0 if numbers are 5, 2, 0`, function() {
    expect(multiplier.multiply(5, 2, 0)).to.be.equal(0);
  });

  it(`should return -336 if numbers are 4, -7, 6, 2`, function() {
    expect(multiplier.multiply(4, -7, 6, 2)).to.be.equal(-336);
  });
});
