// lets restructure the code using MVC architecture
/*
    Models      = All data related code goes here
    Controllers = These are what user interact with to manipulate models, in express app these are usually route handlers
    Views       = How we present our model data to the user, in express apps this is how we sent data back to the user (ex: in json format)
*/

const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const PORT = 4000;

const app = express();

// MIDDLEWARE ================================================

// our own logger middleware
app.use((req, res, next) => {
  const enter_time = Date.now();
  next();

  const total_time = Date.now() - enter_time;

  console.log(`${req.method} ${req.url} ${total_time}ms`);
});

// this middleware parses incoming json data and populate request body property with that data
app.use(express.json());

// router is a middleware so we have to use it
app.use(friendsRouter);
app.use(messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
