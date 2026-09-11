// .forEach(), .map(), .filter(), .reduce(), .find(), .findIndex(), .indexOf

// Rule 1: Use loop methods in JavaScript (specifikt)
// Rule 2: Don't use for loops unless if you are finger counting
// Rule 3: Use .map() if you need that data afterwards, otherwise only use .forEach() if you don't

// map returns a new list of the same size: 1:1. If we want a smaller list
//  we use filter, and if we use reduce we get 1

const numbers = [1, 2, 3, 4, 5];

// Task: double the numbers

const doubleNumbers = numbers.map((number) => number * 2)

//console.log(doubleNumbers)

const numbersIterated = numbers.map((value, index, array) => console.log(value, index, array))

const countries = [
    {name: "Lesotho", gdp: 530 },
    {name: "Papua New Guinea", gdp: 1025},
    {name: "Saint Vincent and the Grenadines", gdp: 1200}
]

//Task: if the country is lesotho, boost the GDP with 500

/*
const countriesWithGDPUpdated = countries.map((country) => {
    if (country.name === "Lesotho") {
        country.gdp += 500;
    }
    return country
})
 */

const countriesWithGDPUpdated = countries.map ((country) => ({    
        name: country.name,
        gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp
    
}))

console.log(countriesWithGDPUpdated)

// Task: filter out the countries where the gdp is below 100 in the countires variable

// Note: This doens't work due to Side effect. We changed the original object in memory and now don't get the original values
const countiresWithGDPOverThousand = countries.filter((country) => {
    if (country.gdp > 1000) {
        return country
    }
})

console.log(countiresWithGDPOverThousand)