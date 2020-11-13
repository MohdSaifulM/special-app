require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use("/auth", require("./routes/auth.routes"));

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
