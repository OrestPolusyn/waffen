const buttons = document.querySelectorAll("[data-tab-target]");
const sections = document.querySelectorAll("[data-tab-content]");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const listSet = e.target.dataset.tabTarget;

    const currentBtn = e.target
      .closest(".tabs__content")
      .querySelectorAll("[data-tab-target]");

    const currentSections = e.target
      .closest(".tabs__content")
      .querySelectorAll("[data-tab-content]");

    currentBtn.forEach((item) => {
      item.classList.remove("tabs__btn--active");
    });

    e.target.classList.add("tabs__btn--active");

    currentSections.forEach((item) => {
      item.classList.remove("tabs__cards--active");

      if (item.dataset.tabContent === listSet) {
        item.classList.add("tabs__cards--active");
      }
    });
  });
});
