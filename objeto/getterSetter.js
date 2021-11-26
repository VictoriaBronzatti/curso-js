//getter - um metodo para ler uma variavel 
//setter - um medtodo para alterar uma varial

const sequencia = {
    _valor: 1, // convenção, vc está mostrando para outros devs que está variável está sendo pretendida ser acessar apenas internamente
    get valor() { return this._valor++},
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor // validação 
        }
    }
}

// PARA ACESSAR O METODO GETTER E SETTER
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
