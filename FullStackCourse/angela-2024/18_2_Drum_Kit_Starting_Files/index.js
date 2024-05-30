// document.querySelector("button").addEventListener("click", handleClick);

// var count = 1;

// function handleClick() {
//     console.log("Button was clicked: " + count);
//     count++;
// }

// document.querySelector("button").addEventListener("click", function() {
//     console.log("Button " + event.target.id + " was clicked: " + count);
//     count++;
// });

var count = 1;
// Anonymous Function
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         // var letter = document.querySelectorAll(".drum")[i].textContent;
//         console.log("Button was clicked: " + count);
        
//         count++;
//     });
// }

// Get all the elements
var drums = document.querySelectorAll(".drum");

// Go through the elements.
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var letter = drums[i].textContent;
        console.log("Button `" + letter + "` was clicked: " + count);
        count++;
    });
}
