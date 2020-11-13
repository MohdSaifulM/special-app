const router = require("express").Router();
const passport = require("../lib/passportConfig");
const User = require("../models/user.models");

router.get("/login", (req, res) => {
  res.render("auth/login", { layout: "auth_layout" });
});

router.get("/register", (req, res) => {
  res.render("auth/register", { layout: "auth_layout" });
});

//REGISTER
router.post("/register", async (req, res) => {
  // console.log("before bcrypt", req.body);
  try {
    let { email, password } = req.body;
    // let passwordHash = await bcrypt.hash(password, saltRounds); //no need for that anymore since we added the studentSchema.pre
    let user = new User({
      email,
      password, //: passwordHash,
    });
    await user.save();
    res.redirect("/"); // TO UPDATE ONCE VIEWS DONE
  } catch (error) {
    console.log(error);
  }
  // res.render("auth/register");
});

//LOGIN
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/auth/login" }),
  (req, res) => {
    res.redirect("/"); // TO UPDATE ONCE VIEWS DONE
  }
);

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/"); // TO UPDATE ONCE VIEWS DONE
});

module.exports = router;
