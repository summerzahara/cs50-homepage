let cool = document.querySelector("#javascript-item");
let wow = document.getElementById("surprise");

cool.addEventListener("click", amazing);

function amazing() {
    console.log("Clicked.")
    wow.innerHTML = "";
    wow.innerHTML = "Check this cool Javascript Out!";
};