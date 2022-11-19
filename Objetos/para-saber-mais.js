const pessoa = {
  nome: 'Ana',
  email: 'a@email.com',
  imprimeNome: function () {
    console.log(`${this.nome}`);
  },
};

pessoa.imprimeNome(); //Ana
