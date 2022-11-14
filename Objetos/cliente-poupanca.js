function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const marcus = new clientePoupanca(
  'Marcus',
  '42831413800',
  'marcus.lara@hotmail.com',
  100,
  200
);

clientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

marcus.depositarPoup(30);
marcus.depositar(70);

console.log(marcus);
