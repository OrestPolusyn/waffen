document.addEventListener("click", (e) => {
  if (!e.target.matches(".nav__link--dropdown")) {
    document
      .querySelector(".nav__dropdown")
      .classList.remove("nav__dropdown--active");
    document.querySelector(".header").classList.remove("menu-open");
    document.querySelector(".page__body").classList.remove("fixed");
  } else {
    e.target.nextElementSibling.classList.add("nav__dropdown--active");
    document.querySelector(".header").classList.add("menu-open");
    document.querySelector(".page__body").classList.add("fixed");
  }
});
