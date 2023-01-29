const express = require('express');

const friendsController = require('../controllers/friends.controller');


const friendsRouter = express.Router();

friendsRouter.post("/friends", friendsController.postFriends);
friendsRouter.get("/friends", friendsController.getFriends);
friendsRouter.get("/friends/:friendID", friendsController.getFriend);

module.exports = friendsRouter;