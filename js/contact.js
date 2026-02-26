(function () {
    // Initialize EmailJS with Public Key
    emailjs.init("2Wrb88KWV7TCCq4LV");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.submit-btn-maroon');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Send "Contact Us" email
            emailjs.sendForm('service_wafm16d', 'template_vwkkh6t', this)
                .then(() => {
                    // Send "Auto-Reply" email
                    emailjs.sendForm('service_wafm16d', 'template_g2wjzyr', form);

                    alert('Message Sent Successfully!');
                    window.location.href = 'thank-you.html?type=contact';
                }, (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send message. Please try again later.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
