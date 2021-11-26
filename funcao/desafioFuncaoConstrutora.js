/*class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Victória')
p1.falar()


const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Victória')
p2.falar()*/ // fiz errado

//certo
function Pessoa(nome) {
        this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Victória')
p1.falar()
