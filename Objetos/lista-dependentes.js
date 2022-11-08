const cliente = {
  nome: 'Marcus',
  idade: 28,
  cpf: '42831413800',
  email: 'marcus.lara@hotmail.com',
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'Filha',
      nascimento: '20/10/2004',
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
