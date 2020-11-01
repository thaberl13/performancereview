const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server.js");
chai.should();
const sinon = require("sinon");
const server = setupServer();

//Tests for Feedback requests
describe("Feedback API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it("should be able to post new feedback on a given performance review", async () => {
    const newFeedback = {
      employee_id: 45,
      review_id: 85,
      comment: "Test",
    };
    const res = await request.post("/api/feedback").send(newFeedback);
    res.should.have.status(200);
  });
});
