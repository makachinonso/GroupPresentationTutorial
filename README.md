# GroupPresentationTutorial

Unit Testing Express.js Demo Application — Step-by-Step Tutorial
This tutorial walks you through:
✔ Creating an Express.js app from scratch
✔ Adding API routes & a live demo page
✔ Writing unit tests using Mocha, Chai & Supertest
✔ Running the tests

# 1. Prerequisites
Before starting, install:
• Node.js (LTS version)
Download from: https://nodejs.org

• Visual Studio Code
https://code.visualstudio.com/

# 2. Create Project Folder

# 3. Initialize Node.js Project
In VS Code terminal: run npm init -y

# 4. Install Dependencies
Install Express: run npm install express
Install testing tools: run npm install --save-dev mocha chai supertest

# 5. Create the Project Structure
UnitTestingDemoApp/
│
├── package.json
├── server.js
├── README.md
│
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── apiRoutes.js
│   ├── services/
│   │   └── utilityService.js
│   └── controllers/
│       └── apiController.js
│
├── public/
│   └── index.html
│
└── test/
    ├── api.test.js
    └── utilityService.test.js

Run these commands in VS Code terminal:
mkdir src
mkdir src/routes
mkdir src/services
mkdir src/controllers
mkdir public
mkdir test

# 6. Create server.js
# 7. Create Express App File
# 8. Create Routes
# 9. Create Controller
# 10. Create Utility Service (Pure Functions)
# 11. Create Front-end Demo Page
# 12. Create Test Files
# 13. Update Test Script in package.json
Open package.json
Change "test": "echo..." to:
"test": "mocha"
# 14. Run Tests (STEP-BY-STEP Terminal Commands)
Run all tests: run npm test
# 15. Run the Application Locally
run npm start
Now visit: http://localhost:3000
You will see the interactive demo page.
