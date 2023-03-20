var toggle = document.getElementById("toggle");
var overlay = document.getElementById("overlay");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  overlay.classList.toggle("open");
});