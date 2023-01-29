const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.post("/messages", messagesController.postMessages);
messagesRouter.get("/messages", messagesController.getMessages);

module.exports = messagesRouter;