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

// sound function
function playSound(index) {
    switch(index) {
        case 0:
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 1:
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 2:
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 3:
            new Audio("sounds/tom-4.mp3").play();
            break;
        case 4:
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 5:
            new Audio("sounds/snare.mp3").play();
            break;
        case 6:
            new Audio("sounds/crash.mp3").play();
            break;
        default:
            break;
    }
}

// Get all the elements
var drums = document.querySelectorAll(".drum");

// Add listener to each button in with the .drum class.
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var letter = drums[i].textContent;  // Get the value / text in this tag
        console.log("Button `" + letter + "` was clicked: " + count);
        playSound(i); // play sound at that button index
        count++;
    });
}

// Add listner for specific keys.
document.addEventListener("keyup", function(event) {
    const key = event.key.toLowerCase(); // normalize the key to lowercase
    const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    const index = keys.indexOf(key);  // get the position (#) of the key from the event
    if (index !== -1) {  // use that number and pass it to the sound funtion
        playSound(index);
        console.log("Key `" + key + "` was pressed");
    }
});