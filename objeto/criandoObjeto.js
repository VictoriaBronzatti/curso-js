// 1. usando a notação literal ....... NÃO CONFUNDIR NOTAÇÃO LITERAL COM JSON
const obj1 = {}
console.log(obj1)

// 2. Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// 3. funções construtora
function Produto(nome, preco, desc) { // preco e desc está encapsulado 
    this.nome = nome // estou tornando ela publica 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4. função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// 5. uma função famosa que retorna Objeto... JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // quando vc tem um WebServece que retorna um JSON e ai vc vai transformar ele em objeto para poder manipular como um objeto e não um texto