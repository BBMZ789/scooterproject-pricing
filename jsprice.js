
var popup = document.getElementById("popinfo9");
var learnButton = document.getElementById("x1");
var span = document.getElementsByClassName("close")[0];
//On Click
learnButton.onclick = function () {
    popup.style.display = "block";
}
//close on click
span.onclick = function () {
    popup.style.display = "none";
}
//click somewhere else to close
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
