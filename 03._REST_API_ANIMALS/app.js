const express = require('express')

const app = express()


const animals =[
    {id: 1, name: "Parrot", age: 34},
    {id: 2, name: "Pelican", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Australian_Pelican_showing_large_pouch.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"}
]


app.get('/animals', (req, res) => {
    res.send({data : animals})
})

app.get('/animals/:id', (req, res) => {
    const providedID = Number(req.params.id)
    const foundAnimal = animals.find((animal) => animal.id === providedID)

    // Secure defaults
    if(!foundAnimal){
        return res.status(404).send({data: `No animals found by id ${providedID}`})
    } 
    
    res.send({data : foundAnimal})
})

/*
 Successful responses (200 – 299)
 Redirection messages (300 – 399)
 Client error responses (400 – 499)
 Server error responses (500 – 599)
*/






app.listen(8080)