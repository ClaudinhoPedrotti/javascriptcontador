function filtrarPares(array) {
    return array.filter(pares);
}

function pares(item) {
    return item % 2 === 0;
}

function filtrarImpares(array) {
    return array.filter(impares);
}

function impares(item) {
    return item % 2 !== 0;
}

const nums = [1, 2, 3, 4, 5, 6]

console.log('Seu array original é', nums, 'e os pares dele são:', filtrarPares(nums));
console.log('Seu array original é', nums, 'e os impares dele são:', filtrarImpares(nums));