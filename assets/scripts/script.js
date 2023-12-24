//---- event mouse click Taurus Season ----

const taurusBox = document.querySelector('.main-video')


taurusBox.addEventListener('click', function() {
    window.location.href = './midia-page/midia-pubs.html'
})


const flashBack = document.querySelector('.main-flashback-video')

flashBack.addEventListener('click', function(){
    window.location.href = './midia-page/flashback.html'
})

// ------- Menu Mobile ------------ //
const menuMobile = document.getElementById('menu-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menuMobile.addEventListener('click', toggleMenu);