let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
//a função arrow é uma função anonima 

dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())

//this na função Arrow é um this fixo 
