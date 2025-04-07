const menuBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__inner");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});
