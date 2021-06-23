(() => {
const refs = {
openHamburger: document.querySelector('[data-hamburger-open]'),
closeHamburger: document.querySelector('[data-hamburger-close]'),
hamburger: document.querySelector('[data-hamburger]'),
};

refs.openHamburger.addEventListener('click', toggleModal);
refs.closeHamburger.addEventListener('click', toggleModal);

function toggleModal() {
refs.hamburger.classList.toggle('is-hidden');
}
})();
