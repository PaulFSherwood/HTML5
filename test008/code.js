var words = "bottles";
var num = 99;

while (num > 0) {
       console.log(num + " " + words + " of beer on the wall");
       console.log(num + " " + words + " of beer,");
       console.log("Take one down, pass it around,");
       num = num - 1;
    if (num > 1) {
       console.log(num + " " + words + " of beer on the wall");
    } else if (num == 1) {
       words = "bottle";
       console.log(num + " " + words + " of beer on the wall"); 
    } else {
       console.log("No more " + words + " of beer on the wall");
    }
}
