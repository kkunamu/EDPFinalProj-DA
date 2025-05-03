document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('full-name').value;
    const occupation = document.getElementById('occupation').value;
    const company = document.getElementById('company').value;
    const contactNumber = document.getElementById('contact-number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!fullName || !occupation || !company || !contactNumber || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset(); // Reset the form
});