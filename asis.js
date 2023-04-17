function suma (){
    var uno = parseInt(document.getElementById('uno').value);
    var dos = parseInt(document.getElementById('dos').value*2);
    var tres = parseInt(document.getElementById('tres').value*3);
    var cuatro = parseInt(document.getElementById('cuatro').value*4);
    var cinco = parseInt(document.getElementById('cinco').value*5);
    var seis = parseInt(document.getElementById('seis').value*6);
    var siete = parseInt(document.getElementById('siete').value*7);
    var ocho = parseInt(document.getElementById('ocho').value*8);
    var nueve = parseInt(document.getElementById('nueve').value*9);
    var extra = parseInt(document.getElementById('extra').value);
    var resultado = uno + dos + tres + cuatro + cinco + seis + siete + ocho + nueve + extra;

    alert (document.getElementById('resultado').value = "El resultado es de: " + resultado);
}