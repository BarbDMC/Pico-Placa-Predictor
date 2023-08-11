/* eslint-disable */
'use strict';

async function validateCarDrive() {
  const licensePlate = document.getElementById('licensePlate').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const url = `/validateDrive?licensePlate=${encodeURIComponent(licensePlate)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
  const response = await fetch(url);
  const data  = await response.json();

  const driveMessage = document.getElementById('driveMessage');
  driveMessage.innerHTML = data.canDrive;
}
