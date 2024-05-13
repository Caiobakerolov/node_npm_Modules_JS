class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

// module.exports.nome = 'Luiz';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser';

module.exports = {
  nome, sobrenome, Pessoa
}