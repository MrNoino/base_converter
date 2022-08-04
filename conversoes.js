//função binário para decimal
function binaryToDecimal(bin_number){

    var dec_number = 0;

    for(var i = 0, exp = (bin_number.length -1); i < bin_number.length; i++, exp--){

        dec_number += parseInt(bin_number[i]) * Math.pow(2, exp);

    }

    return dec_number;

}

//função decimal para binário
function decimalToBinary(dec_number){

    var bin_number = "";

    dec_number = parseInt(dec_number);

    if (!Number.isSafeInteger(dec_number) || dec_number < 0) {
        throw new Error('Tem de ser número inteiro não negativo.');
    }
    
    while(dec_number > 0){

        bin_number += (dec_number % 2).toString();

        dec_number = Math.floor(dec_number / 2);

    }

    return bin_number.split("").reverse().join("");

}

//função hexadecimal para decimal
function hexadecimalToDecimal(hex_number){

    var dec_number = 0;

    for(var i = 0, exp = (hex_number.length -1); i < hex_number.length; i++, exp--){

        //se é número
        if(!isNaN(hex_number[i])){

            dec_number += parseInt(hex_number[i]) * Math.pow(16 , exp);

        //se não é número
        }else{

            switch(hex_number[i]){

                case 'A':
                    
                case 'a':

                    dec_number += 10 * Math.pow(16 , exp);

                    break;

                case 'B':
                
                case 'b':

                    dec_number += 11 * Math.pow(16 , exp);
        
                    break;

                case 'C':
                    
                case 'c':

                    dec_number += 12 * Math.pow(16 , exp);
                    
                    break;

                case 'D':
                    
                case 'd':

                    dec_number += 13 * Math.pow(16 , exp);
                            
                    break;

                case 'E':
                    
                case 'e':

                    dec_number += 14 * Math.pow(16 , exp);

                    break;

                case 'F':
                    
                case 'f':

                    dec_number += 15 * Math.pow(16 , exp);

                    break;

            }

        }

        

    }

    return dec_number;

}

//decimal para hexadecimal
function decimalToHexadecimal(dec_number){

    var hex_number = "";

    dec_number = parseInt(dec_number);

    if (!Number.isSafeInteger(dec_number) || dec_number < 0) {
        throw new Error('Tem de ser número inteiro não negativo.');
    }
    
    while(dec_number > 0){

        if((dec_number % 16) > 9)

            hex_number += String.fromCharCode(55 + (dec_number % 16));
            
        else
            
            hex_number += (dec_number % 16).toString();

        dec_number = Math.floor(dec_number / 16);

    }

    return hex_number.split("").reverse().join("");

}

//binário para hexadecimal
function binaryToHexadecimal(bin_number){

    return decimalToHexadecimal(binaryToDecimal(bin_number));

}

//hexadecimal para binário
function hexadecimalToBinary(hex_number){

    return decimalToBinary(hexadecimalToDecimal(hex_number));

}

