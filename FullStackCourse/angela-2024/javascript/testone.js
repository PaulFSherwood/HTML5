
var birthMonth = prompt("What is the Month of your birth?");
var birthDay = prompt("What is the day of your birth?");
var birthYear = parseInt(prompt("What is the year of your birth?"), 10);

var birthYearInt = parseInt(birthYear);
var endYear = birthYear + 90;

var startDate = new Date(birthMonth + "/" + birthDay + "/" + birthYear);
console.log(startDate);
var currentDate = new Date();
console.log(currentDate);
var endDate = new Date(birthMonth + "/" + birthDay + "/" + endYear);
console.log(endDate);

var daysTillNinty = Math.ceil(Math.abs(endDate - currentDate) / (1000 * 60 * 60 * 24));
var monthsTillNinty = Math.ceil(daysTillNinty / 30);
var yearsTillNinty = Math.ceil(daysTillNinty / 365);
console.log("You have " + yearsTillNinty + " years or " + monthsTillNinty + " months or " + daysTillNinty + " days until 90.");
