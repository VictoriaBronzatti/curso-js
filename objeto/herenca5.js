// String, array e object são function e toda função tem um prototype

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('') // split => aqui vou quebrar a string em cada uma das letras e vou gerar um array que vai ter todas as letras e espaços em brancos tbm
    //reverse => ele vai reverter o array 
    //join => vai juntar novamente todos os elementos nas strings
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5,].first())
console.log(['a', 'b', 'c'].first())