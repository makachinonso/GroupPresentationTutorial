const request = require("supertest");
const { app, addNumbers } = require("./app");

// Unit test for the addNumbers function
test("addNumbers should correctly add two numbers", () => {
    expect(addNumbers(2, 3)).toBe(5);
    expect(addNumbers(-1, 1)).toBe(0);
});

// Integration test for /add route
describe("GET /add", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).get("/add?a=4&b=6");
        expect(res.status).toBe(200);
        expect(res.body.sum).toBe(10);
    });

    it("should return 400 if parameters are missing", async () => {
        const res = await request(app).get("/add?a=4");
        expect(res.status).toBe(400);
    });
});
