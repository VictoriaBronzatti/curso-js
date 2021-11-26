//classe é convertido em função
class lancamento { // constructor que é a função por padrão ela é chamada no momento que essa classe for intanciada pelo fator new
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano 
        this.lancamento = []
    }
    addLancamentos(...lancamentos ){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }


    sumario() {
        let valorConsolidado = 0 
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Luz', -220) //quando eu quero fazer um lançamento eu coloco negativo

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz) // por conta do operador na linha 15 eu consigo chamar nesta função pq ele aceita variaveis 
console.log(contas.sumario())