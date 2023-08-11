'use strict';

const licensePlateUtils = require('../utils/licensePlateUtils');

class CarModel {
  static carDriveConfirmation(licensePlate, date, time) {
    const lastDigit = licensePlateUtils.getLastDigit(licensePlate);
    const canDrive = licensePlateUtils.canDrive(lastDigit, date, time);

    const message = canDrive ? `Your car can drive ${date} at ${time}`: 'Your car can not drive';

    return message;
  }
}

module.exports = CarModel;
