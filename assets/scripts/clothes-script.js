const firstImage = document.querySelector('image-1')
const secondImage = document.querySelector('image-2')

const arrowBtn = document.querySelector('.fa-cart-arrow-down')


secondImage.style.display = 'none'

arrowBtn.addEventListener('click', () => {
    secondImage.style.display = 'block'
})
