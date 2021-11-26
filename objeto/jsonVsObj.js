// json é um formato mais simples e direto e dá pra usar em qualquer linguagem pq qualquer maquina consegue ler ele

const obj = { a: 1, b:2, c:3, soma() {return a + b + this.c}} // vou converter esse obj para um formato JSON
console.log(JSON.stringify(obj)) // aqui estou pegando um obj e passando para json

// aqui estou pegando um JSON e transformando em um objeto
//console.log(JSON.parse("{ a: 1, b: 2, c:3 }")) // aqui deu erro pq ele não esperava o token 

// melhorando o code de cima
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))// tbm não é um formato valido pq ele está com ''


console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // esse deu certo pq o JSON tem que ser delimitado com " "
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))