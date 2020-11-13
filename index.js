require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("./lib/mongoose");

const app = express();

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

app.use("/auth", require("./routes/auth.routes"));

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
