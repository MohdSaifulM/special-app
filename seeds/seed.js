require("../lib/mongoose")
const Todo = require("../models/todo.models")

Todo.insertMany([{
        title: "Eat Lunch",
        description: "Go buy bagels",
    },
    {
        title: "Deepavali Prep",
        description: "Get food supplies, decorations.",
    },
]).then((suc) => {
    console.log("successfully added!")
}).catch((e) => {
    console.log(e)
})