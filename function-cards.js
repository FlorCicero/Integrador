
//cards


function cardsOver() {
    this.classList.replace ("border-muted", "border-primary")
}

function cardsLeave() {
    this.classList.replace ("border-primary", "border-muted")
}

function cardsClick() {
    const card = this
    // selectCategory.value = cards.id === "carstudent" && "80" || cards.id === "cartrainee" && "50" || cards.id === "carjunior" && "15"

    selectCategory.value = card.id === "student-card" ? "80" : card.id === "trainee-card" ? "50" : card.id === "junior-card" ? "15" : "0"
    
    //crear una const que agrupe a las 3 cards
    cardStatusRfresh(this.id)

}

function cardStatusRfresh(card_id) {
    ticketPrice();
    for (let item of cardsGroup) {
        //console.log(item)
        //console.log(card_id)
        if (item.id !== card_id) {
            item.classList.replace("border-success", "border-muted")
            item.classList.replace("border-primary", "border-muted")
        } else {
            //console.log("Este es " + card_id)
            item.classList.replace("border-muted", "border-success")
            item.classList.replace("border-primary", "border-success")
        }
    }    
}

for (const item of cardsGroup) {
    item.addEventListener("mouseover", cardsOver)
    item.addEventListener("mouseleave", cardsLeave)
    item.addEventListener("click", cardsClick)    
}






