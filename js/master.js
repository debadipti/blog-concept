// menu icon variable
var menuIcon = document.getElementById("menu");
var mainMenu = document.getElementById("main-menu");
// event listener for menu icon
menuIcon.addEventListener("click", menuOpen);
// menuOpen function
function menuOpen(e) {
  if (mainMenu.classList.contains("show")) {
    mainMenu.classList.remove("show");
    mainMenu.classList.add("hidden");
  } else {
    mainMenu.classList.add("show");
    mainMenu.classList.remove("hidden");
  }
}
