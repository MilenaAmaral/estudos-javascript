// 1. Verificação de idade

const idade = 28;

if (idade >= 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}

// 2. Verificação nota do aluno
// entre 9 e 10 - Excelente
// entre 7 e 8 - Bom
// entre 5 e 6 - Regular
// abaixo de 5 - Insuficiente

const notaDoAluno = 9;

if (notaDoAluno >= 9 && notaDoAluno <= 10) {
    console.log("Excelente");
} else if (notaDoAluno >= 7 && notaDoAluno <= 8) {
    console.log("Bom");
} else if (notaDoAluno >= 5 && notaDoAluno <= 6) {
    console.log("Regular");
} else {
    console.log("Insuficiente");
}