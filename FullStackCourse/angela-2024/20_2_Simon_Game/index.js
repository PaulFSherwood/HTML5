let newGame = true;
let colorChoices = ["red", "green", "blue", "yellow"];
let colorArray = [];
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

        // Get initial color then flash the cube for a second
        let color = getColor();  // Make sure to declare 'color' with 'let' or 'const'
        colorArray.push(color);
        pulseCube(color);
        console.log("Current Color Sequence:", colorArray);
    });
});

function pulseCube(color) {
    $("." + color).addClass("pulse");
    setTimeout(function() {
        $("." + color).removeClass("pulse");
    }, 1000);  // Remove 'pulse' class after 1 second
};

