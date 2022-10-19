const elementChoices = Array.from(
  document.querySelectorAll(".dropdown-select")
);

if (elementChoices.length > 0) {
  elementChoices.forEach((el) => {
    const choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
    });
  });
}
