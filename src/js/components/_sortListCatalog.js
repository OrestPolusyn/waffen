const sortCatalogBtn = document.querySelector(".sort__btn");
const sortCatalogList = document.querySelector(".sort__list");

if (sortCatalogBtn) {
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".sort__btn")) {
      sortCatalogList.classList.remove("sort__list--open");

      return;
    }

    sortCatalogList.classList.toggle("sort__list--open");
  });
}
