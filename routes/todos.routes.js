const router = require("express").Router();
const Todo = require("../models/todo.models")


router.get("/", async (req, res) => {
    try {
        let todos = await Todo.find();
        res.render("todos/index", {todos});
    } catch (error) {
        console.log(error)
    }
});




module.exports = router;
