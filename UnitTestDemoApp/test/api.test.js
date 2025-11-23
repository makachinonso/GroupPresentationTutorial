const request = require('supertest');
const app = require('../src/app');
const chai = require('chai');
const expect = chai.expect;

describe("API Endpoint Tests", () => {
    
    it("GET /api/hello returns message", async () => {
        const res = await request(app).get('/api/hello');
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Hello from Unit Testing Demo API!");
    });

    it("GET /api/add should return correct sum", async () => {
        const res = await request(app).get('/api/add?x=5&y=7');
        expect(res.body.result).to.equal(12);
    });

    it("GET /api/reverse should return reversed text", async () => {
        const res = await request(app).get('/api/reverse?text=hello');
        expect(res.body.result).to.equal("olleh");
    });

});
