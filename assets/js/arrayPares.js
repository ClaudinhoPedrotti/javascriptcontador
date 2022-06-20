function substituiNumerosPares(array) {
	if (!array.length) return console.log('Desculpa, não consegui localizar seus números');

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('A sua array tem o número Opa, fiquei na dúvida se Zero é par ou ímpar, kkkk');
		}
	}
	console.log(array);
}

substituiNumerosPares([0, 0, 0, 0, 0]);