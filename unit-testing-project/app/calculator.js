/**
 *
 *A simple class containing methods for summation and multiplication numbers
 * @class Calculator
 */
class Calculator {
  /**
     *Creates an instance of Calculator
     * @memberof Calculator
     */
  constructor() {
  };

  /**
   *
   *
   * @param {Array<Number>} args array of numbers to go through
   * @return {Number} sum of all parameters
   * @memberof Calculator
   */
  add(...args) {
    if (args.every((arg) => typeof arg === 'number')) {
      return args.reduce((a, b) => a + b, 0);
    } else {
      throw new Error(`At least one of parameters is not of type "Number"`);
    }
  };

  /**
   *
   *
   * @param {Array<Number>} args array of numbers to go through
   * @return {Number} product of all parameters
   * @memberof Calculator
   */
  multiply(...args) {
    if (args.every((arg) => typeof arg === 'number')) {
      return args.reduce((a, b) => a * b);
    } else {
      throw new Error(`At least one of parameters is not of type "Number"`);
    }
  }
};

module.exports = Calculator;
