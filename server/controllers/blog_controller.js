var blog_model = require("../models/blog.js");
var sequelize = require("sequelize");

module.exports.getPosts = (req, res) => {
  blog_model
    .findAll({ order: sequelize.literal("createdAt DESC"), paranoid: true })
    .then(posts => res.send(posts))
    .catch(() => res.send("Error getting blog posts from db"));
};

module.exports.createPosts = (req, res) => {
  blog_model
    .create({
      title: req.body.title,
      summary: req.body.summary
    })
    .then(() => res.send("Successful entry"))
    .catch(() => res.send("Error adding new entry"));
};

module.exports.deletePost = (req, res) => {
  blog_model
    .destroy({ where: { id: req.params.id } })
    .then(() => res.send(`Successful deletion of id:${req.params.id}`))
    .catch(() => res.send(`Error deleting id: ${req.params.id}`));
};

module.exports.getOnePost = (req, res) => {
  blog_model
    .findByPk(req.params.id)
    .then(post => res.send(post))
    .catch(() => res.send(`Error receiving blog post id: ${req.params.id}`));
};

module.exports.editPost = (req, res) => {
  blog_model
    .update(
      {
        title: req.body.title,
        summary: req.body.summary
      },
      { where: { id: req.params.id } }
    )
    .then(() => res.send(`Successful edit of post id: ${req.params.id}`))
    .catch(() => res.send(`Error editing post id:${req.params.id}`));
};
