# Pico y Placa Predictor

The project allows users to consult if whether or not their car can be on the road based on their license plate number.

It receives as inputs the license plate number(the whole number e.g., PBX-1234), a date (as a String), and a time.

The project was done with JavaScript, NodeJs, and Express.js.
  
 
## Architecture

### Folder structure
`├──` **`specs`**   _folder with all project specs_  
`├──` **`src`** 
`└──── ` **`controllers`**  _folder with the project controllers_
`└──── ` **`models`** _folder with the project models_
`└──── ` **`public`** _folder with all the static files_
`└──── ` **`utils`** _folder with all reusable functions_
`└──── ` **`views`** _folder with the project views_
`├── .gitignore`  
`├── README.md` _The main readme_  
`├── app.js` _main javascript file_  
`├── package.json`
`├── eslintrc.json` _eslint rules file_ 
`└──.editorconfig` _editor configuration file_ 

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
