function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const marcus = new cliente(
  'Marcus',
  '42831413800',
  'marcus.lara@hotmail.com',
  100
);

marcus.depositar(50);

console.log(marcus);
