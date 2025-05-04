document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Show the modal
    function showModal() {
        modal.style.display = 'block';
    }

    // Hide the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Export the showModal function
    window.showModal = showModal;
});