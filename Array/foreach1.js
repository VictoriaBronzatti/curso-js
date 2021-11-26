// funções callback
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// para cada elementos do array a função acima será chamada
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1/*como o indice começa com 0 temos que colocar o +1 para ele começar do 1 */}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

//aqui vc vai armarzenar a função em um variável e passar essa função por parametro forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
