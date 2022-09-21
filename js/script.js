const themes = ["theme1", "theme2", "theme3"];
const margins = ["5px", "26px", "50px"];
const btn = document.querySelector(".header .button");
let index = 0;
document.querySelector(".button-container").addEventListener("click", () => {
  index = (index + 1) % themes.length;
  document.documentElement.className = themes[index];
  btn.style.marginLeft = margins[index];
  navigator.vibrate(100);
});

document.querySelectorAll("section.btns .btn").forEach((element) => {
  element.addEventListener("mousedown", () => navigator.vibrate(10));
});
