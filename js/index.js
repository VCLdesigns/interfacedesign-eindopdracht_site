var navIconClosed = document.querySelector("#nav_icon_closed");
var navIconOpened = document.querySelector("#nav_icon_openend");
var navMenu = document.querySelector("#nav_links");

navIconClosed.addEventListener("click", menuToggle);
navIconOpened.addEventListener("click", menuToggle);

function menuToggle(evt){
navIconClosed.classList.toggle("verborgen");
navIconOpened.classList.toggle("verborgen");
navMenu.classList.toggle("verborgen");
}