let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");

let showMenu = document.querySelector(".show-menu");
let funcClose = () => (showMenu.style.display = "none");
menuOpen.addEventListener("click", () => {
  showMenu.style.display = "block";
});
menuClose.addEventListener("click", funcClose);

let menuDiv = document
  .querySelector(".menu-div")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let scroll = e.target.getAttribute("href");
    document.querySelector(scroll).scrollIntoView({ behavior: "smooth" });
    e.target.classList.contains("menu-a") ? funcClose() : "";
  });
