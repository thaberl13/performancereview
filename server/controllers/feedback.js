const express = require("express");
const router = express.Router();
const db = require("../src/knex.js");

//test connection to database
router.get("/test", async (req, res) => {
  res.send("feedback working");
});

//post feedback to database
router.post("/", async (req, res) => {
  try {
    //insert new employees info into table
    await db
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_admin: req.body.is_admin,
      })
      .table("employees");
    res.sendStatus(200);
  } catch (err) {
    //send 404 status if error
    res.sendStatus(404);
  }
});

module.exports = router;