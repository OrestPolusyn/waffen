document.addEventListener(".header", (e) => {
  document
    .querySelector(".nav__dropdown")
    .classList.remove("nav__dropdown--active");
  document.querySelector(".header").classList.remove("menu-open");
  document.querySelector(".page__body").classList.remove("fixed");

  if (!e.target.matches(".nav__link--dropdown")) return;

  document
    .querySelector(".nav__dropdown")
    .classList.add("nav__dropdown--active");
  document.querySelector(".header").classList.add("menu-open");
  document.querySelector(".page__body").classList.add("fixed");
});
