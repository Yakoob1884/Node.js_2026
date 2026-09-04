const express = require('express');
const app = express();

// const app = require('express')();

// Task: Create a route for the endpoint / which returns a greeting

app.get('/', (req, res) => {
    res.send({ data: "Greetings my friends :)"})
});

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


app.get('/bars/forgottenItems', (req, res) =>{
    console.log(req.query);
    res.send({ data: req.query});
});

app.listen(8080);