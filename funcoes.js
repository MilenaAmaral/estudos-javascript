function saudacao(nome) { // Função que recebe um parâmetro 'nome' e exibe uma saudação no console
    console.log("Olá, " + nome + "!");
}

saudacao("Milena"); // Chamada da função saudacao com o argumento "Milena"
saudacao("Luis"); // Chamada da função saudacao com o argumento "Luis"
saudacao("Stella"); // Chamada da função saudacao com o argumento "Stella"

function calcularDobroDeUm(numero) { // Função que recebe um parâmetro 'numero' e retorna o dobro desse número
    return numero * 2;
}   

const numeroDobrado = calcularDobroDeUm(5); // Chamada da função calcularDobroDeUm com o argumento 5'
console.log("O número dobrado é: " + numeroDobrado); // Exibe o resultado no console

