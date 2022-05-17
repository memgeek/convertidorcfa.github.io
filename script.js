var peso = document.getElementById("peso");
peso.addEventListener('keyup',convertir);
txtResultado = document.getElementById("resultado");

unidad_peso = document.getElementById("unidad_peso");
unidad_peso.addEventListener('change',convertir);
producto = document.getElementById("producto");
producto.addEventListener('change',convertir);

var resultado;

function convertir(){
    if(peso.value==''){
        return;
    }
    numero = peso.value;
    numero = parseFloat(numero);

    //UNIDADES EN GRAMOS------------------------------------------------------

    if(unidad_peso.value=="gramos" && producto.value == "regular_filets"){
        resultado = Number(150 - ((numero / 454)/.24).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "grilled_filets"){
        resultado = Number(130 - ((numero / 454)/.28).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "spicy_filets"){
        resultado = Number(137 - ((numero / 454)/.26).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "strips"){
        resultado = Number(341 - ((numero / 454)/.1).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "nuggets"){
        resultado = Number(1010 - ((numero / 454)/.035).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "grilled_nuggets"){
        resultado = Number(872 - ((numero / 454)/.041).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "breakfast_filets"){
        resultado = Number(240 - ((numero / 454)/.15).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="gramos" && producto.value == "spicy_breakfast_filets"){
        resultado = Number(250 - ((numero / 454)/.144).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }

    //UNIDADES EN LIBRAS----------------------------------------------------

    if(unidad_peso.value=="libras" && producto.value == "regular_filets"){
        resultado = Number(150 - (numero /.24).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "grilled_filets"){
        resultado = Number(130 - (numero /.28).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "spicy_filets"){
        resultado = Number(137 - (numero /.26).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "strips"){
        resultado = Number(341 - (numero /.1).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "nuggets"){
        resultado = Number(1010 - (numero /.035).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "grilled_nuggets"){
        resultado = Number(872 - (numero /.041).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "breakfast_filets"){
        resultado = Number(240 - (numero /.15).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
    if(unidad_peso.value=="libras" && producto.value == "spicy_breakfast_filets"){
        resultado = Number(250 - (numero /.144).toFixed(0));
        txtResultado.innerHTML = resultado + " Unidades";
    }
}