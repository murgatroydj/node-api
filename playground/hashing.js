const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
    id: 10
}

var token = jwt.sign(data, '123abc')
console.log(token);
var decoded = jwt.verify(token, '123abc')
console.log(decoded)


// var msg = "password"
// var hash = SHA256(msg).toString();


// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesalt').toString()
// }

// // token.data.id = 5;
// //token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesalt').toString()

// if (resultHash === token.hash) {
//     console.log('data good')
// } else {
//     console.log('data no good')
// }