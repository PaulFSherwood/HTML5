
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

function numberOfBottles(number) {
    while (number >= 0) {
        if (number === 0) {
            console.log("No more bottles of beer on the wall");
        }
        if (number === 1) {
            console.log("1 bottle of beer on the wall");
        }
        if (number >= 2) {
            console.log(number + " bottles of beer on the wall.");
        }
        number++;
    }
}

function fibonacciGenerator(n) {
    let fib = [];
    // counting up from 0 to n add the last number
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(i);
        } else if (i === 1) {
            fib.push(i);
        } else {
            fib.push(fib[i-2] + fib[i-1]);
        }
    }
    return fib;    
}
