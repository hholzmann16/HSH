var app = require("./server.js");
var port = process.env.PORT;

app.listen(port, function() {
  console.log("Server is a go, listening on port " + port);
});
