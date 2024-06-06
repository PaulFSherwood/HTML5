let newGame = true;
let colorChoices = ["red", "green", "blue", "yellow"];
let colorArray = [];
let colorCount = colorArray.length;
let isRunning = true;


$(".block").on("click", function() {
    // console.log($(this).prop("classList")[0]);
    colorArray.push($(this).prop("classList")[0]);
    // console.log(colorArray);
    // getColor();
});

function getColor() {
    return colorChoices[Math.floor(Math.random() * (0, 3))];
    // console.log("(" + color + ")");
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

function pulseCube(color) {
    $(".bottom-text").text("");
    $("." + color).addClass("pulse");

    setTimeout(function() {
        $("." + color).removeClass("pulse");
    }, 1000);  // Remove 'pulse' class after 1 second
};

function runGame() {

    $(".bottom-text").text("Please Wait.");
    // Get initial color then flash the cube for a second
    let color = getColor();  // Make sure to declare 'color' with 'let' or 'const'
    console.log("Color added: " + color);

    colorArray.push(color);
    // update the color count
    colorCount = colorArray.length;
    console.log("Current color Array: " + colorArray);

    // Pulse all colors
    for (let clrs of colorArray) {
        console.log("Color pulsed: " + clrs);
        pulseCube(clrs);
    }

    console.log("Current Color Sequence:", colorArray);
    console.log("Color count: " + colorCount);

    // We should have colors in the array and we can test them now.
    $(".bottom-text").text("Ready for your move.");    
}

$(document).on("click", ".block", function() {
    // console.log("clicked: " + colorArray[colorCount - 1]);
    // console.log("clicked: " + $(this).attr('class'));
    // We should just be able to check clicks against the current color and pass or fail.
    if (colorCount >= 1) {
        // Game is still on
        if ($(this).hasClass(colorArray[colorCount - 1])) {
            console.log("match");
            // subtract from colorCount
            colorCount -= 1;
            if (colorCount === 0 && isRunning === true) {
                $(".bottom-text").text("You Win!");
            }
        } else {
            $(".bottom-text").text("Game Failed!");
            isRunning = false;

        }
        // if ($(this).attr('class') === colorArray[colorCount - 1]) {
        //     console.log("match2");
        // }
    }
});

function resetGame() {
    setTimeout(function() { pass; }, 5000);
    $(".title").text("Press A Key to Start");

}