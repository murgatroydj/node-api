// Load Node Modules
var express = require('express');
var bodyParser = require('body-parser');

// Local Modules
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

// Create App
var app = express();

// Middleware
app.use(bodyParser.json())

// Start App
app.listen(3000, () => {
    console.log("Started on Port 3000");
})

// Todo
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.status(200).send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})



// var newUser = new User({
//     email: "james@jamesmurgatroyd.com"
// });
// newUser.save().then((doc) => {
//     console.log("saved user", doc)
// }, (e) => {
//     console.log("unable to save user", e);
// })

// var newTodo = new Todo({
//     text: "Make the bed",
//     completed: true,
//     completedAt: 567890
// });

// newTodo.save().then((doc) => {
//     console.log("saved todo", doc)
// }, (e) => {
//     console.log("unable to save todo");
// });