const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`add`, function() {
  let adder;
  beforeEach(function() {
    adder = new Calculator();
  });
  this.afterEach(function() {
    adder = null;
  });

  it(`should return 20 if numbers are 5, 8, 7`, function() {
    expect(adder.add(5, 8, 7)).to.be.equal(20);
  });

  it(`should return 500 if numbers are 100, 300, -700, 800`, function() {
    expect(adder.add(100, 300, -700, 800)).to.be.equal(500);
  });

  it('should throw an error if provided with not number', function() {
    const addWithError = () => adder.add(5, 6, true, 9);
    // eslint-disable-next-line max-len
    expect(addWithError).to.throw(`At least one of parameters is not of type "Number"`);
  });

  it(`should return -18 if numbers are 4, 5, -8, 32, -51`, function() {
    expect(adder.add(4, 5, -8, 32, -51)).to.be.equal(-18);
  });

  it(`should return 0 if numbers are 2, 12, -14`, function() {
    expect(adder.add(2, 12, -14)).to.be.equal(0);
  });
});
