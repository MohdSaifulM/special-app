require("dotenv").config();
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./lib/passportConfig"); // authentication

const expressLayouts = require("express-ejs-layouts");

require("./lib/mongoose");

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true })); //listens for form data
app.set("view engine", "ejs");
app.use(expressLayouts);

//--connect mongo
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ url: process.env.DB }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash(); //stores all flash messages for ejs access
  next();
});

app.use("/", require("./routes/todos.routes"));
app.use("/auth", require("./routes/auth.routes"));

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
