function postMessages(req, res) {
  console.log("updating messages...");
  res.end();
}

function getMessages(req, res) {
  res.send(
    "<html><body><ul><li>Hello..!</li><li>How are you doing</li></ul></body></html>"
  );
}

module.exports = {
  postMessages,
  getMessages,
};
