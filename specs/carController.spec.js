'use strict';

describe('CarController', () => {
  const CarController = require('../src/controllers/carController');
  const CarModel = require('../src/models/carModel');

  let carDriveConfirmationSpy;
  let expectedCanDrive;

  beforeEach(() => {
    expectedCanDrive = true;

    carDriveConfirmationSpy = jest.spyOn(CarModel, 'carDriveConfirmation');
    carDriveConfirmationSpy.mockReturnValue(expectedCanDrive);
  });

  it('should call carDriveConfirmation method with expected parameters', () => {
    const licensePlate = 'ABC123';
    const date = '2023-08-09';
    const time = '08:30 AM';


    const canDrive = CarController.checkCanDrive(licensePlate, date, time);

    expect(carDriveConfirmationSpy).toHaveBeenCalledWith(licensePlate, date, time);
    expect(canDrive).toBe(expectedCanDrive);
  });
});
