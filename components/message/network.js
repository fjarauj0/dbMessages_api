const chalk = require("chalk");

const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

console.log(chalk.bgBlue("--network message--"));

router.post("/", function (req, res) {
  const { user, message } = req.body;
  controller
    .addMessage(user, message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Wrong data", 500, "Error", e);
    });
});

router.get("/", function (req, res) {
  controller
    .getAllMessages()
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Wrong data", 500, "Error", e);
    });
});

module.exports = router;
