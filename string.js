const estudante = "Daniel";
const docente = 'Siuvana';
const cumprimento = 'Nosso lema é "estudar bastante!"';
const citacao = `Ju diz: 'Nosso lema é "estudar bastante!"'`;

console.log(cumprimento);
console.log(citacao);

// Template string.
console.log(`O estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);