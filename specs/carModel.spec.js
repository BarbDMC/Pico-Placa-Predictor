const CarModel = require('../src/models/carModel');
const licensePlateUtils =  require('../src/utils/licensePlateUtils');

jest.mock('../src/utils/licensePlateUtils');

beforeEach(() => {
  licensePlateUtils.getLastDigit.mockReturnValue(2);
});


describe('CarModel', () => {
  it('Should return an confirmative message if the car can drive', () => {
    licensePlateUtils.canDrive.mockReturnValue(true);

    const driveMessage = CarModel.carDriveConfirmation('ABC-0123', '08/07/2023', '10:00 AM');
    expect(driveMessage).toBe('Your car can drive 08/07/2023 at 10:00 AM');
  });

  it('Should return an negative message if the car cannot drive', () => {
    licensePlateUtils.canDrive.mockReturnValue(false);

    const driveMessage = CarModel.carDriveConfirmation('ABC-0123', '08/08/2023', '07:30 AM');
    expect(driveMessage).toBe('Your car can not drive');
  });
});
