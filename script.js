document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (!name) {
            alert('Name is required.');
            return;
        }
        
        if (!email || !validateEmail(email)) {
            alert('A valid email is required.');
            return;
        }

        // Form is valid, proceed with form submission (for example, AJAX request)
        alert('Form submitted successfully.');
        form.reset(); // Reset the form fields
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Interactive Menu
    const nav = document.getElementById('main-nav');
    const navLinks = nav.querySelectorAll('li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Dynamic Content Update
    const dynamicContentBtn = document.getElementById('change-content-btn');
    const dynamicContent = document.getElementById('dynamic-content');

    dynamicContentBtn.addEventListener('click', () => {
        dynamicContent.textContent = 'The content has changed!';
    });
});
