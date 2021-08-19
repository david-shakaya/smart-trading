const refs = {
  menuList: document.querySelector('.menu-mobile__list'),
};

function toggleHeaderMenu() {
  refs.menuList.addEventListener('click', openSubmeny);
  function openSubmeny(e) {
    const menuLink = e.target.classList[0];
    const submenuList = e.target.nextElementSibling;

    if (menuLink === 'menu-mobile__link') {
      submenuList.classList.toggle('submenu-mobile__list--active');
    }
  }
}
