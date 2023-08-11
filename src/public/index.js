/* eslint-disable */
'use strict';
async function validateCarDrive() {
  const isFormComplete = validateForm();

  if (isFormComplete) {
    const licensePlate = getValueById('licensePlate');
    const date = getValueById('date');
    const time = getValueById('time');

    const url = buildUrl(licensePlate, date, time);
    try {
      const { data } = await axios.get(url);

      displayDriveMessage(data);
    } catch (error) {
      console.error('Error during validation:', error);
    }
  }
}

function getValueById(id) {
  return document.getElementById(id).value;
}

function buildUrl(licensePlate, date, time) {
  return `/validateDrive?licensePlate=${encodeURIComponent(licensePlate)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
}

function displayDriveMessage(message) {
  const driveMessage = document.getElementById('driveMessage');
  driveMessage.innerHTML = message;
}

function validateForm() {
  const form = document.getElementsByTagName('form')[0];

  if (form.checkValidity()) {
    return true;
  } else {
    alert('Please fill out all fields');
    return false;
  }
}
