// retornar uma nova instancia, sendo que o node libera um cache
// factory retona um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}