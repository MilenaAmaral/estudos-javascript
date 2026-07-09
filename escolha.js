//entre 9 e 10 - Excelente
//entre 7 e 8 - Bom
//entre 5 e 6 - Regular
//abaixo de 5 - Insuficiente

const notaDoAluno = 5;

switch(notaDoAluno) {
    case 10:
    case 9:
        console.log("Excelente");
        break;
    case 8:
    case 7:
        console.log("Bom");
        break;
    case 5:
    case 6:
        console.log("Regular");
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Insuficiente");
        break;
    default:
        console.log("Nota inválida");
}