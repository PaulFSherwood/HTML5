$(document).ready(function() {
    // Canvas stuff
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();

    // Lets save the cell width in a variable for easy control
    var cw = 10;

    // Paint the Canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);

    // Lets create the snake now
    var snake_array;  // An array of cells to make up the snake

    create_snake();
    function create_snake()
    {
        var length = 5; // length of the snake
        snake_array = []; // empty array to start with
        for (var i = length - 1; i >= 0; i--)
        {
            // This will create a hrizontal snake starting from the top left
            snake_array.push({ x: i, y: 0});
        }
    }

    // Lets paint the snake now
    function paint()
    {
        for (var i = 0; i < snake_array.length; i++)
        {
            var c = snake_array[i];
            // Lets paint 10px wide cells
            ctx.fillStyle = "blue";
            ctx.fillRect( c.x * 10, c.y * 10, 10, 10);
            ctx.strokeStyle = "white";
            ctx.strokeRect( c.x * 10, c.y * 10, 10, 10);
        }
    }
    paint();
})
