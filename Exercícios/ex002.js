const numeros = [6, 7, 8, 9];

function dobraOValor(num) {
  return num * 2;
}

const numerosDobrados = numeros.map(dobraOValor);
console.log(numerosDobrados);
