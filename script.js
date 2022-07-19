const modalhtml =
  '<div class="modal">\
<div class="modal-content">\
    <header class="modal-header">\
        <span class="modal-title"></span>\
        <button data-close-button class="modal-close">&times;</button>\
    </header>\
    <div class="modal-body">\
        <div class="modal-body-img">\
        <img src="Images/snap.png" alt="">\
        </div>\
        <p class="modal-body-detail"></p>\
        <ul class="modal-body-technologies">\
        </ul>\
        <div class="modal-body-actions">\
            <button>\
                <span>See live</span>\
                <img src="Images/icons/seelive.png" alt="see project live">\
            </button>\
            <button>\
                <span>See Source</span>\
                <img src="Images/icons/seesource.png" alt="see project source code">\
            </button>\
            </div></div></div>\
</div>';

function OpenMobileMenu() {
  const mobileMenu = document.querySelector("#modile_nav");
  const main = document.querySelector("main");
  mobileMenu.classList.remove("show_hide");
  main.classList.add("hidden");
}
function CloseMobileMenu() {
  const mobileMenu = document.querySelector("#modile_nav");
  mobileMenu.classList.add("show_hide");
  const main = document.querySelector("main");
  main.classList.remove("hidden");
}
document.addEventListener("DOMContentLoaded", () => {
  const openMenuElement = document.querySelector("#open_mobile_humberger");
  const closeMenuElement = document.querySelector("#close_mobile_humberger");
  const menuItems = document.querySelectorAll(".mobile_nav_items");
  const others = document.querySelector(".mobile_nav");

  others.addEventListener("click", CloseMobileMenu);
  openMenuElement.addEventListener("click", OpenMobileMenu);
  closeMenuElement.addEventListener("click", CloseMobileMenu);
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", CloseMobileMenu);
  });
});
