document.querySelector(".cart").addEventListener("click", (e) => {
  if (!e.target.matches(".cart__link")) return;

  e.target.closest(".cart").classList.toggle("cart--active");
  document.querySelector(".header").classList.toggle("menu-open");
  document.querySelector(".page__body").classList.toggle("fixed");
});
