// Load Header and Footer
document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initializeHeaderLogic(); // Initialize header logic after loading
        })
        .catch(error => console.error('Error loading header:', error));
    
    // Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
    
    // Smooth Scrolling
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
});

function initializeHeaderLogic() {
    console.log('Initializing header logic...');
    const form = document.getElementById('demoRequestForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));

            form.style.display = 'none';
            if (thankYouMessage) thankYouMessage.style.display = 'block';
        });
    }

    // Reset automatically when modal closes
    const demoModal = document.getElementById('demoModal');
    if (demoModal) {
        demoModal.addEventListener('hidden.bs.modal', function () {
            resetForm();
        });
    }
}

function resetForm() {
    const form = document.getElementById('demoRequestForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (form) {
        form.reset();
        form.style.display = 'block';
    }
    if (thankYouMessage) {
        thankYouMessage.style.display = 'none';
    }
}
