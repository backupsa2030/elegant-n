document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Progress Bar
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // Parallax Hero Video
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroVideo.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }, { passive: true });
    }

    // Hero Staggered Reveal on Load
    const heroRevealElements = document.querySelectorAll('.hero-reveal');
    setTimeout(() => {
        heroRevealElements.forEach(el => el.classList.add('active'));
    }, 300);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');

            // Hamburger animation
            const lines = hamburger.querySelectorAll('div');
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                hamburger.click();
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Trigger once on load
    revealOnScroll();

    // Language Toggle
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const isArabic = document.body.classList.contains('lang-ar');
            if (isArabic) {
                document.body.classList.remove('lang-ar');
                document.body.classList.add('lang-en');
                langToggleBtn.textContent = 'عربي';
                document.documentElement.lang = 'en';
                document.title = 'Elegant-n | Bespoke Ladies Tailoring in Saudi Arabia';
            } else {
                document.body.classList.remove('lang-en');
                document.body.classList.add('lang-ar');
                langToggleBtn.textContent = 'English';
                document.documentElement.lang = 'ar';
                document.title = 'الخياطة الأنيقة | خياطة نسائية مخصصة في السعودية';
            }
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Magnetic Cursor Effect on Buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const inner = el.querySelector('.magnetic-inner') || el;
            inner.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            const inner = el.querySelector('.magnetic-inner') || el;
            inner.style.transform = 'translate(0, 0)';
        });
    });

    // Animated Section Dividers
    const dividers = document.querySelectorAll('.section-divider');
    const animateDividers = () => {
        dividers.forEach(div => {
            const rect = div.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                div.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', animateDividers);
    animateDividers();

    // Set default language on load
    document.body.classList.add('lang-en');
});

