const router = require("express").Router();
const Todo = require("../models/todo.models");
const { body, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  try {
    let todos = await Todo.find();
    res.render("todos/index", { todos });
  } catch (error) {
    console.log(error);
  }
});

router.post(
  "/create",
  [
    body("title").isLength({ min: 4 }),
    body("description").isLength({ min: 4 }),
  ],
  async (req, res) => {
    let { title, description } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.flash("error", errors.array());
        return res.redirect("/");
      }

      let todo = new Todo({ title, description });
      await todo.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
