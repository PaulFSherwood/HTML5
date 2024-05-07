function lifeInWeeks(age) {

    var ageRemain = 90 - age;

    var monthsRemain = ageRemain * 12;
    var weeksRemain = ageRemain * 52;
    var daysRemain = ageRemain * 365;
    console.log("You have " + daysRemain + " days, " + weeksRemain + " weeks, and " + monthsRemain + " months left.")
}

lifeInWeeks(56);