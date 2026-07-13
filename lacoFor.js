for(let contador = 1; contador <= 10; contador++) {
    console.log("Número atual: " + contador)
}

for(let numero = 0; numero <= 15; numero ++) {
    if(numero % 2 === 0) {
        console.log("Número par encontrado: " + numero)
    }   
}

for(let numero = 0; numero <= 15; numero ++) {
    if(numero % 2 !== 0) {          
    console.log("Número ímpar encontrado: " + numero)
}
}   

const palavra = "calopsita"

// palavra.length indica o tamanho da palavra, ou seja, quantas letras ela possui. 
// palavra [1] indica a letra que está na posição 1 da palavra, ou seja, a letra "a".

for(let contador = 0; contador <= palavra.length; contador++) {
    console.log("Letra atual: " + palavra[contador])
}   