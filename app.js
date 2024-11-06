
function verificarCalificacion(){
    let grado = parseInt(document.getElementById("grado").value);
    let mensaje = "";
    if(grado >=0 && grado<=100){
        
        if(grado >= 90){
            mensaje ="aprobado con honores";    
        }else if(grado >= 70){
            mensaje = "aprobado";
        }else{
            mensaje ="reprobado";
        }
    }else{
        mensaje = "valor incorrecto"
    }
    document.getElementById("gradoSalida").innerText = mensaje;
}

function determinarParidad(){
    let numero = parseInt(document.getElementById("parlmpar").value);
    let mensaje = "";
    if(numero % 2 == 0){
        mensaje = "el numero es par"
    }else{
        mensaje = "el numero es impar"
    }
    document.getElementById("parlmparSalida").innerText = mensaje;   
}

function evaluarDescuento(){
    let descuento = parseInt(document.getElementById("descuento").value);
    let precioFinal = descuento;
    if(descuento > 100000){
        precioFinal = descuento *0.9;
    }
    document.getElementById("descuentoSalida").innerText = `monto final a pagar ${precioFinal}`;
}

function jugarAdivinanza(){
    let adivinar = parseInt (document.getElementById("adivinar").value);
    let numeroAleatorio = Math.floor(Math.random() * 10)+ 1;
    let mensaje = "";
    if(adivinar === numeroAleatorio){
        mensaje = "¡Felicidades, adivnaste el numero¡";
    }else{
        mensaje = `lo siento, el numero era ${numeroAleatorio}`;
    }
    document.getElementById("adivinarSalida").innerText = mensaje;
}