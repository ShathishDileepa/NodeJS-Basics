// lets create the same server using express

const express = require("express");

const PORT = 4000;

const app = express();

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Issac Newton",
  },
];

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

// METHODS ===================================================

app.post("/friends", (req, res) => {
  // in order to use req.body we have to use a middle ware that parses incoming json data
  const friendName = req.body.name;

  if(!friendName){
    res.status(400).json({
        error:'missing friend name'
    })
    return
  }

  const newFriend = {
    id: friends.length,
    name: friendName,
  };

  friends.push(newFriend);

  // echo back to user
  res.json(newFriend);
});

app.get("/friends", (req, res) => {
  // .json() is specially for sending json
  res.status(200).json(friends);
});

app.get("/friends/:friendID", (req, res) => {
  const { friendID } = req.params;
  const friend = friends[Number(friendID)];

  if (friend) {
    res.json(friend);
  } else {
    // we will always send json response to the user
    res.json({
      error: `friend with id: ${friendID} does not exists`,
    });
  }
});


app.post('/messages',(req,res)=>{
    console.log('updating messages...');
    res,end()
})

app.get("/messages", (req, res) => {
  res.send(
    "<html><body><ul><li>Hello..!</li><li>How are you doing</li></ul></body></html>"
  );
});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
