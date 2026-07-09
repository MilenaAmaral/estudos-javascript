console.log('Boas vindas a calculadora de trocos')

let valorCompra = 17.50
let valorPago = 20.00

console.log(`O valor da compra é de R$ ${valorCompra.toFixed(2)}`)
console.log(`O valor pago foi de R$ ${valorPago.toFixed(2)}`)

let troco = valorPago - valorCompra

console.log(`O troco a ser devolvido é de R$ ${troco.toFixed(2)}`)