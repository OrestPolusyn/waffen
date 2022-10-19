document.addEventListener("click", (e) => {
  if (!e.target.matches(".cart__link")) {
    document.querySelector(".cart").classList.remove("cart--active");
    document.querySelector(".header").classList.remove("menu-open");
    document.querySelector(".page__body").classList.remove("fixed");
    return;
  } else {
    e.target.closest(".cart").classList.add("cart--active");
    document.querySelector(".header").classList.add("menu-open");
    document.querySelector(".page__body").classList.add("fixed");
  }
});
