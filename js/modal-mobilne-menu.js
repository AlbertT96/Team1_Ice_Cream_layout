(() => {
const refs = {
openModalBtn: document.querySelector('[hamburger-open]'),
closeModalBtn: document.querySelector('[hamburger-close]'),
modal: document.querySelector('[hamburger]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
refs.modal.classList.toggle('is-hidden');
}
})();
