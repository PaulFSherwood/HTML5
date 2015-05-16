var scores = [ 60, 50, 60, 58, 54, 54,
               58, 50, 52, 54, 48, 69,
               34, 55, 51, 52, 44, 51,
               69, 64, 66, 55, 52, 61,
               46, 31, 57, 52, 44, 18,
               41, 53, 55, 61, 51, 44 ];

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .31, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

var sortID = [];

printArray(scores);
findTopScore(scores, sortID);
findCost(scores, sortID, costs);

// Print entire array
function printArray(myArray) {
    for (var i = myArray.length-1; i > (myArray.length-5); i--) {
        console.log("Bubble solution #" + i + " score: " + myArray[i]);
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
    for (var i = sortID.length-1; i > (sortID.length-3); i--) {
        // blarg
        console.log("Solutions with the highest score: #" + myArray[sortID[i]] + " at index: " + sortID[i]);
    }
}

// find the highest bubble score then find out which on cost the least
function findCost(myArray, sortID, costs) {
    // sortID should have the scores from highest to lowest.
    // i guess ill just take the top score and see if the next one is cheaper
    // if it is then show the second one, if its more show the first one.

    if (myArray[sortID[sortID.length-1]] === myArray[sortID[sortID.length-2]]) {
        if (costs[sortID[0]] < costs[sortID[1]]) {
            console.log("Lowest price is solution #" + myArray[sortID[sortID.length-1]] + 
                            " Index:" + sortID[sortID.length-1] + 
                            " Price:" + costs[sortID[sortID.length-1]]);
        } else {
                console.log("Lowest price is solution #" + myArray[sortID[sortID.length-2]] + 
                            " Index:" + sortID[sortID.length-2] + 
                            " Price:" + costs[sortID[sortID.length-2]]);
        }
    } else {
        console.log("failed");
    } 
}
