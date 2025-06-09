/* 1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas.
      Em seguida, exiba o tipo de cada variável no console. */
   const nome = 'Daniel';
   const numero = 123;
   const booleano = true;

   console.log(typeof nome);
   console.log(typeof numero);
   console.log(typeof booleano);

/* 2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome.Em seguida, combine-as em uma terceira
      variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console. */
   const primeiroNome = 'Daniel';
   const ultimoNome = 'Gonçalves';

   const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
   console.log('Usando operador +:', nomeCompletoConcatenado);

   const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
   console.log(`Usando template strings: ${nomeCompletoTemplate}`);

/* 3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida,combine-as
      em uma terceira variávelusando template strings para montar uma frase e exiba o resultado no console. */
   const nome = 'Daniel';
   const idade = '24';

   const resultado = `Nome: ${nome}, idade: ${idade}`;
   console.log(resultado);

/* 4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um
     novo valor a essa variável.Imprima ambos os valores no console após atribuí-los. */
   let variavel = 'Nome';
   console.log(variavel);
   variavel = 123;
   console.log(variavel);

/* 5. Declare uma variável usando `var` fora de um bloco de código (por exemplo, if) e outra dentro desse bloco.
      Tente acessar essas variáveis dentro do bloco e fora dele utilizando `console.log` e analise os resultados.
      Faça o mesmo processo utilizando `let` e compare com os resultados anteriores. */
   var nome = 'Daniel';

   if (true) {
      var idade = 24;
      console.log(nome);  // Retorna 'Daniel'
      console.log(idade); // Retorna '24'
   };

   console.log(nome);  // Retorna 'Daniel'
   console.log(idade); // Retorna '24'

// ---------------------------------------

   let nome = 'Daniel';

   if (true) {
      let idade = 24;
      console.log(nome);  // Retorna 'Daniel'
      console.log(idade); // Retorna '24'
   };

   console.log(nome); // Retorna 'Daniel'
   console.log(idade); // Erro.

/* 6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if)
      para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável. */
   let chuva = false;

   if (chuva == true) {
      console.log('Está chovendo! Precisa levar guarda-chuva.');
   } else {
      console.log('Não está chovendo! Não precisa levar guarda-chuva');
   }