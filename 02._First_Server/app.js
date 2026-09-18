const express = require('express');
const app = express();

// const app = require('express')();

// stay on top
app.use(express.json())

console.log(__dirname)


app.get('/', (req, res) => {
                                // trailing slash - /slash at the end
    res.sendFile(__dirname + '/index.html')
});

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html')
})

// callback function: a function reference provided as an argument with the posibility (perhaps) og being called later
        
// Functions as first-class citezens = I can do with functions what I can do with other data types

        // endpoint  // Callback function
app.get('/blablabla', (req, res) => {
    res.send({ data: "They talk a lot but nothing is said"});
});
// The whole thing ^ is a "route"


// How can i send data in a GET request
// Path variable: /users/1
// query parameters: ?userId=1&likesProgramming=true

// Task: create a /beers route

app.get('/beers/:beerType/:amount', (req, res) => {
    // console.log(req.params.beerType);
    res.send({ data: `You ordered a ${req.params.amount} of ${req.params.beerType}`});
});


app.get('/bars/forgottenItems', (req, res) => {
    console.log(req.query);
    res.send({ data: req.query});
});


app.post('/dictators', (req, res) => {
    console.log(req.body);
    res.send({ data : req.body});
})


// Task: Create a path for dictators

app.patch('/dictators/:name', (req, res) => {
    res.send({ data : `You have turned the great dictator - ${req.params.name} - benevolent for life`})
})



// At the bottom
app.listen(8080);