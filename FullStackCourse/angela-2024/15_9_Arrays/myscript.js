
let namesArray = ["Snake", "Ellen", "Indiana", "Han", "Harry", "Marion", "John", "Axel"];

function checkName() {
    let name = document.getElementById("nameInput").value;
    let matchFound = false;

    for (let i = 0; i < namesArray.length; i++) {
        
        if (name === namesArray[i]) {
            matchFound = true;
            break;
        } else {
        }
    }
    document.getElementById("result").textContent = matchFound ? "A match was found :)" : "No match was found :(";
            
}
