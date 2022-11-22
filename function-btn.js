function cleanForm(e) {
    e.preventDefault()
    console.log(f_name)
    f_name.value = "";
    f_surname.value = "";
    f_mail.value = "";
    f_quantity.value = "";
    f_categoryDiscount.value = "0";
    f_divtotal.innerText = 'Total a Pagar: $'
    
    cardStatusRfresh("none")

}
//VER como aplicar para que no se pueda enviar si no esta completo
function checkError() {
    let informacion = { "ok": true, "errorFields":[] }

    for (const item of all_form) {
        const itemHelper = getHelpInLineById(item.id);
        itemHelper.classList.add("d-none");

        if (item.value == "") {
            item.classList.add("border-danger")
            informacion.ok = false;
            informacion.errorFields.push({ "id": item.id, "error": "empty" });
            itemHelper.classList.remove("d-none")
            itemHelper.innerText = "El Campo no Puede Estar Vacío."
        } else {
            item.classList.remove("border-danger")
            if (item.type == "text") {
                if (item.value.length < 2) {
                    item.classList.add("border-danger")
                    informacion.ok = false;
                    informacion.errorFields.push({ "id": item.id, "error": "too short" });
                    itemHelper.classList.remove("d-none")
                    itemHelper.innerText = "Se requiere más de un caracter"
                }
            }
            if (item.type == "number") {
                if (item.value < 1 || item.value > 10) {
                    item.classList.add("border-danger")
                    informacion.ok = false;
                    informacion.errorFields.push({ "id": item.id, "error": "out of range" });
                    itemHelper.classList.remove("d-none")
                    itemHelper.innerText = "La cantidad está fuera de rango"
                }
            }
            if (item.id == "mailinput") {
                console.log(item)
                const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

                bad_mail_condition = emailRegEx.exec(item.value) == null;
                
                if (bad_mail_condition) {
                    item.classList.add("border-danger")
                    informacion.ok = false;
                    informacion.errorFields.push({ "id": item.id, "error": "Wrong Address" });
                    itemHelper.classList.remove("d-none")
                    itemHelper.innerText = "La dierección de e-Mail es incorrecta"
                }
            }
        }

    }

    return informacion
}


//
function send(e) {
    e.preventDefault()   
    const formComplete = checkError()
    console.info( JSON.stringify(formComplete,null,2) )
    if (formComplete.ok == true) {
        success()
    } else {
        failed()
    }

}

//EXITO

function success() {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Formulario enviado con éxito',
        showConfirmButton: false,
        timer: 1500
    })
}

function failed() {

    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: "Error en Formulario",
        text: "Revise los datos ingresados",
        showConfirmButton: false,
        timer: 2500
    })
}

function ticketPrice() {
    //alert("Hola Flor!")
    const price = 200;
    let totalCost = (price * f_quantity.value) * (1- (f_categoryDiscount.value / 100) );
    f_divtotal.innerText = 'Total a Pagar: $' +  Math.round(totalCost);
}

btnDelete.onclick = (e) => { cleanForm(e) }

btnResume.onclick = (e) => { send(e) }

f_quantity.onchange = (e) => { ticketPrice(e) }

//f_categoryDiscount.onchange = (e) => { ticketPrice(e) }
   