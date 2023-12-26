document.addEventListener("DOMContentLoaded", function () {
    const genderSelect = document.querySelector("#gender-select")
    const seasonSelect = document.querySelector("#season-select")
    const clothesSelect = document.querySelector("#clothes-select")
    const priceSelect = document.querySelector("#price-select")
    const clothingItems = document.querySelectorAll(".clothing")

    if (genderSelect && seasonSelect && clothesSelect && priceSelect) {
        [genderSelect, seasonSelect, clothesSelect, priceSelect].forEach((select) => {
            select.addEventListener("change", filterClothing)
        });
    }

    function filterClothing() {
        const selectedGender = genderSelect.value
        const selectedSeason = seasonSelect.value
        const selectedClothes = clothesSelect.value
        const selectedPrice = priceSelect.value

        clothingItems.forEach((item) => {
            const hasSelectedGender = item.classList.contains(selectedGender) || selectedGender === ""
            const hasSelectedSeason = item.classList.contains(selectedSeason) || selectedSeason === ""
            const hasSelectedClothes = item.classList.contains(selectedClothes) || selectedClothes === ""
            const hasSelectedPrice = selectedPrice === "" || checkPrice(item, selectedPrice);

            if (hasSelectedGender && hasSelectedSeason && hasSelectedClothes && hasSelectedPrice) {
                item.style.display = "block"
            } else {
                item.style.display = "none"
            }
        });
    }

    function checkPrice(item, selectedPrice) {
        
        const itemPriceString = item.querySelector('.price').textContent
        const itemPrice = parseFloat(itemPriceString.replace(/\D+/g, ''))

        console.log(itemPrice)

        if (selectedPrice === "Lowest") {
            return itemPrice <= 500000; 
        } else if (selectedPrice === "Highest") {
            return itemPrice > 500000; 
        }
    
        return true;
    }
        
});

//-----------

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search)
    const genderSelect = document.querySelector("#gender-select")

    if (urlParams.has('gender')) {
        const selectedGender = urlParams.get('gender')

        genderSelect.value = selectedGender
    }
});
//------------


// event mouse click href


//Blue Dress

const flashBlueDress = document.querySelector("#flashback-female-blue-dress")

flashBlueDress.addEventListener ('click', function() {
    window.location.href = './clothes-page/flashback-blue-dress-female.html'
})

//Blue Dress 2

const flashBlueDress2 = document.querySelector('#flashback-female-blue-dress_2')

flashBlueDress2.addEventListener('click', function() {
    window.location.href = './clothes-page/flashback-blue-dress-female_2.html'
})


//Bull Overcoat female
const BullOvercoat = document.querySelector("#taurus-female-bull-overcoats")

BullOvercoat.addEventListener ('click', function() {
    window.location.href = './clothes-page/taurus-bull-overcoat-female.html'
})


//Dark Blue Dress
const darkBlueDress = document.querySelector("#taurus-darkblue-dress")

darkBlueDress.addEventListener ('click', function() {
    window.location.href = './clothes-page/taurus-dark-blue-dress-female.html'
})

