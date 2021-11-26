const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
} // a ideia do callback é vc passar uma função para outra função e com determido evento acontecer, essa função que vc passou, vai ser disparada vai ser chamada de volta... a função callback pode ser chamada várias vezes ou apenas uma unica vez

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

//ou

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante =>console.log(fabricante))
// o callback é básicamente vc chamar uma função quando este evento acontecer... o evento é um loop 