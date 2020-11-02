const express = require("express");
const router = express.Router();
const db = require("../src/knex.js");

//POST new feedback into feedback table
router.post("/", async (req, res) => {
  try {
    //insert new feedback into feedback table
   await db
      .insert({
        employee_id: req.body.employee_id,
        review_id: req.body.review_id,
        comment: req.body.comment,
        date: new Date()
      })
      .table("feedback");
      //send 2020 if accepted
    return res.sendStatus(200);
  } catch (err) {
    //send 404 status if error
   res.sendStatus(404);
  }
});

module.exports = router;