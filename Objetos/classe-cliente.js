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

const marcus = new Cliente(
  'Marcus',
  'marcus.lara@hotmail.com',
  '42831413800',
  100
);

marcus.poucoSaldo();
console.log(marcus);
