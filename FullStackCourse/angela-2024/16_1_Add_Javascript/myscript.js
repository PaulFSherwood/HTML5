
// Window.onload
// window.onload=function() {
//     console.log('Hello {window.onload}');
//     document.querySelector('H1').innerHTML = "done-ish";
// }

// OR
// regular calling line
// console.log('Hello');

// OR
// document.addEventListener
// document.addEventListener('DOMContentLoaded', function() {
//     // some code
//     console.log("DOM loaded {document.addEventListener}");
// });
// window.onload = function() {
//     setTimeout(function() {
//         // Your code here
//         document.querySelector('H1').innerHTML = "3 Seconds done.";
//     }, 3000); // 3000 milliseconds = 3 seconds
// };


window.addEventListener("load", function(event) {
    // First function code
    console.log('Hello {window.onload}');


    this.setTimeout(function() {
        document.querySelector('H1').innerHTML = "done-ish";
    }, 1500);

    // After 3 seconds, change the H1 text
    this.setTimeout(function() {
        document.querySelector('H1').innerHTML = "3 Seconds done.";
    }, 3000); // 3000 milliseconds = 3 seconds

    this.setTimeout(function() {
        // var items = document.querySelectorAll('.list');
        // var thirdItem = items[2];

        // thirdItem.textContent = "Late to the party";
        document.querySelector('ul > li:nth-child(3)').textContent = "Late to the party.";
    }, 4500);

}, false);
