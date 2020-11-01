const express = require('express')
const app = express();
const cors = require('cors');
const employeesAPI = require("../controllers/employees");
const reviewsAPI = require("../controllers/reviews");
const feedbackAPI = require("../controllers/feedback");

//defining api routes
const setupServer = () => {
  app.use(express.json());
  app.use(cors())
  app.use("/api/employees", employeesAPI);
  app.use("/api/reviews", reviewsAPI);
  app.use("/api/feedback", feedbackAPI);

  return app;
};

//export the setup for Server to use in controller files
module.exports = { setupServer };
