var navIconClosed = document.querySelector("#nav_icon_closed");
var navIconOpened = document.querySelector("#nav_icon_openend");
var navMenu = document.querySelector("#nav_links");
var deNacht = document.querySelector("#nacht_kader");
var deSterren = document.querySelectorAll(".sterren");

navIconClosed.addEventListener("click", menuToggle);
navIconOpened.addEventListener("click", menuToggle);

function menuToggle(evt) {
    navIconClosed.classList.toggle("verborgen");
    navIconOpened.classList.toggle("verborgen");
    navMenu.classList.toggle("verborgen");
}

for (var i = 0; i < deSterren.length; i++) {
    // left Moet van 0% tot 100% gaan
    var randomLeft = Math.random() * 100;
    // top moet van 0px tot 500px gaan
    var randomTop = Math.random() * 500
    //verspreiding van de sterren
    deSterren[i].style.left = randomLeft + "%";
    deSterren[i].style.top = randomTop + "px";
}