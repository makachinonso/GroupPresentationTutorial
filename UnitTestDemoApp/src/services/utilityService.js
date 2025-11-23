function add(x, y) {
    return x + y;
}

function reverseText(text) {
    return text.split('').reverse().join('');
}

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

module.exports = {
    add,
    reverseText,
    randomNumber
};
