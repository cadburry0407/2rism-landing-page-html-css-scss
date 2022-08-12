const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
}; // grab elements from dom

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

const scrollHeader = () => {
  const navbarElement = selectElement('#header');
  if (this.scrollY >= 15) {
    navbarElement.classList.add('activated');
  } else {
    navbarElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);
