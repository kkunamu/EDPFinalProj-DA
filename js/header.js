// Get the current page's file name from the path (just the last part)
const currentPage = window.location.pathname.split("/").pop(); // Gets the file name

// Select all the nav links (including dropdown items)
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each link and add the "selected" class if it matches the current page
navLinks.forEach(link => {
  const linkHref = link.getAttribute("href").split("/").pop(); // Get the file name part of the href
  if (linkHref === currentPage) {
    link.classList.add("selected");
  }
});
