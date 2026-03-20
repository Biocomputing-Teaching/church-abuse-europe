document.querySelectorAll("[data-filter-group]").forEach((group) => {
  const buttons = group.querySelectorAll("[data-filter]");
  const targetSelector = group.dataset.target;
  const cards = document.querySelectorAll(targetSelector);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const topic = button.dataset.filter;
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        const values = (card.dataset.topic || "").split("|");
        const show = topic === "all" || values.includes(topic);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
});
