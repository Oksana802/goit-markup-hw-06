(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    mobMenu: document.querySelector('.mob-menu'),

    openModalBtn: document.querySelector('[modal-open-btn]'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modalBackdrop: document.querySelector('.backdrop'),
  };

  refs.openMenuBtn.addEventListener('click', () => {
    refs.mobMenu.classList.add('is-open');
  });

  refs.closeMenuBtn.addEventListener('click', () => {
    refs.mobMenu.classList.remove('is-open');
  });

  refs.openModalBtn.addEventListener('click', () => {
    refs.modalBackdrop.classList.add('is-open');
  });

  refs.closeModalBtn.addEventListener('click', () => {
    refs.modalBackdrop.classList.remove('is-open');
  });

  refs.modalBackdrop.addEventListener('click', event => {
    if (event.target === refs.modalBackdrop) {
      refs.modalBackdrop.classList.remove('is-open');
    }
  });
})();
