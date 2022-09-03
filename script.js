let elseButton = document.querySelectorAll(".else").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let scroll = e.target.getAttribute("href");
    document.querySelector(scroll).scrollIntoView({ behavior: "smooth" });
  });
});
