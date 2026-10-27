"use strict";
(() => {
  const menuButton = document.getElementById("menu-toggle");
  const mobileLinks = document.getElementById("mobile-links");
  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menuButton.firstElementChild.textContent = open ? "✕" : "☰";
    mobileLinks.hidden = !open;
  }
  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  mobileLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileLinks.hidden) {
      setMenu(false);
      menuButton.focus();
    }
  });
  window.matchMedia("(min-width: 801px)").addEventListener("change", (query) => {
    if (query.matches) setMenu(false);
  });

  const buttons = Array.from(document.querySelectorAll("[data-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-category]"));
  const result = document.getElementById("results-count");
  function applyFilter(filter) {
    const allowed = ["todos", "web", "jogos"];
    if (!allowed.includes(filter)) return;
    let count = 0;
    for (const card of cards) {
      const visible = filter === "todos" || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) count++;
    }
    for (const button of buttons) button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    result.textContent = count + (count === 1 ? " projeto" : " projetos");
  }
  for (const button of buttons) button.addEventListener("click", () => applyFilter(button.dataset.filter));
  applyFilter("todos");
})();
