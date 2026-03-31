// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('demoRequestForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Here you would typically send the data to your backend
            // For now, we'll just show the thank you message
            console.log('Form submitted with data:', Object.fromEntries(formData));
            
            // Hide form and show thank you message
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
            
            // Scroll to thank you message
            thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});

// Reset form function
function resetForm() {
    const form = document.getElementById('demoRequestForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    if (form && thankYouMessage) {
        // Reset form fields
        form.reset();
        
        // Show form and hide thank you message
        form.style.display = 'block';
        thankYouMessage.style.display = 'none';
        
        // Scroll to form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



