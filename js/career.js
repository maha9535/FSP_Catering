(function () {
    // Initialize EmailJS with your Public Key
    // Replace 'YOUR_PUBLIC_KEY' with your actual key from EmailJS dashboard
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById('careerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_CAREER_TEMPLATE_ID', this)
        .then(() => {
            alert('Application sent successfully!');
            window.location.href = 'thank-you.html';
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send application. Please try again later.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});
