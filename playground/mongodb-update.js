// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID("5ae1492738734780a5201007") }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res)
    // })

    db.collection('Users').findOneAndUpdate({ _id: new ObjectID("5ad963722e0a3c1c11fdb7c1") }, {
        $set: {
            name: "James Murgatroyd"
        },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })

    //client.close();
});