const form = document.getElementById('form');
const resetBtn = document.getElementById('resetApp');
const formBtn = document.querySelector('form-btn');
const isElectron = navigator.userAgent.indexOf('Electron') !== -1;

function changeContainer() {
    const containerActive = document.querySelector('.js-container.is-active');
    const containerInactive = document.querySelector('.js-container:not(.is-active)');

    containerActive.classList.remove('is-active');
    containerInactive.classList.add('is-active');
}

function resetApp() {
    inputTicket.value = ''
}

form.addEventListener('submit', e => {
    e.preventDefault();
    changeContainer();
    
    setTimeout(resetApp, 500);
});

resetBtn.addEventListener('click', changeContainer);

if(isElectron) {
    document.body.classList.add('electron');
}