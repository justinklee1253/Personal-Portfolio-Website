function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//targeting two elements, and when we click the elements, we either add or remove
//the open class
