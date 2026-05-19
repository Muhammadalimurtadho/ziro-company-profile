// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// Counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    el.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    el.textContent = target;
                }
            };
            updateCounter();
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.6 });

statNumbers.forEach(el => counterObserver.observe(el));

// Parallax orb movement (subtle)
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.bg-orb');
    const x = (window.innerWidth / 2 - e.clientX) / 60;
    const y = (window.innerHeight / 2 - e.clientY) / 60;
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.8;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});