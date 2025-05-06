document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-titles button");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");

        tabs.forEach((btn) => btn.classList.remove("active"));
        tab.classList.add("active");

        panels.forEach((panel) => {
          panel.classList.toggle("active", panel.id === target);
        });
      });
    });
  });