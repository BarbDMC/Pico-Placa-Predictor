'use strict';

const licensePlateUtils = require('../src/utils/licensePlateUtils');

describe('licensePlateUtils', () => {
  it('Should get the last digit of a license plate', () => {
    const lastDigit = licensePlateUtils.getLastDigit('PBX-1234');
    expect(lastDigit).toBe(4);
  });

  it('should return true if the car can drive on the given day and time', () => {
    const canDrive = licensePlateUtils.canDrive(7, '2023-08-09', '10:00 AM');
    expect(canDrive).toBe(true);
  });

  it('should return true if the car cannot drive on the given day but in the given time', () => {
    const canDrive = licensePlateUtils.canDrive(5, '2023-08-09', '03:00 PM');
    expect(canDrive).toBe(true);
  });

  it('should return false if the car cannot drive on the given day and time', () => {
    const canDrive = licensePlateUtils.canDrive(4, '2023-08-08', '08:00 AM');
    expect(canDrive).toBe(false);
  });
});
