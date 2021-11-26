//this varia de acordo com a forma que vc chama a função
//this não aponta para document
//função arrow
//** pesquisar this com arrow

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()


const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

// o bind é aonde vc passa o objeto que vc quer q seja resolvido no this
const falarDePessoa = pessoa.falar.bind(pessoa ) // pessoa será o this nesta função
falarDePessoa()

//this e bind 2
function Pessoa() {
    this.idade =  0
 //setInterval = ela dispara outra função a partir de um intervalo que vc passou

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this)/* neste caso o bind está fazendo com que o this aponte para pessoa, pq sem ele, não está apontando para lugar algum e sim só ativando o temporizador que é o 1000*/, 1000) 
}
new Pessoa


