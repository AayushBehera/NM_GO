/* ============================================================================
   NMGO - Nuclear Micro-Grid Optimizer
   Integrated DevOps Premium JavaScript
   ============================================================================ */

// ============================================================================
// 1. INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeFormHandling();
    initializeNavbarScroll();
});

// ============================================================================
// 2. THEME TOGGLE (DARK / LIGHT MODE)
// ============================================================================

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('light');
    
    // Save preference
    const isDark = !body.classList.contains('light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button text
    if (themeToggle) {
        if (isDark) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    }
}

// ============================================================================
// 3. MOBILE MENU HANDLING
// ============================================================================

function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================================================
// 4. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================================================

function initializeScrollAnimations() {
    const elements = document.querySelectorAll('.observe');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// ============================================================================
// 5. NAVBAR SCROLL EFFECT
// ============================================================================

function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollY = scrollY;
    });
}

// ============================================================================
// 6. FORM HANDLING
// ============================================================================

function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                company: this.querySelectorAll('input[type="text"]')[1].value,
                phone: this.querySelector('input[type="tel"]').value || 'Not provided',
                message: this.querySelector('textarea').value
            };
            
            // Validation
            if (!formData.name || !formData.email || !formData.company || !formData.message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            if (!validateEmail(formData.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Log data (in production, send to server)
            console.log('Form Submitted:', formData);
            
            // Show success
            showNotification('Thank you! We will contact you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background-color: ${type === 'success' ? '#22c55e' : '#ef4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 2000;
        animation: slideIn 0.4s ease;
        font-weight: 600;
        max-width: 400px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}

// ============================================================================
// 7. SMOOTH SCROLL BEHAVIOR
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================================================
// 8. ACTIVE NAVIGATION LINK
// ============================================================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#38bdf8';
        }
    });
});

// ============================================================================
// 9. DEBOUNCE UTILITY
// ============================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================================================
// 10. KEYBOARD NAVIGATION
// ============================================================================

document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// ============================================================================
// 11. ANIMATIONS KEYFRAMES (via CSS)
// ============================================================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ============================================================================
// 12. PERFORMANCE OPTIMIZATION
// ============================================================================

const throttledScroll = debounce(function() {
    // Scroll events optimized
}, 100);

window.addEventListener('scroll', throttledScroll);

// ============================================================================
// 13. UTILITY FUNCTIONS
// ============================================================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ============================================================================
// 14. LAZY LOADING SUPPORT
// ============================================================================

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================================================
// 15. EXPORT FUNCTIONS FOR GLOBAL USE
// ============================================================================

window.NMGO = {
    toggleTheme: toggleTheme,
    showNotification: showNotification,
    formatCurrency: formatCurrency,
    formatNumber: formatNumber
};

console.log('NMGO DevOps Integration loaded successfully ✓');

// ============================================================================
// End of JavaScript
// ============================================================================
