// Image Lightbox Popup Functionality

function openImagePopup(imageSrc, caption) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeImagePopup() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox on ESC key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImagePopup();
    }
});

// Add cursor pointer to glimpse images
document.addEventListener('DOMContentLoaded', function() {
    const glimpseImages = document.querySelectorAll('.module-glimpse-image');
    glimpseImages.forEach(function(image) {
        image.style.cursor = 'pointer';
    });
});
