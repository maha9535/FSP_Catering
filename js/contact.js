(function () {
    // Initialize EmailJS with your Public Key
    // Replace 'YOUR_PUBLIC_KEY' with your actual key from EmailJS dashboard
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn-maroon');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_CONTACT_TEMPLATE_ID' with your actual IDs
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', this)
        .then(() => {
            alert('Your request has been sent successfully!');
            window.location.href = 'booking-success.html';
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send request. Please try again later.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});
