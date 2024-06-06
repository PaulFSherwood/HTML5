let newGame = true;
let colorChoices = ["red", "green", "blue", "yellow"];
let colorArray = [];
let colorCount = 0;//colorArray.length;
let isRunning = true;


// $(".block").on("click", function() {
//     // console.log($(this).prop("classList")[0]);
//     colorArray.push($(this).prop("classList")[0]);
//     // console.log(colorArray);
//     // getColor();
// });

function getColor() {
    return colorChoices[Math.floor(Math.random() * (0, 3))];
    // console.log("(" + color + ")");
}

function addColorResetArray() {
    let color = getColor();  // Make sure to declare 'color' with 'let' or 'const'
    console.log("Color added: " + color);

    colorArray.push(color);
    // update the color count
    colorCount = 0;//colorArray.length;
    console.log("Current color Array: " + colorArray);
}

$(document).ready(function() {
    $(document).keypress(function(event) {
        $(".title").text("Game has started!");
        $(".title").css("color", "#df61b5");

        // Game can start.
        newGame = false;
        console.log("Game started: ");
        runGame();
    });
});

// function pulseCube(color) {
//     // $(".bottom-text").text("");
//     $("." + color).removeClass("pulse").css("animation", "none")[0].offsetHeight;

//     setTimeout(function() {
//         $("." + color).addClass("pulse").css("animation", "");
//     }, 1300);  // Remove 'pulse' class after 1 second
// };
function pulseCube(color) {
    var element = $("." + color);

    // Increment a counter to change the animation name, making it unique each time
    var animationName = 'pulse' + Date.now();  // Unique key using timestamp

    // Define a unique keyframes animation using style elements
    var keyframes = `@keyframes ${animationName} {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
    }`;

    // Append the keyframes to the document head or update existing style
    var styleTag = $('#pulseKeyframesStyle');
    if (styleTag.length === 0) {
        $('head').append(`<style id='pulseKeyframesStyle'>${keyframes}</style>`);
    } else {
        styleTag.html(keyframes);  // Replace existing keyframes to ensure the new one is used
    }

    // Apply the new animation
    element.css({
        animationName: animationName,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'forwards'
    });

    playSound(color);
    
    // Optional: Clear the animation after it's complete to clean up
    setTimeout(() => {
        element.css('animationName', 'none');
    }, 1000);  // Match the duration of the animation
}

function pulseAllCubes() {
    let delay = 1300;  // Base delay of 1 second

    for (let i = colorArray.length-1; i >= 0; i--) {
        console.log("Color pulsed: " + colorArray[i]);
        setTimeout(function() {
            pulseCube(colorArray[i]);
        }, delay * i);  // Delay increases with each iteration
    }

}

// sound function
function playSound(color) {
    switch(color) {
        case 'green':
            new Audio("sounds/green.mp3").play();
            break;
        case 'red':
            new Audio("sounds/red.mp3").play();
            break;
        case 'yellow':
            new Audio("sounds/yellow.mp3").play();
            break;
        case 'blue':
            new Audio("sounds/blue.mp3").play();
            break;
        default:
            break;
    }
}

function runGame() {
    console.log("runGame: ");
    $(".bottom-text").text("Please Wait.");
    // Get initial color then flash the cube for a second
    addColorResetArray();

    // // Pulse all colors
    // for (let clrs of colorArray) {
    //     console.log("Color pulsed: " + clrs);
    //     pulseCube(clrs);
    // }

    pulseAllCubes();


    console.log("Current Color Sequence:", colorArray);
    console.log("Color count: " + colorCount);

    // We should have colors in the array and we can test them now.
    $(".bottom-text").text("Ready for your move.");    
}

$(document).on("click", ".block", function() {
    // console.log("clicked: " + colorArray[colorCount - 1]);
    // console.log("clicked: " + $(this).attr('class'));
    // We should just be able to check clicks against the current color and pass or fail.
    if (colorCount <= colorArray.length) {
        // Game is still on
        if ($(this).hasClass(colorArray[colorCount])) {
            console.log("match");
            // subtract from colorCount
            colorCount += 1;
            if (colorCount === colorArray.length && isRunning === true) {
                console.log("Color count is 0");
                // Add a new color to the array
                addColorResetArray();
                
                // Pulse all cubes
                pulseAllCubes();
            }
        } else {
            $(".bottom-text").text("Game Failed!");
            isRunning = false;

        }
        // if ($(this).attr('class') === colorArray[colorCount - 1]) {
        //     console.log("match2");
        // }
    } else {

    }
});

function resetGame() {
    setTimeout(function() { pass; }, 5000);
    $(".title").text("Press A Key to Start");

}