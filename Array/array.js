//array é uma estrutura dinamica, ele cresce e diminui facilmente  //no js é um objeto // function + new = object

let aprovados = new Array ('Bia', 'Carlos', 'Ana')// está não é a melhor opção de extanciar um array
console.log(aprovados)

// agora vou reatribuir a variavel aprovados, por isso usei let e não const
aprovados =['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // aqui quero dizer que estou acessando a primeira estrutura do array (por isso o 0)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' // esse método é mais apropriado para substituir um elemento 
aprovados.push('Abia') // esse é o mais apropriado para add um elemento 
console.log(aprovados.length) // length -> tamanho(quantidade) do array

aprovados[9] = 'Rafael' // aqui ele vai add o 5, 6, 7, 8, só que ele vão ficar como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //aqui ele altera o array por inteiro
console.log(aprovados)

delete aprovados [1] // aqui ele vai deletar, mas não vai excluir do array, apatir deste comando ele vai se tornar undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //splice -> sertve tanto apara add elementos em certos indices, quanto para excluir elementos em certos indices e add e exclui ao mesmo tempo EX: aprovados.splice(1// aqui está add, 1// aqui está excluindo)
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') // Elemento 1 e 2 estão sendo add

console.log(aprovados)