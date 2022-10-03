const calcItem = document.querySelectorAll("[data-calc]");

document.addEventListener("click", (e) => {
  if (!e.target.matches("[data-calc]")) return;

  if (e.target.matches("[data-calc='minus']")) {
    const inputValue = e.target
      .closest(".cart-page__number")
      .querySelector("input");

    if (inputValue.value > 1) {
      inputValue.value = +inputValue.value - 1;
    } else {
      inputValue.value = 1;
    }

    calcValue(e, inputValue.value);
  }

  if (e.target.matches("[data-calc='plus']")) {
    const inputValue = e.target
      .closest(".cart-page__number")
      .querySelector("input");

    inputValue.value = +inputValue.value + 1;

    calcValue(e, inputValue.value);
  }
});

document.querySelectorAll(".cart-page__window").forEach((item) => {
  item.querySelector("input").addEventListener("keyup", (e) => {
    if (e.target.value === " " || e.target.value < 1) {
      e.target.value = 1;
    }
    calcValue(e, e.target.value);
  });
});

function calcValue(e, value) {
  const priceItem = parseInt(
    e.target
      .closest(".cart-page__number")
      .previousElementSibling.querySelector(".cart-page__value span")
      .innerText.replace(/[^\d]/g, "")
  );

  let priceItemFinal = e.target
    .closest(".cart-page__number")
    .nextElementSibling.querySelector(".cart-page__price span");

  priceItemFinal.innerText = (value * priceItem)
    .toString()
    .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");

  totalPrice();
}

function totalPrice() {
  const totalText = document.querySelector(".cart-page__total");

  const totalAll = document.querySelectorAll(
    ".cart-page__price span:first-child"
  );

  let totalNumber = 0;

  totalAll.forEach((item) => {
    const totalValue = parseInt(item.innerText.replace(/[^\d]/g, ""));

    totalNumber = totalNumber + totalValue;
  });

  if (totalText) {
    totalText.innerText = totalNumber
      .toString()
      .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");
  }
}
totalPrice();
