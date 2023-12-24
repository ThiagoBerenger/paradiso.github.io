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