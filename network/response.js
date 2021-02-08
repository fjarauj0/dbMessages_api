const chalk = require("chalk");

exports.success = function (req, res, message, status) {
  console.log(chalk.cyan("[response] Success"));
  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

exports.error = function (req, res, message, status, details) {
  console.error(chalk.red("[response] Error " + details));
  res.status(status || 500).send({
    error: message,
    body: "",
  });
};
