document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const welcome = document.getElementById('welcome');
    const toLoginBtn = document.getElementById('toLoginBtn');
    const slideArrow = document.getElementById('slideArrow');
    const backToWelcomeBtn = document.getElementById('backToWelcome');
    const loginForm = document.getElementById('loginForm');

    // Show login/create area and hide welcome page
    toLoginBtn.addEventListener('click', () => {
        welcome.classList.add('hide');
    });

    // Toggle between login and create account panels
    slideArrow.addEventListener('click', () => {
        container.classList.toggle('show-create');
    });

    // Go back to the welcome screen
    backToWelcomeBtn.addEventListener('click', () => {
        welcome.classList.remove('hide');
        container.classList.remove('show-create');
    });

    // Handle the login form submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Simulate a successful login and redirect
        // For a real application, you would validate user credentials here
        // and then redirect on success.
        window.location.href = 'dashboard.html';
    });
});