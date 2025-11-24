# Unit Testing with Node.js, Express, and Jest  
This mini exercise introduces the basics of **unit testing** in a Node.js + Express application using **Jest**.

By the end of this exercise, you will:
- Build a small Express API
- Write your first unit test
- Run tests using Jest
- Understand how tests improve code quality

---

## 1. Prerequisites
Make sure you have:
- Node.js (v16+)
- VS Code (recommended)

---

## 2. Project Setup
express-testing-demo/
│ package.json
│ app.js
│ app.test.js
└ README.md


### Step 1 — Initialize a new project
```bash
mkdir InClassExerciseApp
cd InClassExerciseApp
npm init -y end

Step 2 — Install dependencies
npm install express
npm install --save-dev jest supertest

Step 3 — Update package.json

Add the test script:
"scripts": {
  "test": "jest"
}

4. Create the Express Application (app.js)

5. Write Unit Test (app.test.js)

6. Run the Tests
run npm test

7. Bonus: Run the Express App (Optional)

Create a server.js file: