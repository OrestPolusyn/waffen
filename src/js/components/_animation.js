sr.reveal(".hero__title", {
  duration: 1000,
  distance: "20px",
  easing: "ease",
  delay: "200",
  origin: "top",
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});

sr.reveal(".header", {
  duration: 1000,
  distance: "100%",
  easing: "ease",
  delay: "1300",
  origin: "top",
  opacity: 0,
  viewFactor: 0,
  mobile: false,
  reset: true,
});

sr.reveal(".footer", {
  duration: 800,
  distance: "100%",
  easing: "ease",
  delay: "500",
  origin: "bottom",
  mobile: false,
  opacity: 0,
  viewFactor: 0,
  reset: true,
});

sr.reveal(".hero__btn", {
  duration: 1000,
  distance: "30px",
  easing: "ease",
  delay: "800",
  origin: "bottom",
  mobile: false,
  opacity: 0,
  viewFactor: 0,
  reset: true,
});

sr.reveal(".hero__mouse", {
  duration: 1000,
  distance: "30px",
  easing: "ease",
  delay: "1300",
  origin: "bottom",
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});

sr.reveal(".title:not(.title--card, .title--name)", {
  duration: 500,
  distance: "20px",
  easing: "ease",
  delay: "100",
  origin: "top",
  opacity: 0,
  viewFactor: 0,
  mobile: false,
  reset: true,
});

sr.reveal(".tabs__btns > *", {
  duration: 500,
  distance: "50px",
  easing: "ease",
  delay: "100",
  origin: "left",
  opacity: 0,
  mobile: false,
  reset: true,
  interval: 200,
});

sr.reveal(".tabs__content-box--active > *", {
  duration: 700,
  distance: "50px",
  easing: "ease",
  delay: "500",
  origin: "top",
  opacity: 0,
  viewFactor: 0,
  mobile: false,
  reset: true,
  interval: 200,
});
sr.reveal(".categories__item", {
  duration: 700,
  easing: "ease",
  delay: "500",
  opacity: 0,
  viewFactor: 0,
  mobile: false,
  reset: true,
  interval: 200,
});

sr.reveal(".tabs__more, .contact", {
  duration: 700,
  easing: "ease",
  delay: "500",
  opacity: 0,
  viewFactor: 0,
  mobile: false,
  reset: true,
  interval: 200,
});

sr.reveal(".tabs__more, .contact", {
  duration: 700,
  easing: "ease",
  delay: "500",
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
  interval: 200,
});

const link = document.querySelectorAll(".calendar-gallery a");

link.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
