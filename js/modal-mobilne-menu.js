(() => {
const refs = {
openHamburger: document.querySelector('[data-hamburger-open]'),
closeHamburger: document.querySelector('[data-hamburger-close]'),
    hamburger: document.querySelector('[data-hamburger]'),
    backdrop: document.querySelector('[data-backdrop]'),
list: document.getElementById("menu"),
list2: document.getElementById("menu2"),
list3: document.getElementById("menu3"),
list4: document.getElementById("menu4"),
list5: document.getElementById("menu5"),
};

refs.openHamburger.addEventListener('click', toggleModal);
    refs.closeHamburger.addEventListener('click', toggleModal);
    refs.list.addEventListener('click', toggleModal);
    refs.list2.addEventListener('click', toggleModal);
    refs.list3.addEventListener('click', toggleModal);
    refs.list4.addEventListener('click', toggleModal);
    refs.list5.addEventListener('click', toggleModal);

function toggleModal() {
    refs.hamburger.classList.toggle('is-hidden');
    refs.backdrop.classList.toggle('backdrop-hidden');
    
}
})();
