import licensePlateUtils from '../utils/licensePlateUtil';

describe('licensePlateUtil', () => {
  it('Should get the last digit of a license plate', () => {
    const lastDigit = licensePlateUtils.getLastDigit('ABC123');
    expect(lastDigit).toBe(3);
  });
});
