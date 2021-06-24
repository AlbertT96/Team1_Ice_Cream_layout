(() => {
  const refs = {
    openModalBtn: document.querySelector('[menu-modal-open]'),
    closeModalBtn: document.querySelector('[menu-modal-close]'),
    modal: document.querySelector('[menu-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();