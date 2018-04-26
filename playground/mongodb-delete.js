// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({ text: "eat lunch" }).then(res => {
    //     console.log(res)
    // })

    // delete one
    // db.collection('Todos').deleteOne({ text: "eat lunch" }).then(res => {
    //         console.log(res)
    //     })
    // find one and delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then(res => {
    //         console.log(res)
    //     })


    // db.collection('Users').deleteMany({ name: "James Murgatroyd" }).then(res => {
    //     console.log(res)
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5ad9657b6dcb0e1c1d10ca8f")
    }).then(res => {
        console.log(res)
    })

    //client.close();
});