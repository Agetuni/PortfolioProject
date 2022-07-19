function OpenMobileMenu() {
    const mobileMenu = document.querySelector('#modile_nav');
    mobileMenu.classList.remove('show_hide');
  }
  function CloseMobileMenu() {
    const mobileMenu = document.querySelector('#modile_nav');
    mobileMenu.classList.add('show_hide');
  }
  document.addEventListener('DOMContentLoaded', () => {
    const openMenuElement = document.querySelector('#open_mobile_humberger');
    const closeMenuElement = document.querySelector('#close_mobile_humberger');
    const menuItems = document.querySelectorAll('.mobile_nav_items');
    const others = document.querySelector('.mobile_nav');
  
    others.addEventListener('click', CloseMobileMenu);
    openMenuElement.addEventListener('click', OpenMobileMenu);
    closeMenuElement.addEventListener('click', CloseMobileMenu);
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', CloseMobileMenu);
    });
  });
