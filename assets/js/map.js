const maca = {
    value: 2,
}

const orange = {
    value: 3,
}


function utilizandoMap(array, thisArg) {
    return array.map(function(item){
       return item * this.value;
    }, thisArg)

}

const nums = [1, 2]

console.log('Utilizando o This e testando com a maçã', utilizandoMap(nums, maca));
console.log('Utilizando o This e testando com a Orange', utilizandoMap(nums, orange));