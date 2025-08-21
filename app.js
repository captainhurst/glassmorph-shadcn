// Glassmorphism UI - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initCodeToggle();
    initTabSwitching();
    initCopyButtons();
    initScrollToSection();
    initThemeToggle();
    initToast();
});

// Code Toggle Functionality
function initCodeToggle() {
    const toggleButtons = document.querySelectorAll('.code-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const codeBlock = document.getElementById(targetId);
            
            if (codeBlock) {
                if (codeBlock.classList.contains('hidden')) {
                    codeBlock.classList.remove('hidden');
                    this.style.backgroundColor = 'var(--glass-bg-hover)';
                } else {
                    codeBlock.classList.add('hidden');
                    this.style.backgroundColor = 'var(--glass-bg)';
                }
            }
        });
    });
}

// Tab Switching Functionality
function initTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Copy to Clipboard Functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn, .copy-code, .copy-code-large');
    
    // Define code snippets
    const codeSnippets = {
        'npx shadcn-ui@latest init': 'npx shadcn-ui@latest init',
        'pnpm dlx shadcn@latest add https://glassmorph-ui.dev/r/button.json': 'pnpm dlx shadcn@latest add https://glassmorph-ui.dev/r/button.json',
        'pnpm dlx shadcn@latest add https://glassmorph-ui.dev/r/card.json': 'pnpm dlx shadcn@latest add https://glassmorph-ui.dev/r/card.json',
        'buttons': `export function Button({ variant = 'glass', children, ...props }) {
  const variants = {
    glass: 'glass-card glass-hover text-white border-glass',
    outline: 'glass-outline glass-hover text-white border-glass-strong',
    ghost: 'glass-ghost glass-hover text-white'
  };
  return (
    <button className={\`px-6 py-3 rounded-xl font-medium transition-all duration-300 \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
}`,
        'cards': `export function Card({ variant = 'default', children, className = '' }) {
  const variants = {
    default: 'glass-card border-glass',
    elevated: 'glass-card-elevated border-glass shadow-glass-lg',
    subtle: 'glass-subtle border-glass-subtle'
  };
  return (
    <div className={\`p-6 rounded-2xl backdrop-blur-xl \${variants[variant]} \${className}\`}>
      {children}
    </div>
  );
}`,
        'forms': `export function Input({ variant = 'glass', ...props }) {
  return (
    <input 
      className="glass-input w-full px-4 py-3 rounded-xl backdrop-blur-md border-glass text-white placeholder-glass-text focus:border-glass-focus focus:ring-2 focus:ring-glass-ring transition-all duration-300"
      {...props}
    />
  );
}`,
        'plugin': `const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      addComponents({
        '.glass-card': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        },
        '.glass-hover': {
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.15)',
            'transform': 'translateY(-2px)',
            'box-shadow': '0 12px 40px 0 rgba(0, 0, 0, 0.4)'
          }
        },
        '.glass-input': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'color': 'white'
        },
        '.glass-outline': {
          'background': 'transparent',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '2px solid rgba(255, 255, 255, 0.3)'
        },
        '.glass-ghost': {
          'background': 'transparent',
          'border': 'none'
        }
      });
    })
  ]
};`,
        'variables': `:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-bg-hover: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --glass-blur: blur(16px);
  --glass-text: rgba(255, 255, 255, 0.7);
  --glass-ring: rgba(255, 255, 255, 0.3);
  --glass-focus: rgba(255, 255, 255, 0.4);
}`,
        'usage': `// Basic usage
<div className="glass-card p-6 rounded-xl">
  <h3>Glass Card</h3>
  <p>Beautiful glassmorphic styling</p>
</div>

// Interactive elements
<button className="glass-card glass-hover px-6 py-3 rounded-xl">
  Glass Button
</button>

// Form elements
<input className="glass-input w-full px-4 py-3 rounded-xl" />

// Outline variant
<button className="glass-outline px-6 py-3 rounded-xl">
  Outline Button
</button>

// Ghost variant
<button className="glass-ghost px-6 py-3 rounded-xl">
  Ghost Button
</button>`,
        'tailwind-plugin': `// Add this to your tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      addComponents({
        '.glass-card': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        },
        '.glass-hover': {
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.15)',
            'transform': 'translateY(-2px)',
            'box-shadow': '0 12px 40px 0 rgba(0, 0, 0, 0.4)'
          }
        }
      });
    })
  ],
}`
    };
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            let textToCopy = '';
            const copyAttr = this.getAttribute('data-copy');
            const codeAttr = this.getAttribute('data-code');
            
            // Get text from data attributes
            if (copyAttr && codeSnippets[copyAttr]) {
                textToCopy = codeSnippets[copyAttr];
            } else if (codeAttr && codeSnippets[codeAttr]) {
                textToCopy = codeSnippets[codeAttr];
            } else {
                // Fallback: get text from parent code block
                const codeBlock = this.closest('.code-block, .demo-code, .plugin-showcase');
                if (codeBlock) {
                    const codeElement = codeBlock.querySelector('code');
                    if (codeElement) {
                        textToCopy = codeElement.textContent;
                    }
                }
            }
            
            if (textToCopy) {
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    showToast('Code copied to clipboard!');
                    
                    // Visual feedback
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.backgroundColor = 'var(--glass-bg)';
                    }, 1000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                    showToast('Failed to copy code', 'error');
                }
            }
        });
    });
}

