const express = require('express')

const app = express()
app.use(express.json)


const animals =[
    {id: 1, name: "Parrot", age: 34},
    {id: 2, name: "Pelican", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Australian_Pelican_showing_large_pouch.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"}
]

const nextId = 3

app.get('/animals', (req, res) => {
    res.send({data : animals})
})

app.get('/animals/:id', (req, res) => {
    const providedID = Number(req.params.id)
    const foundAnimal = animals.find((animal) => animal.id === providedID)

    // Secure defaults
    if(!foundAnimal){
        return res.status(404).send({errorMessage: `No animals found by id ${providedID}`})
    } 
    
    res.send({data : foundAnimal})
})

//post fix
/*
(value++)
*/

//Post fix
/*
(++value)
*/


app.post("/animals", (req, res) => {

    const providedAnimal = req.body

    providedAnimal.id = nextId++

    animals.push(providedAnimal)

    res.send({data : providedAnimal})
})

app.patch("/animals/:id", (req, res) => {
    const providedId = Number(req.params.id)
    const foundAnimalIndex = animals.findIndex((animal) => animal.id === providedId)

     if (foundAnimalIndex === -1){
        res.status(404).send({errorMessage: `No animals found by id ${providedID}`})
    }

    const providedAnimal = req.body
    const foundAnimal = animals[foundAnimalIndex]

    const animalToCreate = {...foundAnimal, ...providedAnimal, id: providedId}

    animals[foundAnimalIndex] = animalToCreate

    res.send({ data: animalToCreate})
})

const labrador = {
    color: "brown",
    color: "white",
    color: "multi",
    energyLevel: 9.4
}

//console.log(labrador)

const chihuaua = {
    energyLevel: 10.0,
    isScaredOfAnything: false
}

console.log({labrador, chihuaua})

app.delete("/animals/:id", (req, res) => {
    const providedId = Number(req.params.id)
    const foundAnimalIndex = animals.findIndex((animal) => animal.id === providedId)

    if (foundAnimalIndex === -1){
        res.status(404).send({errorMessage: `No animals found by id ${providedID}`})
    }

    animals.splice(foundAnimalIndex)

    res.status(204).send()
})

/*
 Successful responses (200 – 299)
 Redirection messages (300 – 399)
 Client error responses (400 – 499)
 Server error responses (500 – 599)
*/

// False values
// false, undefined, NaN, ' ' (empty string), 0, null


app.listen(8080, (error) => {
    if(error) {
        console.log("Error running in the server", error)
        return
    }
    console.log("Server is running on port", 8080)
})