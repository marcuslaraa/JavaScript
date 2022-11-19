class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoup) {
    super(nome, email, cpf, saldo);
    this.saldoPoup = saldoPoup;
  }

  depositarPoup(valor) {
    this.saldoPoup += valor;
  }
}

const marcus = new ClientePoupanca(
  'Marcus',
  'marcus.lara@hotmail.com',
  '42831413800',
  100,
  200
);

console.log(marcus.email);
