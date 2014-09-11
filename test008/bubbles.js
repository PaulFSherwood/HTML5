var scores = [ 60, 50, 60, 58, 54, 54,
               58, 50, 52, 54, 48, 69,
               34, 55, 51, 52, 44, 51,
               69, 64, 66, 55, 52, 61,
               46, 31, 57, 52, 44, 18,
               41, 53, 55, 61, 51, 44 ];
// this isnt very usefull yet
var scrIdSort = [];

printArray(scores);
findTopScore(scores, scrIdSort);

// Print entire array
function printArray(myArray) {
    var i = 0;
    while (i < myArray.length) {
        console.log("Bubble solution #" + i + " score: " + myArray[i]);
        i++;
    }
    console.log("Bubbles tests: " + i);
}

// find the highest score in the array
function findTopScore(myArray, sortID) {
    // variables
    var holdId = 0;

    // run untill we have all the index numbers
    while (sortID.length != myArray.length) {
        // flip through array to find a match, starting at 0
        for (var i = 0; i < myArray.length; i++)
        {
            if (myArray[i] === holdId) {
                // push myArray index number to the new array
                sortID.push(i);
            }
        }
        // increment the checking number
        // console.log(holdId + " " + sortID.length + " " + myArray.length);
        holdId++;
        if (holdId > 100) {
            break;
        }
    }

    // First pass should be done time to recheck for copies
    for (var i = sortID.length-1; i > (sortID.length-6); i--) {
        // blarg
        console.log("Solutions with the highest score: #" + myArray[sortID[i]]);
    }

    // not really used
    return sortID;
}

console.log = function(d) {
  process.stdout.write(d);
};
