const chalk = require("chalk");
const store = require("./store");

function addMessage(user, message) {
  console.log(chalk.bgBlue("--controller addMessage--"));
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error(chalk.red("No user or message"));
      reject("Wrong data");
      return false;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}
const getAllMessages = () => {
  console.log(chalk.bgBlue("--controller getAllMessages--"));
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  addMessage,
  getAllMessages,
};
