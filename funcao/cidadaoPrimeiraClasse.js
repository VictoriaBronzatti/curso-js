//Função em JS é First-class Object (Citizens)
// Higher-order function

//criar de forma literal
function fun1(){ }

//aqui vc pode armazenar em uma variável
const fun2 = function() { } //uma função anonima

//vc pode amarzenar uma função em um array
const array = [function(a, b) { return a + b}, fun1, fun2]

// Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//passar função como param
function run(fun) {
    fun()
}
run(function () {console.log('Executando...')})

//uma função pode retornar/conter um função
function soma (a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3) ()