var db = require("../../database/index.js");
var Sequelize = require("sequelize");

const Blog = db.define(
  "blog",
  {
    title: Sequelize.STRING,
    summary: Sequelize.TEXT
  },
  {
    timestamps: true,
    paranoid: true
  }
);

db.sync()
  .then(() => console.log("blog table created"))
  .catch(err => console.log("error in creating blog table", err));

module.exports = Blog;
