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

        
        const resultDinheiroPraMaquina = document.createElement('p')
        resultDinheiroPraMaquina.classList.add = 'resultDinheiroPraMaquina'
        resultDinheiroPraMaquina.textContent = dinheiroPraMaquina
        spanDinheiroPraMaquina.append(resultDinheiroPraMaquina)

        const resultDinheiroProCliente = document.createElement('p')
        resultDinheiroProCliente.classList.add = 'resultDinheiroProCliente'
        resultDinheiroProCliente.textContent = dinheiroProCliente
        spanDinheiroProCliente.append(resultDinheiroProCliente)

        const resultDinheiroPraFaccao = document.createElement('p')
        resultDinheiroPraFaccao.classList.add = 'resultDinheiroPraFaccao'
        resultDinheiroPraFaccao.textContent = dinheiroPraFaccao
        spanDinheiroPraFaccao.append(resultDinheiroPraFaccao)
        
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



