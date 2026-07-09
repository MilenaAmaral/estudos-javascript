// esse é um comentário que explica o código abaixo

// formas diferentes de declarar uma variável em JavaScript
// 1. variavel global
// 2. var  (pode ser reatribuída / antigo evitar usar)
// 3. let (pode ser reatribuída)
// 4. const (não pode ser reatribuída)

// const sempre que o valor não mudar.

//let quando precisar atualizar o valor.

//Evite ao máximo variáveis globais.

// essa é uma variável que armazena o nome da pessoa
var nome = "João"
let nome2 = "Maria"
const nome3 = "Pedro"
// essa é uma variável que armazena a idade da pessoa
var idade = 28
let idade2 = 30
const idade3 = 35

// essa é uma variável que armazena a data de aniversário da pessoa
let dataAniversario = "06 de Fevereiro"

// essa é uma variável que armazena a idade da pessoa depois do aniversário
console.log ("Minha idade atual é " + idade + " anos.");

console.log("Meu aniversário é no dia " + dataAniversario + ".");

// essa é uma variável que armazena a idade da pessoa depois do aniversário
idade = idade + 1

// essa é uma variável que armazena a idade da pessoa depois do aniversário
console.log("Minha idade é depois do aniversário: " + idade + " anos.");