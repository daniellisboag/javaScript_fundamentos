// 1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacao(nome) {
   return `Seja bem vindo, ${nome}`;
}

console.log(saudacao('Daniel Lisboa'));

// 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function maiorIdade(idade) {
   if (idade >= 18) {
      return 'Você é maior de idade';
   } else {
      return 'Você não é maior de idade';
   }
}

console.log(maiorIdade(17));

// 3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string `reverse()`. Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function palindromo(palavra) {
   const reverter = palavra.split('').reverse().join('');
   return palavra.toLowerCase() === reverter.toLowerCase();
}

console.log(palindromo('Radar'));
console.log(palindromo('Teste'));

// 4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function maiorNumero(valor1, valor2, valor3) {
   if (valor1 < valor3 && valor2 < valor3) {
      return valor3;
   } else if (valor2 < valor1 && valor3 < valor1) {
      return valor1;
   } else if (valor1 < valor2 && valor3 < valor2) {
      return valor2;
   }
}

console.log(`O maior valor é ${maiorNumero(2, 1, 5)}`);

// 5. Crie uma arrow function chamada `calculaPotencia` que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const calculaPotencia = (base, expoente) => base ** expoente;

const base = 2;
const expoente = 3;
console.log(`O resultado de ${base} elevado a ${expoente} é: ${calculaPotencia(base, expoente)}`);