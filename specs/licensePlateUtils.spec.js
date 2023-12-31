'use strict';

describe('licensePlateUtils', () => {
  const licensePlateUtils = require('../src/utils/licensePlateUtils');
  
  it('Should get the last digit of a license plate', () => {
    const lastDigit = licensePlateUtils.getLastDigit('PBX-1234');
    expect(lastDigit).toBe(4);
  });

  it('should return true if the car can drive on the given day and time', () => {
    const canDrive = licensePlateUtils.canDrive(7, '2023-08-09', '10:00');
    expect(canDrive).toBe(true);
  });

  it('should return true if the car cannot drive on the given day but in the given time', () => {
    const canDrive = licensePlateUtils.canDrive(5, '2023-08-09', '15:00');
    expect(canDrive).toBe(true);
  });

  it('should return false if the car cannot drive on the given day and time', () => {
    const canDrive = licensePlateUtils.canDrive(4, '2023-08-08', '08:00');
    expect(canDrive).toBe(false);
  });
});
