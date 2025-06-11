// 1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada `operacao`, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
   let saldo = 1000;
   const saque = 50;
   const deposito = 500;
   const operacao = saldo - saque;

   console.log(`Saldo: ${saldo}`);
   console.log(`Saldo após saque: ${operacao}`);

// 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
   const valor = 1000;
   const parOuImpar = valor % 2 === 0 ? 'O valor é par.' : 'O valor é ímpar.';

   console.log(parOuImpar);

// 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
   const estaLogado = true;
   const permissao = false;

   const resultado = estaLogado && permissao ? 'sim' : 'não';
   console.log(`Administrador logado: ${resultado}`);

// 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
   const primeira = false;
   const segunda = false;

   const verdadeira = primeira || segunda ? 'Verdadeiro' : 'Falso';
   console.log(`Resultado: ${verdadeira}`);

// 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
   const idadeMinima = 18;
   const idadeUsuario = 19;

   if (idadeUsuario >= idadeMinima) {
      console.log('Usuário tem permissão de comprar ingresso.');
   } else {
      console.log('Usuário não tem permissão para comprar ingresso.');
   }