document.addEventListener('DOMContentLoaded', () => {
    // Invite Code Logic
    const inviteForm = document.getElementById('invite-form');
    const inviteInput = document.getElementById('invite-code');
    const errorMessage = document.getElementById('error-message');
    const INVITE_CODE = "KIVIX2025";

    if (inviteForm) {
        inviteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = inviteInput.value.trim().toUpperCase();

            if (code === INVITE_CODE) {
                // Success animation
                inviteInput.style.borderColor = '#00E6FF';
                inviteInput.style.color = '#00E6FF';
                inviteInput.style.boxShadow = '0 0 25px rgba(0, 230, 255, 0.5)';

                setTimeout(() => {
                    window.location.href = 'beta-download.html';
                }, 600);
            } else {
                // Error state
                errorMessage.style.display = 'block';
                errorMessage.textContent = '✗ Invalid invite code. Please try again.';
                inviteInput.classList.add('error');

                // Shake animation
                inviteForm.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    inviteForm.style.animation = 'none';
                }, 500);
            }
        });

        inviteInput.addEventListener('input', () => {
            errorMessage.style.display = 'none';
            inviteInput.classList.remove('error');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for Fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Add parallax effect to hero background
    const heroBgOrb = document.querySelector('.hero-bg-orb');
    if (heroBgOrb) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBgOrb.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }
});

// Add shake animation keyframes dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
    20%, 40%, 60%, 80% { transform: translateX(8px); }
}
`;
document.head.appendChild(styleSheet);
