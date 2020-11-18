var holdingString = "";

function myFunction(elem) {
  holdingString = holdingString + elem.innerHTML;
  document.getElementById("textOut").innerHTML = holdingString;
}
function clearText() {
  holdingString = "";
  document.getElementById("textOut").innerHTML = holdingString;
}
