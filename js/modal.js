(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector(".modal__close"),
    modal: document.querySelector("[data-modal]"),
    menuIcon: document.querySelector(".Hero__menu-icon"),
    menu: document.querySelector(".Hero__menu")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.menuIcon.addEventListener("click", toggleMenu);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openMenuBtn: document.querySelector(".Hero__menu-icon"),
    menu: document.querySelector(".Hero__menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();
