document.addEventListener("click", (e) => {
  if (e.target.matches(".deeper__btn")) return;

  document
    .querySelector(".nav__dropdown")
    .classList.remove("nav__dropdown--active");
  document.querySelector(".cart").classList.remove("cart--active");
  document.querySelector(".header").classList.remove("menu-open");
  document.querySelector(".page__body").classList.remove("fixed");

  if (e.target.matches(".nav__link--dropdown")) {
    document
      .querySelector(".nav__dropdown")
      .classList.add("nav__dropdown--active");
    fixedBodyScroll();
  }

  if (e.target.matches(".cart__link")) {
    e.target.closest(".cart").classList.add("cart--active");
    fixedBodyScroll();
  }
});

const fixedBodyScroll = () => {
  document.querySelector(".header").classList.add("menu-open");
  document.querySelector(".page__body").classList.add("fixed");
};
