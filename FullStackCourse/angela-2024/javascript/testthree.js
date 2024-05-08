
// bmi = weight (lbs) / height^2 (inches) * 703
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2) * 703;
    return Math.round(bmi, 2);
}

console.log(bmiCalculator(220, 72)); // 29
console.log(bmiCalculator(90, 60)); // 17
