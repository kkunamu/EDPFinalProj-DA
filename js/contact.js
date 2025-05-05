document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Trim inputs to avoid spaces being counted as valid
    const fullName = document.getElementById('full-name').value.trim();
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

    showModal(); // Show confirmation modal
    this.reset(); // Reset form after showing modal
});

// Function to show the modal
function showModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('hidden');
}

// Close modal when "Ok" button is clicked
document.getElementById('close-modal').addEventListener('click', function () {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('hidden');
});

// Optional: Close modal when Escape key is pressed
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('contact-modal');
        modal.classList.add('hidden');
    }
});
