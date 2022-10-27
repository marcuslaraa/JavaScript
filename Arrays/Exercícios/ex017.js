const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 10, 8];

const reprovados = nomes.filter((_, indice) => notas[indice] < 5);
console.log(reprovados);
