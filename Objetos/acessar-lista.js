const cliente = {
  nome: 'Marcus',
  idade: 28,
  cpf: '42831413800',
  email: 'marcus.lara@hotmail.com',
};

const chaves = ['nome', 'idade', 'cpf', 'email'];

//console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));
