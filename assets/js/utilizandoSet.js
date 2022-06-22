const array = [30, 30, 40, 40, 50, 51, 52, 52, 54];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    console.log(`O seu array era ${array} e agora é `);
    return [...mySet];

}
console.log(valoresUnicos(array));
