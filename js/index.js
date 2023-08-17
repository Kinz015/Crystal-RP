const dinheiroSujo = document.querySelector('#dinheiroSujo')
const porcentagem = document.querySelector('#porcentagem')
const inputDinheiroPraMaquina = document.querySelector('#dinheiroPraMaquina')

document.querySelector('#lavarDinheiro').addEventListener('click', function () {
    const valorDaPorcentagem = Number(porcentagem.value) * Number(dinheiroSujo.value) / 100

    const dinheiroPraMaquina = Number(dinheiroSujo.value) * 15 / 100

    const dinheiroPraFaccao = valorDaPorcentagem - dinheiroPraMaquina

    const dinheiroProCliente = Number(dinheiroSujo.value) - Number(valorDaPorcentagem)

    console.log(dinheiroPraMaquina)
    console.log(dinheiroProCliente)
    console.log(dinheiroPraFaccao)
    console.log(valorDaPorcentagem)
})


