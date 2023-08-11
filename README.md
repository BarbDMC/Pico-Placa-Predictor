# Pico y Placa Predictor

The project allows users to consult if whether or not their car can be on the road based on their license plate number.

It receives as inputs the license plate number(the whole number e.g., PBX-1234), a date (as a String), and a time.

The project was done with JavaScript, NodeJs, and Express.js.
  
 
## Architecture

### Folder structure
```
project-root/ 
├── specs/ # Folder with all project specifications 
├── src/ # Root source code directory 
│ ├── controllers/ # Folder with project controllers 
│ ├── models/ # Folder with project models 
│ ├── public/ # Folder with all static files 
│ ├── utils/ # Folder with reusable functions 
│ └── views/ # Folder with project views 
├── .gitignore # Git ignore file 
├── README.md # The main README file 
├── app.js # Main JavaScript file 
├── package.json # Node.js package configuration file
├── eslintrc.json # ESLint rules configuration file 
└── .editorconfig # Editor configuration file
```

### Used libraries
- Axios
- Jest
- Luxon

## Approach and Methodology

The project was designed with TDD methodology (Test Driven Domain).

## Quick start

### Install dependencies

 1. Run the command: `npm init`
 2. Run: `npm install`
 3. To install jest run: `npm  install --save-dev jest`

### Run tests

 - Use the command: `npm run test`

 ### Run project

 - Run development: `npm run dev`
 - Go to localhost:3000 on your browser
