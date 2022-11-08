const cliente = {
  nome: 'Marcus',
  idade: 28,
  cpf: '42831413800',
  email: 'marcus.lara@hotmail.com',
};

cliente.dependentes = {
  nome: 'Sara',
  idade: 25,
  parentesco: 'Filha',
};

//console.log(cliente);

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente);
