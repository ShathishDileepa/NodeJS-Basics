const friendsModel = require("../models/friends.model");

// instead of arrow function named functions are used here because its easier to identify
// named function when debugging

function postFriends(req, res) {
  // in order to use req.body we have to use a middle ware that parses incoming json data
  const friendName = req.body.name;

  if (!friendName) {
    res.status(400).json({
      error: "missing friend name",
    });
    return;
  }

  const newFriend = {
    id: friendsModel.length,
    name: friendName,
  };

  friendsModel.push(newFriend);

  // echo back to user
  res.json(newFriend);
}

function getFriends(req, res) {
  // .json() is specially for sending json
  res.status(200).json(friendsModel);
}

function getFriend(req, res) {
  const { friendID } = req.params;
  const friend = friendsModel[Number(friendID)];

  if (friend) {
    res.json(friend);
  } else {
    // we will always send json response to the user
    res.json({
      error: `friend with id: ${friendID} does not exists`,
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};
