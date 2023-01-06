const html = document.getElementsByTagName('html')[0];
const showBtn = document.querySelector('nav .show-menu-btn');
const closeBtn = document.querySelector('nav .close-menu-btn');
const navMenu = document.querySelector('nav .nav-menu');
const navLinks = document.querySelectorAll('nav .nav-menu li');

// Function to show the menu, when click to the button the menu is open
function showMenu() {
  navMenu.classList.add('open');
  navMenu.classList.remove('hide');
  setTimeout(() => {
    closeBtn.style.display = 'block';
  }, 1000);
  html.style.overflow = 'hidden';
}

// Function to close the menu, When click to the cross button the menu closed
function closeMenu() {
  navMenu.classList.remove('open');
  navMenu.classList.add('hide');
  setTimeout(() => {
    closeBtn.style.display = 'none';
  }, 500);
  html.style.overflow = 'auto';
}

// Function to direct user to the right path when click to any link in the menu.
function directMenu() {
  navMenu.classList.remove('open');
  closeBtn.style.display = 'none';
  html.style.overflow = 'auto';
}

// When click to any link in the menu you are direct you to the right section.
navLinks.forEach((link) => {
  link.addEventListener('click', directMenu);
});

// When click to the show menu button the menu appear and when user click to the close button the menu disappear.
showBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
