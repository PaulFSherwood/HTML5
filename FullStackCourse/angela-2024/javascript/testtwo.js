function lifeInWeeks(age) {

    var ageRemain = 90 - age;

    var monthsRemain = ageRemain * 12;
    var weeksRemain = ageRemain * 52;
    var daysRemain = ageRemain * 365;
    console.log("You have " + daysRemain + " days, " + weeksRemain + " weeks, and " + monthsRemain + " months left.")
}

lifeInWeeks(56);

function gravityOfRockyPlanet(radius, mass) {
    var gravity = (6.67e-11 * mass) / Math.pow(radius, 2);
    return Math.round(gravity, 2) + " m/s^2";
    
}

console.log(gravityOfRockyPlanet(6371e3, 5.97e24)); // Earth
console.log(gravityOfRockyPlanet(6052e3, 4.87e24)); // Venus
console.log(gravityOfRockyPlanet(3390e3, 6.42e23)); // Mars
console.log(gravityOfRockyPlanet(69911e3, 1.90e27)); // Jupiter


// bmi = weight (lbs) / height^2 (inches) * 703
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2) * 703;
    return Math.round(bmi, 2);
}

console.log(bmiCalculator(220, 72)); // 29
console.log(bmiCalculator(90, 60)); // 17
