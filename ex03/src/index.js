// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    
    // Only change code below this line
    var firstPet, lastPet;
    firstPet = myNewPets[0];
    lastPet = myNewPets[myNewPets.length - 1];

    myNewPets.push("Bird", "Fish");
    myNewPets.pop("Fish");
    myNewPets.unshift("Lion");
    

    var temp = myNewPets[myNewPets.length - 1];
    firstPet = myNewPets[0];
    return [firstPet, lastPet, temp];
    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;