const Todo = require('../models/TodoModel');

const getTodos = async  (req, res) => {
   await Todo.find({visibility: 'Public'})
        .then((todos) => {
            res.status(200).json({todos})
    })

}

const createTodo = async(req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    await newTodo.save();
    res.status(200).send(newTodo)
}
    
const deleteTodo = (req, res) => {

    Todo.findByIdAndRemove(req.params.id).exec((error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send("Todo deleted successfully")
        }
    });

}

module.exports = {getTodos, createTodo, deleteTodo}
