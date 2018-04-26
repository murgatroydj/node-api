// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5ad9626d77b1771c0a8ef7c4")
    // }).toArray().then((docs) => {
    //     console.log('todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('unable to fetch Todos', err);
    // });

    //   db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count ${count}`)

    // }, (err) => {
    //     console.log('unable to fetch Todos', err);
    // });


    db.collection('Users').find({ name: "James Murgatroyd" }).toArray().then((docs) => {
        console.log('todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('unable to fetch Todos', err);
    });


    //client.close();
});