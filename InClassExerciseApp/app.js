const express = require("express");
const app = express();

app.use(express.json());

// Simple function to test
function addNumbers(a, b) {
    return a + b;
}

// Expose it for unit testing
module.exports.addNumbers = addNumbers;

// Create a simple route
app.get("/add", (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ message: "Missing query parameters." });
    }

    const sum = addNumbers(Number(a), Number(b));

    res.json({ sum });
});

app.get("/", (req, res) => {
  res.send("Welcome! Try /add?a=2&b=3 in the URL.");
});


// Export app for Supertest
module.exports.app = app;
