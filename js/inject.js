// Function to load HTML from a file into a div
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // Once header is injected, run the JavaScript for selected state
            if (elementId === 'header-container') {
                setSelectedState();
            }
        })
        .catch(error => {
            console.error("Error loading the HTML file:", error);
        });
}

// Load the header and footer into the page
loadHTML('header.html', 'header-container');
loadHTML('footer.html', 'footer-container');

// Function to set selected state for navigation links
function setSelectedState() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the file name
    const navLinks = document.querySelectorAll(".nav-link");

    // Loop through each nav link and add the 'selected' class if it matches the current page
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop(); // Get the file name part of the href
        if (linkHref === currentPage) {
            link.classList.add("selected");

            // Check if the link is a dropdown item (either Services or Projects) and update the main navbar link
            if (link.getAttribute("href") === "services.html" || link.getAttribute("href") === "projects.html") {
                // Select the 'Services' link in the main navbar (only if it's the Services or Projects page)
                const mainServicesLink = document.querySelector('.navbar .nav-link[href="#"]');
                if (mainServicesLink) {
                    mainServicesLink.classList.add("selected");
                }
            }
        }
    });
}
