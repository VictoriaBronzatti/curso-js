console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// this dentro de uma função
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // aqui podemos ver que dentro de uma função o this não aponta para o exports, mas fora sim
    console.log(this === global) // aqui podemos ver que dentro de uma função o this aponta ´para global, e fora de uma função ela não aponta para global

    this.perigo = '...' // aqui está apontando para global
}

this.perigo = '...' // aqui está não apontando para global
logThis()