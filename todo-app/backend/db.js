const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://saieshwar:root@cluster0.taogvs7.mongodb.net/todosapp")
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
}) 

const todo=mongoose.model('todos',todoschema);

module.exports={
    todo
}