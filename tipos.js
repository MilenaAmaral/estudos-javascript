let nome = "Luis"
let idade = 28
let altura = 1.80

console.log(typeof nome) // string
console.log(typeof idade) // number
console.log(typeof altura) // number

let estaChovendo = false
console.log(typeof estaChovendo) // boolean

let cidade 
console.log(typeof cidade) // undefined

let aprendeuJs = null
console.log(typeof aprendeuJs) // object (isso é um bug do JavaScript, null não é um objeto, mas sim um valor primitivo que representa a ausência de valor)

let simbolo = Symbol("simbolo")
console.log(typeof simbolo) // symbol

// POSSIVEIS TIPOS DE DADOS EM JAVASCRIPT
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. object (array, function, object literal)