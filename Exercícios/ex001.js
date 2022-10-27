const numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(`O numero ${numero} é par`);
  } else {
    console.log(`O numero ${numero} é ímpar`);
  }
});
