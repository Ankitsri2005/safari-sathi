const container = document.getElementById('container');
const welcome = document.getElementById('welcome');
const toLoginBtn = document.getElementById('toLoginBtn');
const slideArrow = document.getElementById('slideArrow');
const backToWelcomeBtn = document.getElementById('backToWelcome');

// Show login/create area and hide welcome
toLoginBtn.addEventListener('click', () => {
  welcome.classList.add('hide');
});

// Toggle between login and create account
slideArrow.addEventListener('click', () => {
  container.classList.toggle('show-create');
});

// Back to welcome
backToWelcomeBtn.addEventListener('click', () => {
  welcome.classList.remove('hide');
  container.classList.remove('show-create');
});

// Redirect to dashboard on login submit
const loginForm = document.querySelector('.panel.left form');
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'v.html#dashboard-section';
  });
}