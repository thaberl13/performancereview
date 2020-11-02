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

  it("should be able to add a new employee", async () => {
    const newEmployee = {
      first_name: "Test",
      last_name: "Test",
      is_admin: false,
    };
    
    const res = await request.post("/api/employees").send(newEmployee);
    res.should.have.status(200);
  
  });

  it("should store newly added employee", async () => {
    const test = await request.get("/api/employees/87")
    test.body.should.be.a('array');
  });

  it("should delete a given employee from database", async () => {
    const res = await request.delete("/api/employees/56");
    res.should.have.status(200);
  });

  it("shouldn't store a deleted employee", async () => {
    const res = await request.get("/api/employees/56");
    res.should.have.status(400);
  });

  it("should change an employee's first name", async () => {
    const newName = { first_name: "Tanner" };
    const res = await request.patch("/api/employees/45").send(newName);
    res.should.have.status(200);
  });

  it("should store an employee's updated first name", async () => {
    const res = await request.get("/api/employees/45");
    const check = res.body[0].first_name
    check.should.equal("Tanner");
  });


  it("should change an employee's admin status", async () => {
    const is_admin = { is_admin: "true" };
    const res = await request.patch("/api/employees/45").send(is_admin);
    res.should.have.status(200);
  });
});
