// Load Node Modules
const _ = require('lodash')
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

// Local Modules
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var { authenticate } = require('./middleware/authenticate');

// Create App Instanse
var app = express();

// Express Middleware
app.use(bodyParser.json())

// Start App
app.listen(3000, () => {
    console.log("Started on Port 3000");
})

// Todo Save Route
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
    // Get all Todo's
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e)
    });

});
// get Todo by ID
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        }
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send()
    });
});

// Delete Todo by ID
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        }
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send()
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        }
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send()
    })
})


app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send({ users });
    }, (e) => {
        res.status(400).send(e)
    });

});




app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user)
});

// POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});


module.exports = {
    app
}