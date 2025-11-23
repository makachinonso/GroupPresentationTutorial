const utility = require('../services/utilityService');

exports.sayHello = (req, res) => {
    res.json({ message: "Hello from Unit Testing Demo API!" });
};

exports.addNumbers = (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (isNaN(x) || isNaN(y)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({ result: utility.add(x, y) });
};

exports.reverseText = (req, res) => {
    const text = req.query.text;

    if (!text) {
        return res.status(400).json({ error: "Text query parameter required" });
    }

    res.json({ result: utility.reverseText(text) });
};

exports.randomNumber = (req, res) => {
    res.json({ result: utility.randomNumber() });
};
