//Adição (+): Usado para somar dois números.

//Subtração (-): Usado para subtrair um número de outro.

//Multiplicação (*): Usado para multiplicar dois números.

//Divisão (/): Usado para dividir um número por outro.

//Resto da Divisão (%): Este operador retorna o resto de uma divisão inteira. É muito útil para verificar se um número é par ou ímpar, por exemplo.

//Incremento (++): Usado para adicionar 1 ao valor de uma variável. 
// É uma forma abreviada de variavel = variavel + 1. Só pode ser usado com variáveis que podem ter seu valor alterado, como as declaradas com let.

//Decremento (--): Usado para subtrair 1 do valor de uma variável. É uma forma abreviada de variavel = variavel - 1. Também só pode ser usado com let.

//Operadores de Atribuição Combinados (+=, -=, *=, /=): Estes operadores realizam uma operação matemática e atribuem o resultado de volta à mesma variável.

const numeroUm = 4;
const numeroDois = 8;

const subtracao = numeroUm - numeroDois;

console.log("O resultado da subtração é: " + subtracao);

const soma = numeroUm + numeroDois;

console.log("O resultado da soma é: " + soma);

const multiplicacao = numeroUm * numeroDois;

console.log("O resultado da multiplicação é: " + multiplicacao);

const divisao = numeroUm / numeroDois;

console.log("O resultado da divisão é: " + divisao);

const contaComplexa = (numeroUm + numeroDois) * 2;

console.log("O resultado da conta complexa é: " + contaComplexa);

const resto = numeroUm % numeroDois;

console.log("O resto da divisão é: " + resto);

const potencia = numeroUm ** 2;

console.log("O resultado da potência é: " + potencia);

let contador = 5;
//contador = contador + 1;
contador++;
console.log("Incrementando o contador: ", contador);

contador --;
console.log("Decrementando o contador: ", contador);

let numeroTres = 2
numeroTres += 3; // numeroTres = numeroTres + 3
console.log("O resultado da operação += é: " + numeroTres);





