// map serve para trnsformar um Array em outro Array
const nums = [1, 2, 3, 4, 5]

//for com propósito
let resultado = nums.map(function(e){
    return e * 2 // aqui estou dobrando o meu array
}) 
console.log(resultado) // se eu add o nums, ele vai add o array original, isso significa que o array original não é alterado 

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2/* aqui estou add duas casas decimais*/).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)