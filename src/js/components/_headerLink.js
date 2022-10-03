document.addEventListener("click", (e) => {
  if (!e.target.matches(".nav__link--dropdown")) {
    document
      .querySelector(".nav__dropdown")
      .classList.remove("nav__dropdown--active");
  } else {
    e.target.nextElementSibling.classList.add("nav__dropdown--active");
  }
});
