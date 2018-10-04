var app = require("./server.js");
var port = 6060;

app.listen(port, function() {
  console.log("Server is a go, listening on port " + port);
});
