const list = [

    {
        name: 'Cenoura Kg',
        preco: 5
    },
    {
        name: 'Batata Kg',
        preco: 4
    },
    {
        name: 'Maça Kg',
        preco: 7
    }
]

const meuDinheiro =  30;

function calculaSaldo(meuDinheiro, list) {
    return list.reduce(function (prev, current) {
        return prev - current.preco;
    }, meuDinheiro)
}

console.log('Seu saldo inicial era de', meuDinheiro, 'Você fez as compras e agora sobrou', calculaSaldo(meuDinheiro, list));
