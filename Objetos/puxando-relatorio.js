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

function oferecerSeguro(obj) {
  const prospClientes = Object.keys(obj);
  if (prospClientes.includes('dependentes')) {
    console.log(`Oferta de Seguro de Vida para ${obj.nome}`);
  }
}

oferecerSeguro(cliente);
