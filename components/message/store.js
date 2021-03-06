const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

const getAllMessages = async () => {
  const messages = await Model.find();
  return messages;
};

module.exports = {
  add: addMessage,
  list: getAllMessages,
};