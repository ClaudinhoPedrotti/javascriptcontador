function verificapalindromo(string) {
	if (!string) return 'Desculpa, não consegui localizar a sua palavra';
	palindromo = string.split("").reverse().join("");

    if (string === palindromo) {
		return `Que legal! sua palavra é um palindromo`;
	}
	return `Que pena, sua palavra não é um palindromo`;
}

console.log(verificapalindromo("ovo"))