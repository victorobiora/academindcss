const selectPlan = Array.from(document.querySelectorAll('.plan-choose__plan'));
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalNegative = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const mainNav = document.querySelector('.main-nav');

const toggleMenu = () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open');
  
}

const closeModal = ()=> {
    if(mobileNav)mobileNav.classList.remove('open');

    if(modal)modal.classList.remove('open');

    backdrop.classList.remove('open')
}

toggleButton.addEventListener('click', toggleMenu)

selectPlan.forEach(e => {
    e.addEventListener('click', ()=> {
          modal.classList.add('open');
          backdrop.classList.add('open'); 
    })
})


if(modalNegative)modalNegative.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);