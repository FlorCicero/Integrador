
function chooseCategory() {
    const selectedValue = this.value

    const activeCardId = selectedValue == 80 ? "student-card" : selectedValue == 50 ? "trainee-card" : selectedValue == 15 ? "junior-card" : "none"
    
    cardStatusRfresh(activeCardId);
    
}

selectCategory.addEventListener('change', chooseCategory);
