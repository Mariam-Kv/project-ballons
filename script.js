let menuOpen = document.querySelector(".aaaa");
let menuClose = document.querySelector(".menu-close");
let show = function () {
  showMenu.style.display = "block";
};
let showMenu = document.querySelector(".show-menu");
let funcClose = () => (showMenu.style.display = "none");
menuOpen.addEventListener("click", show);

menuClose.addEventListener("click", funcClose);

let menuDiv = document
  .querySelector(".menu-div")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let scroll = e.target.getAttribute("href");
    document.querySelector(scroll).scrollIntoView({ behavior: "smooth" });
    e.target.classList.contains("menu-a") ? funcClose() : "";
  });
let elseButton = document.querySelectorAll(".else").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let scroll = e.target.getAttribute("href");
    document.querySelector(scroll).scrollIntoView({ behavior: "smooth" });
  });
});
let header2 = document.querySelector(".header");
let sticky = document.querySelector(".sticky");
let brown = document.querySelector(".brown");
let menu2 = document
  .querySelector(".menu-open")
  .addEventListener("click", show);
function func(entries) {
  let entry = entries[0];

  if (!entry.isIntersecting) {
    sticky.style.display = "block";
  } else {
    sticky.style.display = "none";
  }
}
let observer = new IntersectionObserver(func, { root: null, threshold: 0.3 });
observer.observe(header2);
