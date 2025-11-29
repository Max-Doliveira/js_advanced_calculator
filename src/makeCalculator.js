'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  let result = 0;

  const calculator = {
    get result() {
      return result;
    },

    add: (a, b) => a + b,

    subtract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => {
      if (b === 0) {
        return NaN;
      }

      return a / b;
    },

    operate(callback, num) {
      result = callback(result, num);

      return this;
    },

    reset() {
      result = 0;

      return this;
    },
  };

  return calculator;
}
module.exports = makeCalculator;
