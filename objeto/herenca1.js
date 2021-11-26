//o objetivo da herença é criar um mecanismo para que esse reuso de codigo 
// na herença vc só tem um pai 
// *Object.prototype* o atributo prototype só está disponivel com uma função -> Object
const ferrarri = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrarri.__proto__)
console.log(ferrarri.__proto__=== Object.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //para acessar o prototipo na herença é .__proto__

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype) // null