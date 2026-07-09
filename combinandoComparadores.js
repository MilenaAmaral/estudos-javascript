// AND && Retorna verdadeiro apenas se todas as condições forem verdadeiras.
// OR || Retorna verdadeiro se pelo menos uma condição for verdadeira.
// NOT ! Inverte o valor lógico, transforma verdadeiro em falso e vice-versa.

const idade = 15;
const maiorDeIdade = idade >= 18;
const possuiCarteiraDeMotorista = true;

const podeDirigir = maiorDeIdade && possuiCarteiraDeMotorista; //AND

console.log(`Pode dirigir? ${podeDirigir}`);

const podeViajar = maiorDeIdade || possuiCarteiraDeMotorista; //OR
console.log(`Pode viajar sozinha? ${podeViajar}`);

const precisaDeAutorizacao = !maiorDeIdade; //NOT
console.log(`Precisa de autorização dos pais? ${precisaDeAutorizacao}`);