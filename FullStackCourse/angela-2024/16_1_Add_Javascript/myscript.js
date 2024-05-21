
// Window.onload
window.onload=function() {
    console.log('Hello {window.onload}');
    document.querySelector('H1').innerHTML = "done-ish";
}

// OR
// regular calling line
// console.log('Hello');

// OR
// document.addEventListener
// document.addEventListener('DOMContentLoaded', function() {
//     // some code
//     console.log("DOM loaded {document.addEventListener}");
// });