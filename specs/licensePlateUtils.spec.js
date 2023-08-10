'use strict';

const licensePlateUtils = require('../utils/licensePlateUtils');

describe('licensePlateUtils', () => {
  it('Should get the last digit of a license plate', () => {
    const lastDigit = licensePlateUtils.getLastDigit('PBX-1234');
    expect(lastDigit).toBe(4);
  });
});
