// Product Tabs Functionality

function activateTab(sectionName) {
    const tabs = document.querySelectorAll('.product-tab');
    const sections = document.querySelectorAll('.main-section');

    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    const matchingTab = Array.from(tabs).find(t => t.getAttribute('data-section') === sectionName);
    if (matchingTab) matchingTab.classList.add('active');

    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) targetSection.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.product-tab');
    const sections = document.querySelectorAll('.main-section');

    // Tab click handler
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(this.getAttribute('data-section'));
        });
    });

    // --- Deep-link support ---
    // Read ?tab=automation or ?tab=solutions from the URL
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');

    if (tabParam && ['products', 'automation', 'solutions'].includes(tabParam)) {
        activateTab(tabParam);
    }

    // Scroll to a specific card if hash is present (e.g. #plc, #scada)
    const hash = window.location.hash; // e.g. "#plc"
    if (hash) {
        // Give the DOM a moment to render the active section before scrolling
        setTimeout(function() {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Briefly highlight the target card
                target.classList.add('card-highlight');
                setTimeout(() => target.classList.remove('card-highlight'), 1800);
            }
        }, 120);
    }
});
