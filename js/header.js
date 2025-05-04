// Highlight current nav
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  const linkHref = link.getAttribute("href").split("/").pop();
  if (linkHref === currentPage) {
    link.classList.add("selected");
  }
});

// Toggle mobile menu
const toggleBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navbar ul');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});
  