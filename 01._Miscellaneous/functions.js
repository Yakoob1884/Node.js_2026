
// hoisting - i js læser den document Just In Time compilation (JIT) Læser det igennem før det eksekvere 
getRandsomInt(5, 10)

function getRandsomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Anonymous function - Functionen har ikke et navn, men låner nu const navnet
const getRandsomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// printer NaN - Not a Number
// console.log(getRandsomIntWhatisThis());

const getRandsomIntArrowFuntion = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Elias, Playing guitar
/* assignment
     Using the genericActionPerformer, can you make it say: Elias likes to play guitar 
*/
const name = "Elias";

function playingGuitarAction (name) {
    return `${name} likes to play guitar`;
}

// Sender en function som argument
                             // String, Function
function genericActionPerformer(name, action) {
    return action(name);
}

console.log(genericActionPerformer("Elias", playingGuitarAction));

// Magnus likes to watch movies
/* assignment
    Create an arrow function this time called WatchingMoviesAction
*/

const watchingMoviesAction = (name) => {
    return `${name} likes to watch movies`; 
}

console.log(genericActionPerformer("Magnus", watchingMoviesAction));

// Jacob likes to sail
/* assignment
    Create sailingAction as a one-liner
*/

console.log(genericActionPerformer("Jacob", (name) => `${name} likes to sail`));

