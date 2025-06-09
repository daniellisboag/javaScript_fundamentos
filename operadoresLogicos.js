const notaFinal = 7;
const faltas = 3;

if (notaFinal < 7 || faltas > 4) {
   console.log('Reprovado, boas festas.');
} else {
   console.log('Aprovado, boas festas.');
}

if (notaFinal < 7 && faltas > 4) {
   console.log('Reprovado, boas festas.');
} else {
   console.log('Aprovado, boas festas.');
}