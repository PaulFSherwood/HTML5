
// Get names
function getNames() {
    var userName = document.getElementById("userName").value;
    var partnerName = document.getElementById("partnerName").value;
    // return names
    return [userName, partnerName];
}

function getRandomPercentageNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function calculateLove() {
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    return loveScore;
}

function generateLoveStatmentBasedOnPercentage(resultPercentage) {
    var loveScore = resultPercentage;
    var loveStatement = "";
    if (loveScore > 70) {
        loveStatement = "Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye.";
    } else if (loveScore > 30 && loveScore <= 70) {
        loveStatement = "Your love score is " + loveScore + "%. You go together like coke and mentos.";
    } else {
        loveStatement = "Your love score is " + loveScore + "%. You go together like oil and water.";
    }
    return loveStatement;
}

// update the result, resultPercentage, resultText, userName, partnerName
function getResult() {
    var userName = getNames()[0];
    var partnerName = getNames()[1];
    var resultPercentage = getRandomPercentageNumber();
    var resultText = generateLoveStatmentBasedOnPercentage(resultPercentage);

    // update the result
    document.getElementsByClassName("resultText")[0].textContent = resultText;    
    // update the resultPercentage
    document.getElementsByClassName("resultPercentage")[0].textContent = resultPercentage + "%";
    // update the userName use textContent
    document.getElementsByClassName("userName")[0].textContent = userName;
    // update the partnerName
    document.getElementsByClassName("partnerName")[0].textContent = partnerName;


    

}