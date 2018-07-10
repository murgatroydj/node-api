const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Removes all 
// Todo.remove({}).then((res) => {
//     console.log(res)
// })

//
// Todo.findOneAndRemove({
//     _id: '5af21b362a9267112260c390'
// }).then((todo) => {
//     console.log(todo)
// });

Todo.findByIdAndRemove('5af21b362a9267112260c390').then((todo) => {
    console.log(todo)
});