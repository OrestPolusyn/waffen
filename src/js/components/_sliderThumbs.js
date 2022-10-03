const thumbnails = document.querySelectorAll(".single__thumbnail-link");

thumbnails.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    thumbnails.forEach((item) => {
      item.classList.remove("single__thumbnail-link--active");
    });

    e.target.classList.add("single__thumbnail-link--active");

    document.querySelector("#single__image").src = e.target.href;
  });
});
