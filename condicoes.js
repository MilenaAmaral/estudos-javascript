const nome = "Milena";

if (nome) {
    console.log("Olá, " + nome + "!");
} else {
    console.log("Olá, ainda não temos seu nome!");
}

const idade = 28;

if (idade !== null && idade >= 18) {
    console.log("Você é maior de idade.");
} else if (idade !== null && idade >= 0 && idade < 18) {
    console.log("Você é menor de idade.");
}   