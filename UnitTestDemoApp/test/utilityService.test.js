const { add, reverseText, randomNumber } = require('../src/services/utilityService');
const chai = require('chai');
const expect = chai.expect;

describe("Utility Service Unit Tests", () => {

    it("add() correctly adds numbers", () => {
        expect(add(2, 3)).to.equal(5);
    });

    it("reverseText() reverses text", () => {
        expect(reverseText("abc")).to.equal("cba");
    });

    it("randomNumber() is between 1 and 100", () => {
        const num = randomNumber();
        expect(num).to.be.within(1, 100);
    });

});
