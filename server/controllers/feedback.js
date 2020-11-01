const express = require("express");
const router = express.Router();
const db = require("../src/knex.js");

//test connection to database
router.get("/test", async (req, res) => {
  res.send("feedback working");
});

module.exports = router;