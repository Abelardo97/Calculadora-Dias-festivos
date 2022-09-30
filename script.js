//Declaracion de variables con DOM
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const year = document.getElementById('year');

const btn_calcu = document.getElementById('btn_calcu');

const resultado = document.getElementById('resultado');

// Función para calcular el día laboral
btn_calcu.addEventListener("click", () => {
    // validación de los campos
    if (dia.value == "" || mes.value == "" || year.value == "") {
        alert("Todos los campos son obligatorios");
        return;
        }
    // validacion año
    if (year.value <= 0) {
        alert("El año debe ser mayor a 0...Intenta de nuevo");
        return;
    }
    // validación mes
    if (mes.value < 1 || mes.value > 12) {
        alert("Ingrese un numero de mes valido... Intenta de nuevo");
        return;
    }
    // validación día
    if (dia.value < 1 || dia.value > 31) {
        alert("Ingrese un numero de día valido...Intenta de nuevo");
        return;
    }

    
    // Generando la fecha
    let fecha = new Date(year.value, mes.value - 1, dia.value);

    // obteniendo el día de la semana
    let dia_sem = fecha.getDay();
    let mensaje = ""; 
    
    switch (dia_sem) {
        case 0:
            mensaje = "El día de hoy es Domingo";
            break;
        case 1:
            mensaje = "El día de hoy es Lunes";
            break;
        case 2:
            mensaje = "El día de hoy es Martes";
            break;
        case 3:
            mensaje = "El día de hoy es Miércoles";
            break;
        case 4:
            mensaje = "El día de hoy es Jueves";
            break;
        case 5:
            mensaje = "El día de hoy es Viernes";
            break;
        case 6:
            mensaje = "El día de hoy es Sábado";
            break;
    }

        //Comparación de si el día es o no laborable
    if (dia_sem == 0 || dia_sem == 6) {
        mensaje += " y no es un buen día para ir a trabajar";
    } else {
        mensaje += " y es buen día para ir a trabajar";
    }

    // Imprimiendo el mensaje
    resultado.value = mensaje;
    


});    


