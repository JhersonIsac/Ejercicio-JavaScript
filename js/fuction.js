function crearcarta(){
    var a= document.getElementById("rut").value;
    var b= document.getElementById("nom").value;
    var c= document.getElementById("apepa").value;
    var d= document.getElementById("apema").value;
    var e= document.getElementById("edad").value;
    var f= document.getElementById("genero").value;
    var g= document.getElementById("celular").value;
}

var cadena(){
    "rut: "+ a +
    "nom: "+ b +
    "apepa: "+ c +
    "apema: "+ d +
    "edad: "+ e +
    "genero: "+ f +
    "celular: "+ g +

    document.getElementById("carta").value=cadena;
}