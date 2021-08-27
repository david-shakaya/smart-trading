const refs = {
  menuList: document.querySelector('.header-mobile__nav-list'),
};

function toggleHeaderMenu() {
  refs.menuList.addEventListener('click', openSubmeny);
  function openSubmeny(e) {
    const menuLink = e.target.classList[0];
    const submenuList = e.target.nextElementSibling;

    if (menuLink === 'header-mobile__link') {
      submenuList.classList.toggle('submenu-mobile__list--active');
    }
  }
}
toggleHeaderMenu();
