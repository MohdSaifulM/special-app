require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./lib/passportConfig"); // authentication 

const expressLayouts = require("express-ejs-layouts");

require("./lib/mongoose");

const app = express();

//middlewares
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

app.use(function(req, res, next){
    res.locals.currentUser = req.user; //setting a global variable for my app to be accessible by currrent user
    // res.locals.flash = req.flash; //
    next(); //then continues the code
  })

app.use("/auth", require("./routes/auth.routes"));

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
