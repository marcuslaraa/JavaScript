const cliente1 = [
  {
    nome: 'Marcus',
    idade: 28,
    fone: '996663288',
    dependentes: [
      {
        nome: 'Ana',
        idade: 8,
        parentesco: 'Filha',
      },
      {
        nome: 'Daniel',
        idade: 15,
        parentesco: 'Filho',
      },
    ],
  },
];

const cliente2 = [
  {
    nome: 'Adriana',
    idade: 53,
    dependentes: [
      {
        nome: 'Bianca',
        idade: 32,
        parentesco: 'Filha',
      },
    ],
  },
];

const listaDependentes = [
  ...cliente1[0].dependentes,
  ...cliente2[0].dependentes,
];

console.table(listaDependentes);
