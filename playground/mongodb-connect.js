// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "Somethnig",
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log("item not saved", err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2))
    // });


    // db.collection('Users').insertOne({
    //     name: "James Murgatroyd",
    //     age: 40,
    //     location: "Edmonton"
    // }, (err, res) => {
    //     if (err) {
    //         return console.log("item not saved", err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // });


    client.close();
});