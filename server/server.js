const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(
  "/rrc",
  express.static(
    path.resolve(
      __dirname,
      "../node_modules/react-responsive-carousel/lib/styles"
    )
  )
);
app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname, "../client/dist/index.html"));
});

module.exports = app;
