const filterBtn = document.querySelector(".sort__filter-btn");
const filterBtnClose = document.querySelector(".filter__close");
const filterForm = document.querySelector(".filter");
const main = document.querySelector(".main");
const body = document.querySelector("body");

filterBtn?.addEventListener("click", () => {
  filterForm.classList.add("filter--active");
  main.classList.add("catalog-filter");
  body.classList.add("dis-scroll");
});

filterBtnClose?.addEventListener("click", () => {
  filterForm.classList.remove("filter--active");
  main.classList.remove("catalog-filter");
  body.classList.remove("dis-scroll");
});
