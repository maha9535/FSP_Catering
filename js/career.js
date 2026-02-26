(function () {
    // Initialize EmailJS with Public Key
    emailjs.init("2Wrb88KWV7TCCq4LV");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('careerForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Send "Contact Us" email (or Career specific if available, using provided template for now)
            emailjs.sendForm('service_wafm16d', 'template_vwkkh6t', this)
                .then(() => {
                    // Send "Auto-Reply" email
                    emailjs.sendForm('service_wafm16d', 'template_g2wjzyr', form);

                    alert('Application sent successfully!');
                    window.location.href = 'thank-you.html?type=career';
                }, (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send application. Please try again later.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
