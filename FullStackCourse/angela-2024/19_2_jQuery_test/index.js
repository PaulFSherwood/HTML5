$("h1").css("color", "red");
$("button");

$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
console.log($("h1").hasClass("margin-50"));

// toggle() check the visibility of selected elements
    // hide() // show()  can set visibility alternative to switching with toggle()

// slideDown() check the visibility of selected elements or to show the hidden elements.

// empty() removes all child nodes
// remove() removes all the selected elements including all the text.

$("button").text("Don't Click");

$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
$("img").attr("width", "32");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    if ($(this).css("color") === "rgb(128, 0, 128)") { // check if the color is purple
        $(this).css("color", "#df61b5");
    } else {
        $(this).css("color", "purple");
    }
});

$("button").on("click", function() {
    // $("h1").fadeToggle("slow");
    // $("h1").slideUp();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

