document.addEventListener("click", (e) => {
  if (!e.target.matches(".bullet-count__btn")) {
    document.querySelectorAll(".bullet-count__list").forEach((item) => {
      item.classList.remove("bullet-count__list--active");
    });

    return;
  } else {
    e.target.nextElementSibling.classList.add("bullet-count__list--active");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".bullet-count__list li")) return;

  e.target
    .closest(".bullet-count")
    .querySelector(".bullet-count__btn span").innerText = e.target.innerText;

  e.target
    .closest(".bullet-count__list")
    .classList.remove("bullet-count__list--active");
});
