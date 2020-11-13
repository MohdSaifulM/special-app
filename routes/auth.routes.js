const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("auth/login", { layout: "auth_layout" });
});

router.get("/register", (req, res) => {
  res.render("auth/register", { layout: "auth_layout" });
});

module.exports = router;
