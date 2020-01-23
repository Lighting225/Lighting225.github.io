const toggleButton = document.getElementsByClassName('navBar')[0];
const navLinks = document.getElementsByClassName('Nav-links')[0];

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
