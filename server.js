const http = require("http");

const PORT = 4000;
const server = http.createServer();

const friends = [
  { id: 0, name: "Nikola Tesla" },
  { id: 1, name: "Sir Issac Newton" },
  { id: 2, name: "Albert Eienstein" },
];

// add a event listener for server
server.on("request", (req, res) => {
  // /friends/2 => ['','friends','2']
  const address = req.url.split("/");

  if (req.method === "POST" && address[1] === "friends") {
    req.on("data", (data) => {
      const jsonString = data.toString();
      const friend = JSON.parse(jsonString);

      friends.push(friend);
    });

    // echo back what user submits to user
    req.pipe(res);
  } else if (address[1] === "friends") {
    if (address.length == 3) {
      const friendIndex = Number(address[2]);
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(friends));
    }
  } else if (address[1] === "messages") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.write(
      "<html><body><ul><li>Hello there..!</li><li>How are you doing</li></ul></body></html>"
    );
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
