//--- flashback.html audio controls ---//

const flashBackTrailer = document.querySelector('.flashback-trailer')

const volumeOn = document.querySelector('.fa-solid.fa-volume-high')
const volumeOff = document.querySelector('.fa-solid.fa-volume-xmark')


volumeOn.addEventListener('click', function() {

    volumeOn.style.display = 'none';

    volumeOff.style.display = 'inline';

    flashBackTrailer.muted = true;
})

volumeOff.addEventListener('click', function() {
    

    volumeOn.style.display = 'inline';
    
    volumeOff.style.display = 'none';
    
    flashBackTrailer.muted = false;
});
