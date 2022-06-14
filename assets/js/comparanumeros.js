function comparaNumeros(num1, num2) {
	if (!num1) return 'Desculpa, não consegui localizar o primeiro número';
	if (!num2) return 'Desculpa, não consegui localizar o segundo número';
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	if (num1 === num2) {
		return `Os numeros ${num1} e ${num2} são iguais.`;
	}
	return `Os numeros ${num1} e ${num2} não são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;

	if (soma > 20) {
		return `Sua soma é ${soma}, que é maior do que 10 e maior do que 20.`;
	} else {
		if (soma < 10){
			return `Sua soma é ${soma}, que é menor do que 10 e menor do que 20.`;
		}
	}
	return `Sua soma é ${soma}, que é maior do que 10 e menor do que 20.`;
}
console.log(comparaNumeros());