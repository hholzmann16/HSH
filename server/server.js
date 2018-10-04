const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../client/dist")));

module.exports = app;
