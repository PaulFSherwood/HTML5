
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        let bacon = names[Math.floor(Math.random() * names.length)];
        
        return bacon + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }