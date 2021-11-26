const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))// aqui pega todas as chaves da constante 
console.log(Object.values(pessoa))// aqui vai pegar todos os valores da constante
console.log(Object.entries(pessoa))// aqui ele vai te dar um array com todos os subs array com chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}); // destruturando um array

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable: false,
    value: '01/01/2019'
}) // vc quer definir uma propriedade... e vc tbm pode difinir algumas caracteriscas de propriedade
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)