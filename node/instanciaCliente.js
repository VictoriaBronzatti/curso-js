const contatorA = require('./instanciaUnica')
const contatorB = require('./instanciaUnica')

const contatorC = require('./instanciaNova')(/*aqui estou chamando uma função lá da intanciaNova*/)
const contatorD = require('./instanciaNova')()

contatorA.inc()
contatorA.inc()
console.log(contatorB.valor)

contatorC.inc()
contatorC.inc()
console.log(contatorC.valor, contatorD.valor)