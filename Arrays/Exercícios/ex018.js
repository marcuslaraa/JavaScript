const salaJs = [7, 8, 8, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
  return somaDasNotas / notasDaSala.length;
}

console.log(`A média da sala de JS é ${mediaSala(salaJs)}`);
console.log(`A média da sala de Java é ${mediaSala(salaJava)}`);
console.log(`A média da sala de Python é ${mediaSala(salaPython)}`);

const nomes = [
  'a',
  'b',
  'd',
  'e',
  's',
  'x',
  'w',
  'o',
  'p',
  't',
  'r',
  'q',
  'v',
  'z',
];
const notas = [10, 8, 7, 6, 8, 6, 9, 10, 6, 7, 4, 3, 5, 8];

const media = parseInt(
  notas.reduce((acum, atual) => acum + atual, 0) / notas.length
);
console.log(media);

const reprovados = nomes.filter((_, indice) => notas[indice] < 5);

console.log(reprovados);
