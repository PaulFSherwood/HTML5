$("h1").css("color", "red");
$("button");

$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
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