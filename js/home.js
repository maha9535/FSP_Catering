/* GOKULA CATERING - NAV & GREETINGS */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // GREETINGS LOGIC
    const greetingEl = document.getElementById('greeting');

    // Initialize Swiper
    const swiper = new Swiper('.workflow-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Initialize Standards Word Slider
    const standardsSwiper = new Swiper('.standards-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.standards-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });

    const greetings = ['Vanakkam', 'Hello', 'Namaste'];
    let index = 0;

    greetingEl.style.transition = 'all 0.5s ease-in-out';

    function rotateGreetings() {
        // Fade out
        greetingEl.style.opacity = '0';
        greetingEl.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            index = (index + 1) % greetings.length;
            greetingEl.textContent = greetings[index];

            // Fade in
            greetingEl.style.opacity = '1';
            greetingEl.style.transform = 'translateY(0)';
        }, 500);
    }

    setInterval(rotateGreetings, 3000);

    // Reviews Swiper Initialization
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.review-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.review-next',
            prevEl: '.review-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
});
