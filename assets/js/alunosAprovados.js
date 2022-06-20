const alunos = [
{
    nome: 'José',
    nota: 8,
    turma: '1B',
},
{
    nome: 'Pedro',
    nota: 5,
    turma: '1B',
},
{
    nome: 'Claudio',
    nota: 5,
    turma: '1B',
},
{
    nome: 'João',
    nota: 4,
    turma: '1B',
},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];
    let reprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
            console.log(`Parabéns o aluno ${nome} foi aprovado!`);
		} else {
            reprovados.push(nome);
            console.log(`Infelizmente o aluno ${nome} foi reprovado!`);
        }
	}

	return aprovados;
}

console.log (alunosAprovados(alunos, 5))