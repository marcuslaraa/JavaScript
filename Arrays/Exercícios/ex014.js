const notas = [10, 9, 8, 7, 6];

// notas.forEach(adicionandoNota);

// function adicionandoNota(notaExtra) {
//   notaExtra += 1;
//   console.log(notaExtra);
// }

const notasAtualizadas = notas.map(nota => (nota == 10 ? nota : ++nota));
console.log(notasAtualizadas);
