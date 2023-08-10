'use strict';

module.exports = {
  getLastDigit: (licensePlate) => {
    const reversedPlate = licensePlate.split('').reverse().join('');
    const lastDigit = parseInt(reversedPlate.charAt(0));
    return lastDigit;
  }
};
