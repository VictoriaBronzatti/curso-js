const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}', 
    '{"nome": "Kit de Lapis", "preco": 41.22}', 
    '{"nome": "Caneta", "preco": 7.50}', 
]

//retornar um array apenas com os preços 
// o jeito que eu fiz 
/*let resultado = carrinho.map(function(e){
    return e
})
console.log(resultado)

const preco = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = carrinho.map(preco)
console.log(preco)*/

// o jeito certo de fazer
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)