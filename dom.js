//form
    const f_name = document.getElementById("nameinput");
    const f_surname = document.getElementById("surnameinput");
    const f_mail = document.getElementById("mailinput");
    const f_quantity = document.getElementById("cantidadinput");
    const f_categoryDiscount = document.getElementById("categoriainput");
    const f_divtotal = document.getElementById("total-div");
    const all_form = [f_name, f_surname, f_mail, f_quantity, f_categoryDiscount];
    
function getHelpInLineById(inptobj_id) {
    return document.getElementById(inptobj_id + "HelpInline");
}

//cards
    const cardstudent = document.getElementById("student-card");
    const cardtrainee = document.getElementById("trainee-card");
    const cardJunior = document.getElementById("junior-card");
    const cardsGroup = [cardstudent, cardtrainee, cardJunior];

//buttons
    const btnResume = document.getElementById("resumen-btn");
    const btnDelete = document.getElementById("borrar-btn");

//select
    const selectCategory = document.getElementById("categoriainput");


