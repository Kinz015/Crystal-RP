const dinheiroSujo = document.querySelector('#dinheiroSujo')
const porcentagem = document.querySelector('#porcentagem')
const spanDinheiroPraMaquina = document.querySelector('#spanDinheiroPraMaquina')
const spanDinheiroProCliente = document.querySelector('#spanDinheiroProCliente')
const spanDinheiroPraFaccao = document.querySelector('#spanDinheiroPraFaccao')
const spanBtnCopy = document.querySelector('#spanBtnCopy')



document.querySelector('#lavarDinheiro').addEventListener('click', function () {

        const valorDaPorcentagem = Number(porcentagem.value) * Number(dinheiroSujo.value) / 100

        const dinheiroPraMaquina = Number(dinheiroSujo.value) * 15 / 100

        const dinheiroProCliente = Number(dinheiroSujo.value) - Number(valorDaPorcentagem)
        
        const dinheiroPraFaccao = valorDaPorcentagem - dinheiroPraMaquina
        
        const dollarMaquina = document.createElement('span')
        dollarMaquina.classList.add('material-symbols-outlined')
        dollarMaquina.textContent = 'attach_money'
        dollarMaquina.style.fontSize = '1em'
        dollarMaquina.style.marginTop = '8px'

        const resultDollarMaquina = document.createElement('div')
        resultDollarMaquina.classList.add('resultDinheiro')

        const resultDinheiroPraMaquina = document.createElement('p')
        resultDinheiroPraMaquina.textContent = dinheiroPraMaquina
        resultDollarMaquina.append(dollarMaquina, resultDinheiroPraMaquina)
        spanDinheiroPraMaquina.append(resultDollarMaquina)

        const dollarCliente = document.createElement('span')
        dollarCliente.classList.add('material-symbols-outlined')
        dollarCliente.textContent = 'attach_money'
        dollarCliente.style.fontSize = '1em'
        dollarCliente.style.marginTop = '8px'

        const resultDollarCliente = document.createElement('div')
        resultDollarCliente.classList.add('resultDinheiro')

        const resultDinheiroProCliente = document.createElement('p')
        resultDinheiroProCliente.textContent = dinheiroProCliente
        resultDollarCliente.append(dollarCliente, resultDinheiroProCliente)
        spanDinheiroProCliente.append(resultDollarCliente)

        const dollarFaccao = document.createElement('span')
        dollarFaccao.classList.add('material-symbols-outlined')
        dollarFaccao.textContent = 'attach_money'
        dollarFaccao.style.fontSize = '1em'
        dollarFaccao.style.marginTop = '8px'

        const resultDollarFaccao = document.createElement('div')
        resultDollarFaccao.classList.add('resultDinheiro')

        const resultDinheiroPraFaccao = document.createElement('p')
        resultDinheiroPraFaccao.textContent = dinheiroPraFaccao
        resultDollarFaccao.append(dollarFaccao, resultDinheiroPraFaccao)
        spanDinheiroPraFaccao.append(resultDollarFaccao)
        
        console.log(valorDaPorcentagem)

        const copyBtn = document.createElement('button')
        copyBtn.classList.add('copy-btn')
        copyBtn.textContent = 'Copiar'
        spanBtnCopy.append(copyBtn)
        
        copyBtn.addEventListener('click', function (ev) {
        const button = ev.currentTarget
        if (button.innerText === "Copiar") {
            button.innerText = "Copiado!"
            button.classList.add("success")
            navigator.clipboard.writeText(resultInput.value)
          } else {
            button.innerText = "Copiar"
            button.classList.remove("success")
          }
    })    
})



