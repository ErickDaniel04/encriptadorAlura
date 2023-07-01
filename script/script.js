function encriptar(){
    var texto = document.getElementById("texto").value;
    var encriptado = ""
    if(texto == ""){
        
    }
    else{
        for (var i = 0; i < texto.length; i++) {

            if(texto[i] == "a"){
                encriptado += "ai";
            } else if (texto[i] == "o") {
                encriptado += "ober";
            } else if (texto[i] == "e") {
                encriptado += "enter";
            } else if (texto[i] == "i") {
                encriptado += "imes";
            } else if (texto[i] == "u") {
                encriptado += "ufat";
            } 
            else{
                encriptado += texto[i];
            } // end if else
        } // end for
        showEncription(encriptado);
    }
    
} // end encriptar

function desencriptar(){
    var texto = document.getElementById("texto").value;
    var desencriptado = "";
    if(texto == ""){

    } else {
        for (var i = 0; i < texto.length; i++) {

            if(texto.slice([i], [i+2]) == "ai"){
                desencriptado += "a";
                i += 1;
            } else if (texto.slice([i], [i+4]) == "ober"){
                desencriptado += "o";
                i += 3;
            } else if (texto.slice([i], [i+5]) == "enter"){
                desencriptado += "e";
                i += 4;
            } else if (texto.slice([i], [i+4]) == "imes"){
                desencriptado += "i";
                i += 3;
            } else if (texto.slice([i], [i+4]) == "ufat"){
                desencriptado += "u";
                i += 3;
            }
            else{
                desencriptado += texto[i];
            } // end if else
        } // end for
        showEncription(desencriptado);
    }
    
} // end desencriptar

function showEncription(texto){
        document.getElementById("img1").style.display = "none";
        document.getElementById("parrafo1").style.display = "none";
        document.getElementById("button3").style.display = "block";
        document.getElementById("button3").style.marginTop = "auto";
        document.getElementById("parrafo2").style.textAlign = "justify";
        document.getElementById("parrafo2").style.fontSize = "18px" ;
        return document.getElementById("parrafo2").innerHTML = texto;
}

function copiarTexto(){
    let copiado = document.getElementById("parrafo2");
    navigator.clipboard.writeText(copiado.textContent);
    
}