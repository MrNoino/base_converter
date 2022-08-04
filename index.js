document.getElementById("converter").addEventListener("click", function(){


    //binario para decimal
    if(document.getElementById("origem").value == 1 && document.getElementById("destino").value == 2){

        document.getElementById("resultado").innerHTML = binaryToDecimal(document.getElementById("number").value);
        return;

    }

    //decimal para binario
    if(document.getElementById("origem").value == 2 && document.getElementById("destino").value == 1){

        document.getElementById("resultado").innerHTML = decimalToBinary(document.getElementById("number").value);
        return;

    }

    //hexadecimal para decimal
    if(document.getElementById("origem").value == 3 && document.getElementById("destino").value == 2){

        document.getElementById("resultado").innerHTML = hexadecimalToDecimal(document.getElementById("number").value);
        return;

    }

    //decimal para hexadecimal
    if(document.getElementById("origem").value == 2 && document.getElementById("destino").value == 3){

        document.getElementById("resultado").innerHTML = decimalToHexadecimal(document.getElementById("number").value);
        return;

    }

    //binário para hexadecimal
    if(document.getElementById("origem").value == 1 && document.getElementById("destino").value == 3){

        document.getElementById("resultado").innerHTML = binaryToHexadecimal(document.getElementById("number").value);
        return;

    }

    //hexadecimal para binário
    if(document.getElementById("origem").value == 3 && document.getElementById("destino").value == 1){

        document.getElementById("resultado").innerHTML = hexadecimalToBinary(document.getElementById("number").value);
        return;

    }



});