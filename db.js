const mongoose = require("mongoose");
// const { boolean } = require("zod");

mongoose.connect("mongodb+srv://kulkarnih543:evrydebthhastobepaid@cluster0.4tfc5dz.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}