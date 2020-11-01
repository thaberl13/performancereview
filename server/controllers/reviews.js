const express = require("express");
const router = express.Router();
const db = require("../src/knex.js");

//test connection to database
router.get("/test", async (req, res) => {
  res.send("reviews working");
});


//add a new employee review to reviews table
router.post("/", async (req, res) => {
  try {
    //find employee's id from employee table
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const employee_id = await db
      .select("id")
      .table("employees")
      .where({ first_name, last_name });
    //insert review into review table
    await db
      .insert({
        employee_id: employee_id[0].id,
        text: req.body.text,
      })
      .table("reviews");
    res.sendStatus(200);
  } catch (err) {
    //send 404 status if error
    res.sendStatus(404);
  }
});

//get employees review
router.get("/:id", async (req, res) => {
  // get employees id from employee table
  // const first_name = req.params.first_name;
  // const last_name = req.body.last_name;
  // const employee = await db
  //   .select("id")
  //   .table("employees")
  //   .where({ first_name, last_name });
  const employee_id = req.params.id;

  //select employees reviews from table
  let reviews = await db.select("text").table("reviews").where({ employee_id });
  res.send(reviews);
  res.sendStatus(200);
});

module.exports = router;
