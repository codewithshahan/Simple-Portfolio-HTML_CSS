const open = document.getElementById("open");
const close = document.getElementById("close");
const hero = document.querySelector(".hero");
open.addEventListener("click", () => hero.classList.add("show-nav"));
close.addEventListener("click", () => hero.classList.remove("show-nav"));
