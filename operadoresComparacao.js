//== (igualdade)
//!= (diferença)
//> (maior que)
//< (menor que)
//>= (maior ou igual a)
//<= (menor ou igual a)
//=== (igualdade estrita)
//!== (diferença estrita)

const idadeLuis = 28
const minhaIdade = 28

//operador de igualdade (==) compara apenas o valor, não o tipo
const comparacao = idadeLuis === minhaIdade

//maior que 
//const comparacao = idadeLuis > minhaIdade

//menor que
//const comparacao = idadeLuis < minhaIdade

console.log("São iguais? ", comparacao)

const idade =38
const idadeIrmao = 18

const souMaiorDeIdade = idade >= 18
const meuIrmaoEhMaiorDeIdade = idadeIrmao >= 18

console.log("Sou maior de idade? ", souMaiorDeIdade)
console.log("Meu irmão é maior de idade? ", meuIrmaoEhMaiorDeIdade)

// comparacao escrita (===) compara o valor e o tipo
const comparacaoEscrita = idadeLuis === minhaIdade

console.log("São iguais? ", comparacaoEscrita)
