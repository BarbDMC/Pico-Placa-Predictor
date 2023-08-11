'use strict';

const { DateTime } = require('luxon');

const licensePlateRules = {
  "Monday": [1, 2],
  "Tuesday": [3, 4],
  "Wednesday": [5, 6],
  "Thursday": [7, 8],
  "Friday": [9, 0]
};

module.exports = {
  getLastDigit: (licensePlate) => {
    return parseInt(licensePlate.slice(-1));
  },
  canDrive: (lastDigit, dateString, time) => {
    const parsedDate = DateTime.fromISO(dateString);
    const weekdayLong = parsedDate.weekdayLong;
    const restrictions = getDriveRestrictions(lastDigit, weekdayLong, time);

    if (!restrictions.day || !restrictions.time) {
      return true;
    }

    return false;
  }
};

function getDriveRestrictions(lastDigit, weekdayLong, time) {
  const isCarRestrictedDay = licensePlateRules[weekdayLong]?.includes(lastDigit);

  const isMorningTime = (time >= '07:00' && time <= '09:30');
  const isEveningTime = (time >= '16:00' && time <= '19:30');
  const isCarRestrictedTime = isMorningTime || isEveningTime;

  return {
    day: isCarRestrictedDay,
    time: isCarRestrictedTime
  };
}
