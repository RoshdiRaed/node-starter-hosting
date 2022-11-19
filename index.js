/*var catMe = require('cat-me');

// catMe();

console.log(catMe());

console.log("Hi befor cat");
console.log(catMe());
console.log("cat image");
*/

const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');
const server = express();

server.get('/add/:num1/:num2', (require, response) => {
    // let num1 = require.query.num1 = 5;
    // let num2 = require.query.num2 = 10;
    const {num1, num2} = require.params;
    // let num1 = Number (num1 = 5);
    // let num2 = Number (num2 = 10);
    let res = Number(num1) * Number(num2);
    response.send('Result = ' + res);
});



server.get('/new', (require, response) => {
    const {email, pass} = require.body;

    response.send(email + ' ' + pass);
});

server.get('/hello', (require, response) => {
    const name = require.query.name = '';
    response.send("Hi mam" + name);
});

server.listen(3000, () => {
    console.log('sever is running');
});

//-------------------//
const myMiddleware = (req, res, next) => {
    if (req.params.name !== 'roshdi') {
        res.send('not wlcome')
    }else {
        next();
    }
    
}



const myController = (req, res) => {
    if (req.params.name === 'new') {
        res.send('Hi roshdi');
    }
    // console.log("Welcome roshdi");
}

server.get('/welcome/:name', myMiddleware, myController);