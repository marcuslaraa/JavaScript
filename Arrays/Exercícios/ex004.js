const nomes = [
  'Marcus',
  'Adriana',
  'Victor',
  'Marcelo',
  'Ronaldo',
  'Grazielle',
  'Fábio',
  'César',
  'Ricardo',
  'Maria',
  'Andreia',
  'Jonathan',
  'Alan',
];

const nome1 = nomes.slice(0, nomes.length / 2);
const nome2 = nomes.slice(nomes.length / 2);
console.log('O tamanho da array:', nomes.length);
console.log(`Alunos da Sala 01: ${nome1}`);
console.log(`Alunos da Sala 02: ${nome2}`);
