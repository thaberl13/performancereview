const express = require("express");
const router = express.Router();
const db = require("../src/knex.js");

//POST a new employee review to reviews table
router.post("/", async (req, res) => {
  try {
    //find employee's id from employee table
    const last_name = req.body.last_name;
    // const last_name = req.body.last_name;
    const employee_id = await db
      .select("id")
      .table("employees")
      .where({ last_name });
    //insert review into review table
    await db.insert({
        employee_id: employee_id[0].id,
        text: req.body.text,
      })
      .table("reviews");
    return res.sendStatus(200);
  } catch (err) {
   res.sendStatus(400);
  }
});

//GET employees review
router.get("/:id", async (req, res) => {
  const employee_id = req.params.id;
  //select employees reviews from table
  let reviews = await db.select("text", "id").table("reviews").where({ employee_id });
  if(reviews.length === 0) {
    return res.sendStatus(404)
  }
  return res.send(reviews);
});

module.exports = router;
