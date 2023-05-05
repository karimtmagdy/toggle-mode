const body = document.querySelector("body");
toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
// console.log(getMode);
if (getMode && getMode === "dark") {
  body.classList.add("dark");
  toggle.classList.add("active");
}
// console.log(body, toggle);
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
