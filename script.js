document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const welcome = document.getElementById('welcome');
    const toLoginBtn = document.getElementById('toLoginBtn');
    const slideArrow = document.getElementById('slideArrow');
    const backToWelcomeBtn = document.getElementById('backToWelcome');
    const loginForm = document.getElementById('loginForm');

    toLoginBtn.addEventListener('click', () => {
        welcome.classList.add('hide');
    });

    slideArrow.addEventListener('click', () => {
        container.classList.toggle('show-create');
    });

    backToWelcomeBtn.addEventListener('click', () => {
        welcome.classList.remove('hide');
        container.classList.remove('show-create');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        window.location.href = 'dashboard.html';
    });
});