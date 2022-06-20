function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "João",
    idade: 50,
}

const animal = {
    nome: 'Grey',
    idade: 10,
    raca: 'Pug',
};

// Utilizando o metodo Call >>>> console.log(calculaIdade.call(pessoa2, 30));

console.log(calculaIdade.apply(pessoa2, [30]));
