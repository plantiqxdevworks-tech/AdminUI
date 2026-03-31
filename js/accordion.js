// FAQ Accordion Functionality
class Accordion {
    constructor(accordionElement) {
        this.accordion = accordionElement;
        this.items = this.accordion.querySelectorAll('.accordion-item');
        
        this.init();
    }
    
    init() {
        this.items.forEach((item, index) => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            header.addEventListener('click', () => {
                this.toggleItem(item, content);
            });
        });
    }
    
    toggleItem(item, content) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.items.forEach(i => {
            i.classList.remove('active');
            const c = i.querySelector('.accordion-content');
            c.style.maxHeight = null;
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }
}

// Initialize accordion when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const faqAccordion = document.querySelector('.faq-accordion');
    if (faqAccordion) {
        new Accordion(faqAccordion);
    }
});
