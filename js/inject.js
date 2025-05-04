document.addEventListener("DOMContentLoaded", () => {
    loadHTML('header.html', 'header-container');
    loadHTML('footer.html', 'footer-container');
});

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            if (elementId === 'header-container') {
                setSelectedState(); // this is now where we also handle toggle logic
            }
        })
        .catch(error => {
            console.error("Error loading the HTML file:", error);
        });
}

function setSelectedState() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();
        if (linkHref === currentPage) {
            link.classList.add("selected");

            if (linkHref === "services.html" || linkHref === "projects.html") {
                const mainServicesLink = document.querySelector('.navbar .nav-link[href="#"]');
                if (mainServicesLink) {
                    mainServicesLink.classList.add("selected");
                }
            }
        }
    });

    const toggleBtn = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navbar ul');

    if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }
}
