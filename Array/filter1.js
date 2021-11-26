const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Videro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p)/* aqui está passando uma callback*/{
    return false

}))
console.log(produtos.filter(function(p)/* aqui está passando uma callback*/{
    return p.preco > 2400

}))

const caro = produto => produto.preco >= 500
const fragil = produto => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))/* aqui está passando uma callback*/
