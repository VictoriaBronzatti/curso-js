// a função carrega consigo o local aonde foi definido e então ela vai procurar dentro do escopo lexico aonde ela foi definida ( mas não no local de excusão mas sim, no local aonde foi definida)
const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()