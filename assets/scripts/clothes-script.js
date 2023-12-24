const firstImage = document.querySelector('.image-1')
const secondImage = document.querySelector('.image-2')

const toogleBtn = document.querySelector('.fa-arrow-right')



toogleBtn.addEventListener('click', () => {
    
    if (firstImage.style.display === 'none') {
        firstImage.style.display = 'block';
        secondImage.style.display = 'none';
    } else {
        firstImage.style.display = 'none';
        secondImage.style.display = 'block';
    }
});
