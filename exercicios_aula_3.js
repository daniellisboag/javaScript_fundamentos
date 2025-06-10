// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
   const frase = 'Olá mundo!';
   console.log(frase.length);
   console.log(frase.toLocaleUpperCase());

 // 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
   const valorNull = null;
   let valorUndefined;

   console.log(`Valor de valorNull: ${valorNull}`);
   console.log(`Valor de valorUndefined: ${valorUndefined}`);

// 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
   const numero = 24;
   const texto = 'idade';
   const verdadeiro = true;
   const combinacao = `${numero} é sua ${texto}? ${verdadeiro}`;

   console.log(combinacao);

// 4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
   let numero = 10;
   let texto = 'Olá';

   numero = 'Olá';
   texto = 10;

   console.log(`Tipo de dado após conversão de número para string: ${typeof numero}`);
   console.log(`Tipo de dado após conversão de texto para número: ${typeof texto}`);

// 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
   const texto = 'Olá mundo!';

   console.log(`Texto em maiúsculas: ${texto.toUpperCase()}`);
   console.log(`Texto em minúsculas: ${texto.toLowerCase()}`);
   console.log(`Parte do texto: ${texto.slice(0, 3)}`);
   console.log(`Parte do texto: ${texto.slice(4, 10)}`); // texto.slice(-6)