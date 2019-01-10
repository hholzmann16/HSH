var express = require("express");
var router = express.Router();
var blog_controller = require("../controllers/blog_controller.js");

router.get("/", blog_controller.getPosts);
// router.post("/", blog_controller.createPosts);
// router.delete("/:id", blog_controller.deletePost);
router.get("/:id", blog_controller.getOnePost);
// router.put("/:id", blog_controller.editPost);

module.exports = router;
