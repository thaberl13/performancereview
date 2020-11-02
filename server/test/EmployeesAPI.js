const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server.js");
chai.should();
const server = setupServer();

//Tests for Employee Requests
describe("Employees API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it("should return a status of 200 when sent a GET employees request", async () => {
    const res = await request.get("/api/employees");
    res.should.have.status(200);
  });

  it("should be able to get another employee's performance review", async()=>{
    const res = await request.get("/api/reviews/45");
    res.should.be.a("object");
  })
});
