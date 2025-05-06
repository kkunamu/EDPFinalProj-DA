document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("contact-modal");
    const closeModalBtn = document.getElementById("close-modal");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Trim inputs to avoid spaces being counted as valid
        const fullName = document.getElementById('fullname').value.trim();
        const occupation = document.getElementById('occupation').value.trim();
        const company = document.getElementById('company').value.trim();
        const contactNumber = document.getElementById('contact-number').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation    
        if (!fullName || !occupation || !company || !contactNumber || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        modal.classList.remove("hidden"); // Show modal
        form.reset(); // Reset form after showing modal
    });

    closeModalBtn.addEventListener("click", function() {
        modal.classList.add("hidden");
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // Close modal when Escape key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.classList.add('hidden');
        }
    });
});