// Smooth Scroll to Section
function initScrollToSection() {
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.querySelector('.glass-nav').offsetHeight;
            const targetPosition = section.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
}

// Theme Toggle (Basic implementation for glassmorphic variants)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    let currentTheme = 'default';
    
    const themes = {
        default: {
            '--glass-bg': 'rgba(255, 255, 255, 0.1)',
            '--glass-bg-hover': 'rgba(255, 255, 255, 0.15)',
            '--glass-border': 'rgba(255, 255, 255, 0.2)'
        },
        warm: {
            '--glass-bg': 'rgba(255, 200, 150, 0.1)',
            '--glass-bg-hover': 'rgba(255, 200, 150, 0.15)',
            '--glass-border': 'rgba(255, 200, 150, 0.2)'
        },
        cool: {
            '--glass-bg': 'rgba(150, 200, 255, 0.1)',
            '--glass-bg-hover': 'rgba(150, 200, 255, 0.15)',
            '--glass-border': 'rgba(150, 200, 255, 0.2)'
        }
    };
    
    const themeOrder = ['default', 'warm', 'cool'];
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentIndex = themeOrder.indexOf(currentTheme);
            const nextIndex = (currentIndex + 1) % themeOrder.length;
            currentTheme = themeOrder[nextIndex];
            
            const theme = themes[currentTheme];
            const root = document.documentElement;
            
            Object.entries(theme).forEach(([property, value]) => {
                root.style.setProperty(property, value);
            });
            
            // Update icon based on theme
            const icons = { default: '🌓', warm: '🔥', cool: '❄️' };
            this.querySelector('.theme-icon').textContent = icons[currentTheme];
            
            showToast(`Theme changed to ${currentTheme}`);
        });
    }
}

// Toast Notification System
let toastTimeout;

function initToast() {
    // Create toast if it doesn't exist
    let toast = document.getElementById('copyToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'copyToast';
        toast.className = 'toast glass-card';
        toast.innerHTML = `
            <span class="toast-icon">✅</span>
            <span class="toast-text">Success!</span>
        `;
        document.body.appendChild(toast);
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('copyToast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastText = toast.querySelector('.toast-text');
    
    // Set icon and message based on type
    if (type === 'success') {
        toastIcon.textContent = '✅';
        toastText.textContent = message;
    } else if (type === 'error') {
        toastIcon.textContent = '❌';
        toastText.textContent = message;
    }
    
    // Clear any existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Enhanced Interaction Effects
function addInteractionEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .btn-glass-primary, .btn-glass-outline, .btn-glass-ghost');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            // Add ripple animation keyframes if not exists
            if (!document.querySelector('#ripple-animation')) {
                const style = document.createElement('style');
                style.id = 'ripple-animation';
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Parallax Effect for Background Elements
function initParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const background = document.querySelector('.animated-background');
        if (background) {
            background.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animatedElements = document.querySelectorAll('.feature-card, .component-demo, .step-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Enhanced Navigation
function initEnhancedNavigation() {
    const nav = document.querySelector('.glass-nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.backgroundColor = 'var(--glass-bg)';
            nav.style.backdropFilter = 'var(--glass-blur)';
        }
        
        // Hide/show nav on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize all enhanced features after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addInteractionEffects();
        initParallaxEffect();
        initScrollAnimations();
        initEnhancedNavigation();
    }, 100);
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // ESC key to close any open code blocks
    if (e.key === 'Escape') {
        const openCodeBlocks = document.querySelectorAll('.demo-code:not(.hidden)');
        openCodeBlocks.forEach(block => {
            block.classList.add('hidden');
        });
        
        // Reset toggle buttons
        const toggleButtons = document.querySelectorAll('.code-toggle');
        toggleButtons.forEach(button => {
            button.style.backgroundColor = 'var(--glass-bg)';
        });
    }
    
    // Ctrl/Cmd + K for search-like functionality (focus first input)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const firstInput = document.querySelector('.glass-input');
        if (firstInput) {
            firstInput.focus();
        }
    }
});

// Performance monitoring and optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimer;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 10);
    };
    
    // Lazy load heavy animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        // Disable or reduce animations for users who prefer less motion
        document.documentElement.style.setProperty('--duration-fast', '0ms');
        document.documentElement.style.setProperty('--duration-normal', '0ms');
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Export functions for external use if needed
window.GlassmorphismUI = {
    showToast,
    scrollToSection,
    initCodeToggle,
    initTabSwitching,
    initCopyButtons
};