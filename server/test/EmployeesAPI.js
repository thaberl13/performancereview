const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server.js");
chai.should();
const sinon = require("sinon");

const server = setupServer();

describe("Employees API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it("should return a status of 200 when sent a GET employees request", async () => {
    const res = await request.get("/api/employees");
    res.should.have.status(200);
  });

  // it("should return n amount of pokemon", async () => {
  //   const res = await request.get("/api/pokemon");
  //   res.should.be.a("object");
  // });

  // it("should return pokemon of given ID", async () => {
  //   const res = await request.get("/api/pokemon");
  //   res.should.be.a("object");
  // });

  // it("should change the pokemon's data", async () => {
  //   const newName = { name: "tanner" };
  //   const res = await request.patch("/api/pokemon/Bulbasaur").send(newName);
  //   pokeData.pokemon[0].name.should.equal("tanner");
  // });

  // it("should delete a given pokemon from data", async () => {
  //   const res = await request.delete("/api/pokemon/001");
  //   pokeData.pokemon[0].name.should.equal("Ivysaur");
  // });

  // it("should retrieve a pokemon's evolutions", async () => {
  //   const res = await request.get("/api/pokemon/001/evolutions");
  //   pokeData.pokemon[0].evolutions[0].name.should.equal("Venusaur");
  // });

  // it("should retrieve a pokemon's PREVIOUS evolutions", async () => {
  //   const res = await request.get("/api/pokemon/:idOrName/evolutions/previous");
  //   pokeData.pokemon[1]["Previous evolution(s)"][0].id.should.equal(1);
  // });

  // it("should retrieve a pokemon's types", async () => {
  //   const res = await request.get("/api/types");
  //   res.should.be.a("object");
  // });

  // it("should add a new pokemon type", async () => {
  //   const newType = { type: "Rocky" };
  //   const res = await request.post("/api/types").send(newType);
  //   pokeData.types.length.should.equal(18);
  // });

  // it("should delete given type", async () => {
  //   const res = await request.delete("/api/types/Grass");
  //   pokeData.types[0].should.equal("Poison");
  // });
});