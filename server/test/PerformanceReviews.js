const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server.js");
chai.should();
const sinon = require("sinon");
const server = setupServer();

//Tests for Peformance Review Requests
describe("Performance Request API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it("should be able to post a new Performance Review", async () => {
    const newReview = {
      last_name: "Haberl",
      employee_id: 45,
      text: "Test",
    };
    const res = await request.post("/api/reviews").send(newReview);
    res.should.have.status(200);
  });

  it("should be able to get an Employee's Review by employee ID", async () => {
    const res = await request.get("/api/reviews/45");
    res.should.have.status(200);
  });
});
