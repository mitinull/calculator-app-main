const themes = ["theme1", "theme2", "theme3"];
const margins = ["5px", "26px", "50px"];
const btn = document.querySelector(".header .button");
const input = document.querySelector(".screen input");
const keyPad = [
  "7",
  "8",
  "9",
  "",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "×",
  "",
  "",
];
let index = 0;
let after_enter = false;

input.focus();

document.querySelector(".button-container").addEventListener("click", () => {
  index = (index + 1) % themes.length;
  document.documentElement.className = themes[index];
  btn.style.marginLeft = margins[index];
  navigator.vibrate(100);
});

document.querySelectorAll("section.btns .btn").forEach((element, index) => {
  element.addEventListener("click", () => {
    navigator.vibrate(25);
    if (after_enter && !["-", "+", "*", "/", "Enter"].includes(element.innerText)) {
      input.value = "";
    }
    input.value += keyPad[index];
    after_enter = false;
    if (element.innerText === "=") {
      input.value = eval(input.value.replace("×", "*"));
      after_enter = true;
    }
  });
});
document
  .querySelector("#res")
  .addEventListener("click", () => (input.value = ""));
document
  .querySelector("#del")
  .addEventListener(
    "click",
    () => (input.value = input.value.substr(0, input.value.length - 1))
  );

document.addEventListener("click", () => {
  input.focus();
});

input.addEventListener("keypress", (key) => {
  if (
    ![
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "+",
      ".",
      "*",
      "/",
    ].includes(key.key)
  ) {
    key.preventDefault();
  }
  if (key.key === "*") {
    key.preventDefault();
    input.value += "×";
  }
  if (after_enter && !["-", "+", "*", "/", "Enter"].includes(key.key)) {
    input.value = "";
  }
  after_enter = false;

  if (key.key === "Enter") {
    input.value = eval(input.value.replace("×", "*"));
    after_enter = true;
  }
});
