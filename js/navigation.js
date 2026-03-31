// Navigation Active State Handler
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header-nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const tabParam   = new URLSearchParams(window.location.search).get('tab');

    // Set active state based on current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkPage = href.split('?')[0]; // strip query string for base comparison

        // Remove active class first
        link.classList.remove('active');

        // Match plain pages (about, contact, career, news, index)
        if (!href.includes('?tab=') && linkPage === currentPage) {
            link.classList.add('active');
        }

        // Match Products (products.html with no tab param, or tab=products)
        if (linkPage === 'products.html' && !href.includes('?tab=') &&
            currentPage === 'products.html' && (!tabParam || tabParam === 'products')) {
            link.classList.add('active');
        }

        // Match Automation toggle
        if (href.includes('?tab=automation') && currentPage === 'products.html' && tabParam === 'automation') {
            link.classList.add('active');
        }

        // Match Solutions toggle
        if (href.includes('?tab=solutions') && currentPage === 'products.html' && tabParam === 'solutions') {
            link.classList.add('active');
        }
    });

    // ---- Mobile: toggle dropdowns on tap ----
    document.querySelectorAll('.piqx-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // On mobile (navbar collapsed), prevent navigation and toggle instead
            const navbarCollapse = document.getElementById('navbarNav');
            const isMobileOpen = navbarCollapse && navbarCollapse.classList.contains('show');

            if (isMobileOpen) {
                e.preventDefault();
                const parent = this.closest('.piqx-dropdown');
                parent.classList.toggle('open');
            }
            // On desktop, allow normal href navigation
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.piqx-dropdown')) {
            document.querySelectorAll('.piqx-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
});

