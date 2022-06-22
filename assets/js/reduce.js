function somaNums(array) {
    return array.reduce(function(prev, current) {
        return prev + current;
    })
}

const nums = [1, 2, 3];

console.log('Sua array original é', nums, ' e agora vamos somar todos os numeros presentes nela >', somaNums(nums));