document.addEventListener("click", (e) => {
  if (!e.target.matches(".single__code-copy")) return;

  const textContent = e.target.querySelector("span").innerText.trim();
  navigator.clipboard.writeText(textContent);

  if (!navigator.clipboard.writeText(textContent)) return;
});
