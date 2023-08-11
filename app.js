const express = require('express');
const app = express();
const path = require('path');
const carController = require('./src/controllers/carController');

app.use(express.static(path.join(__dirname, 'src/public')));
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.get('/validateDrive', (req, res) => {
  const { licensePlate, date, time } = req.query;
  const canDrive = carController.checkCanDrive(licensePlate, date, time);

  res.json(canDrive);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

