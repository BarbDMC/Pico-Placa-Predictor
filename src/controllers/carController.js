'use strict';

const CarModel = require('../models/carModel');

class CarController {
  static checkCanDrive(licensePlate, date, time) {
    const canDrive = CarModel.carDriveConfirmation(licensePlate, date, time);
    return canDrive;
  }
}

module.exports = CarController;
