function calcularTicket(params) {
    //alert("Hola Flor!")
    const price = 200;
    const name = document.getElementById("nameinput").value;
    const surname = document.getElementById("surnameinput").value;
    const mail = document.getElementById("mailinput").value;
    const quantity = document.getElementById("cantidadinput").value;
    const categoryDiscount = document.getElementById("categoriainput").value;

    const divtotal = document.getElementById("total-div");

    let totalCost = (price * quantity) * (1- (categoryDiscount / 100) );

    divtotal.innerText = 'Total a Pagar: $' +  Math.round(totalCost);
}

function vaciarFormulario(params) {
    const cardstudent = document.getElementById("student-card");
    const cardtrainee = document.getElementById("trainee-card");
    const cardJunior = document.getElementById("junior-card");
    document.getElementById("nameinput").value = "";
    document.getElementById("surnameinput").value = "";
    document.getElementById("mailinput").value = "";
    document.getElementById("cantidadinput").value = "";
    document.getElementById("categoriainput").value = "80";
    document.getElementById("total-div").innerText = 'Total a Pagar: $'
    cardstudent.classList.replace("border-muted", "border-info")
    cardtrainee.classList.replace("border-success", "border-muted")
    cardJunior.classList.replace("border-warning", "border-muted")
}

function cambiaCategoria(params) {
    const selectedValue = this.value;
    const cardstudent = document.getElementById("student-card")
    const cardtrainee = document.getElementById("trainee-card")
    const cardJunior = document.getElementById("junior-card")

    //si es Estudiante
    if (selectedValue == "80") {
        cardstudent.classList.replace("border-muted", "border-info")
        cardtrainee.classList.replace("border-success", "border-muted")
        cardJunior.classList.replace("border-warning", "border-muted")
    }

    //si es Trainee
    if (selectedValue == "50") {
        cardstudent.classList.replace("border-info","border-muted")
        cardtrainee.classList.replace("border-muted","border-success")
        cardJunior.classList.replace("border-warning", "border-muted")
    }

    //si es Junior
    if (selectedValue == "15") {
        cardstudent.classList.replace("border-info","border-muted")
        cardtrainee.classList.replace("border-success", "border-muted")
        cardJunior.classList.replace("border-muted", "border-warning")
    }


}

const btnResumen = document.getElementById("resumen-btn");
btnResumen.addEventListener('click', calcularTicket);

const btnBorrar = document.getElementById("borrar-btn");
btnBorrar.addEventListener('click', vaciarFormulario);

const selectCategory = document.getElementById("categoriainput");
selectCategory.addEventListener('change', cambiaCategoria);