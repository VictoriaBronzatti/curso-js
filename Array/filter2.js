Array.prototype.filter2 = (function(callback){
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)){
            newArray.push(this[index]) 
        }
    }
    return newArray
})

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Videro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]


console.log(produtos.filter2(function(p){
    return p.preco > 2400

}))

const caro = produto => produto.preco >= 500
const fragil = produto => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))