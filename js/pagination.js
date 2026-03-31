// Pagination functionality
document.addEventListener('DOMContentLoaded', function() {
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const prevBtn = document.querySelector('.pagination-prev');
    const nextBtn = document.querySelector('.pagination-next');
    
    if (!paginationNumbers.length) return;
    
    let currentPage = 1;
    const totalPages = 10;
    
    // Handle page number clicks
    paginationNumbers.forEach(button => {
        button.addEventListener('click', function() {
            const pageNum = parseInt(this.textContent);
            if (!isNaN(pageNum)) {
                setActivePage(pageNum);
            }
        });
    });
    
    // Handle previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                setActivePage(currentPage - 1);
            }
        });
    }
    
    // Handle next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentPage < totalPages) {
                setActivePage(currentPage + 1);
            }
        });
    }
    
    function setActivePage(pageNum) {
        currentPage = pageNum;
        
        // Update active state
        paginationNumbers.forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.textContent) === pageNum) {
                btn.classList.add('active');
            }
        });
        
        // Update button states
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
        }
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages;
        }
        
        // Scroll to top of news grid
        const newsGrid = document.querySelector('.news-grid-section');
        if (newsGrid) {
            newsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
