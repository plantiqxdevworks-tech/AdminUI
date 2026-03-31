// Hero Slider Functionality
class HeroSlider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.slides.length > 0) {
            this.showSlide(0);
            this.startAutoSlide();
            this.setupControls();
            this.setupIndicators();
        }
    }
    
    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            const indicators = slide.querySelectorAll('.indicator');
            indicators.forEach((ind, indIndex) => {
                ind.classList.remove('active');
                if (indIndex === index) {
                    ind.classList.add('active');
                }
            });
            
            if (i === index) {
                slide.classList.add('active');
            }
        });
        this.currentSlide = index;
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }
    
    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
    
    setupControls() {
        this.slides.forEach(slide => {
            const prevBtn = slide.querySelector('.slider-prev');
            const nextBtn = slide.querySelector('.slider-next');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    this.stopAutoSlide();
                    this.prevSlide();
                    this.startAutoSlide();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    this.stopAutoSlide();
                    this.nextSlide();
                    this.startAutoSlide();
                });
            }
        });
    }
    
    setupIndicators() {
        this.slides.forEach(slide => {
            const indicators = slide.querySelectorAll('.indicator');
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    this.stopAutoSlide();
                    this.showSlide(index);
                    this.startAutoSlide();
                });
            });
        });
    }
}

// Products/Services Slider
class ProductsSlider {
    constructor() {
        this.sliders = document.querySelectorAll('.products-slider');
        this.prevBtn = document.querySelector('.products-nav-btn.prev');
        this.nextBtn = document.querySelector('.products-nav-btn.next');
        this.indicators = document.querySelectorAll('.product-indicator');
        this.currentPage = 0;
        
        this.init();
    }
    
    init() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevPage();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextPage();
            });
        }
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToPage(index);
            });
        });
        
        this.showPage(0);
    }
    
    showPage(index) {
        this.sliders.forEach((slider, i) => {
            slider.classList.remove('active');
            if (i === index) {
                slider.classList.add('active');
            }
        });
        this.currentPage = index;
        this.updateIndicators();
    }
    
    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentPage);
        });
    }
    
    nextPage() {
        const nextIndex = (this.currentPage + 1) % this.sliders.length;
        this.showPage(nextIndex);
    }
    
    prevPage() {
        const prevIndex = (this.currentPage - 1 + this.sliders.length) % this.sliders.length;
        this.showPage(prevIndex);
    }
    
    goToPage(page) {
        this.showPage(page);
    }
}

// Initialize sliders when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        new HeroSlider(heroSlider);
    }
    
    const productsSliderContainer = document.querySelector('.products-slider-container');
    if (productsSliderContainer) {
        new ProductsSlider();
    }
});
