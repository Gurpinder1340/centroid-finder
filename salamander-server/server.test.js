const request = require("supertest");
const app = require("./server");

describe("Salamander API", () => {

    test("GET / should return server running message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Salamander Video Server is running!");
    });

    test("GET /api/videos should return a list of videos", async () => {
        const response = await request(app).get("/api/videos");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("videos");
        expect(Array.isArray(response.body.videos)).toBe(true);
        expect(response.body.videos).toContain("test.mp4");
    });

    

});