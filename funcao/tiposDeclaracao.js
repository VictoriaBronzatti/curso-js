console.log(soma(3, 4))

// function declaration // aqui vc pode chamar ela antes mesmo de declarar ela... vou mostrar a cima
function soma (x, y) {
    return x + y
}

//function expression --- aqui declaração anonima e vc vai atribuir a uma váriavel ou constante // aqui vc tem que chamar a função somente depois que foi declarada
const sub = function (x, y) {
    return x - y
}

// named function expression // pouco usada // aqui vc tem que chamar a função somente depois que foi declarada
const mult = function mult(x, y) {
    return x * y
}