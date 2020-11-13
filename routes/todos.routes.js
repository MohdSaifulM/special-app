const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("todos/create");
});

module.exports = router;
