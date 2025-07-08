// Navbar Toggle for Mobile View
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.navbar-container input[type="checkbox"]');
    const lines = document.querySelectorAll('.hamburger-lines .line');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            lines[0].style.transform = 'rotate(45deg)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg)';
        } else {
            lines[0].style.transform = 'rotate(0)';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'rotate(0)';
        }
    });
});

// Smooth Scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Scroll To Top Button (Optional Enhancement)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑';
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #f05e8a;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 18px;
    display: none;
    z-index: 999;
    cursor: pointer;
    transition: opacity 0.3s;
`;
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Simple Form Validation
const form = document.querySelector('.form-details');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert('Please fill in all fields.');
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}
