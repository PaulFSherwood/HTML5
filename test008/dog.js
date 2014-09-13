var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};
function changevar(doggie) {
    if (doggie.weight > 20) {
        doggie.bark = "WOOF WOOF";
    } else {
        doggie.bark = "woof woof";
    }
}
changevar(dog);

var speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;

console.log(speak);
