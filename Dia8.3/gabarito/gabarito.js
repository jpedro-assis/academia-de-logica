const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 78,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 78,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];
/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares -> refazer com map
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
* 4 - // Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais 

// ex: id: 8 e quantidade: 2 preço total: 432
*/

let arrayVazio = []
const arrayProd = () => {
    techProducts.forEach(produto => {
        if (produto.id % 2 === 0) {
            arrayVazio.push(produto.name)
        }
    })
    return arrayVazio
}


const over300 = techProducts.some((produto) => produto.price > 3000)

const totalPrice = (id, qtd) => techProducts.find((produto) => produto.id === id).price * qtd


const EqualPrice = (price) => {
    return techProducts.filter(produtos => produtos.price === price)

}





