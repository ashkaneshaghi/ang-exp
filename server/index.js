const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');

const port = process.env.PORT || 3000;

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/message', (req, res) => {
    res.statusCode = 200;
    res.json(createMessage());
});

app.get('/messages', (req, res) => {
    res.statusCode = 200;
    res.json(createMessages());
});

app.get('/', (req, res) => {
    res.json({
        message: 'This is updated Home'
    });
});

app.listen(port, () => {
    console.log('Server is running on ' + port);
});

function createMessage() {
    return {
        title: 'This is Title',
        message: 'With supporting text below as a natural lead-in to additional content.'
    };
}

function createMessages() {
    let messages = [];
    for (let index = 0; index < 7; index++) {
        messages.push(
            {
                title: 'This is title ' + (index + 1),
                message: 'This is message ' + (index + 1) + '. Hope you enjoy your day'
            }
        );
    }
    return messages;
}
