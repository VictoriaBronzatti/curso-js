const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//passando as informações que estão no servidor para a minha maquina com o método *Get*
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})