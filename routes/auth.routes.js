const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("auth/login", { layout: "auth_layout" });
});

module.exports = router;
