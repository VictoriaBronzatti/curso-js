const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // o pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // add um novo elemento no Array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento 
console.log(pilotos)

pilotos.unshift('Hamilton') // add no inicio da lista
console.log(pilotos)

// splice pode adicionar e remover elementos 

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//slice vc pega uma parte do array 
const algunsPilotos1 = pilotos.slice(2) // novo array, aqui ele pega apartir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// aqui ele não pega o 1 e nem o 4
console.log(algunsPilotos2)

