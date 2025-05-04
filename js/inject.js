document.addEventListener("DOMContentLoaded", function () {
  function loadHTML(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;

        if (elementId === 'header-container') {
          setSelectedState();
          initMobileMenuToggle();
        }
      })
      .catch(error => console.error(`Error loading ${file}:`, error));
  }

  loadHTML('header.html', 'header-container');
  loadHTML('footer.html', 'footer-container');

  function setSelectedState() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href").split("/").pop();
      if (linkHref === currentPage) {
        link.classList.add("selected");
      }
    });
  }

  function initMobileMenuToggle() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navbar ul');

    if (toggleBtn && navList) {
      toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
    }
  }

  const loaderWrap = document.createElement("div");
  document.body.prepend(loaderWrap);

  fetch("loader.html")
    .then((res) => res.text())
    .then((html) => {
      loaderWrap.innerHTML = html;  

      const loadingOverlay = document.getElementById('loader-container');
      loadingOverlay.style.display = 'flex';
      loadingOverlay.style.opacity = '1';

      setTimeout(function () {
        loadingOverlay.style.opacity = '0';
        setTimeout(function () {
          loadingOverlay.style.display = 'none';
        }, 1000);
      }, 2400);
    })
    .catch((err) => console.error("Failed to load loader.html:", err));
});
