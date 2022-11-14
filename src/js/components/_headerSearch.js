document.querySelector("#search")?.addEventListener("keyup", (e) => {
  if (!e.target.matches(".search-form__input")) return;

  if (e.target.value.length > 0) {
    e.target.classList.add("active");
  } else {
    e.target.classList.remove("active");
  }
});
