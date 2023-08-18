const dinheiroSujo = document.querySelector('#dinheiroSujo')
const porcentagem = document.querySelector('#porcentagem')
const lavarDinheiro = document.querySelector('#lavarDinheiro')
const divMaquina = document.querySelector('.results1')
const divCliente = document.querySelector('.results2')
const divFaccao = document.querySelector('.results3')
const spanBtnCopy = document.querySelector('#spanBtnCopy')




lavarDinheiro.addEventListener('click', function calculate() {



        const valorDaPorcentagem = Number(porcentagem.value) * Number(dinheiroSujo.value) / 100

        const dinheiroPraMaquina = Number(dinheiroSujo.value) * 15 / 100

        const dinheiroProCliente = Number(dinheiroSujo.value) - Number(valorDaPorcentagem)
        
        const dinheiroPraFaccao = valorDaPorcentagem - dinheiroPraMaquina

        const resultDollarMaquina = document.createElement('div')
        resultDollarMaquina.classList.add('resultDinheiro')

        const resultDinheiroPraMaquina = document.createElement('p')
        resultDinheiroPraMaquina.textContent = dinheiroPraMaquina
        resultDollarMaquina.append(`R$`, resultDinheiroPraMaquina)
        const spanDinheiroPraMaquina = document.createElement('span')
        spanDinheiroPraMaquina.append(resultDollarMaquina)
        divMaquina.append(spanDinheiroPraMaquina)


        const resultDollarCliente = document.createElement('div')
        resultDollarCliente.classList.add('resultDinheiro')

        const resultDinheiroProCliente = document.createElement('p')
        resultDinheiroProCliente.textContent = dinheiroProCliente
        resultDollarCliente.append(`R$`, resultDinheiroProCliente)
        const spanDinheiroProCliente = document.createElement('span')
        spanDinheiroProCliente.append(resultDollarCliente)
        divCliente.append(spanDinheiroProCliente)

        const resultDollarFaccao = document.createElement('div')
        resultDollarFaccao.classList.add('resultDinheiro')

        const resultDinheiroPraFaccao = document.createElement('p')
        resultDinheiroPraFaccao.textContent = dinheiroPraFaccao
        resultDollarFaccao.append(`R$`, resultDinheiroPraFaccao)
        const spanDinheiroPraFaccao = document.createElement('span')
        spanDinheiroPraFaccao.append(resultDollarFaccao)
        divFaccao.append(spanDinheiroPraFaccao)

        
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
            navigator.clipboard.writeText(
            `Valor total sujo: R$ ${dinheiroSujo.value}
Porcentagem: R$ ${porcentagem.value}%
Dinheiro pro cliente: R$ ${dinheiroProCliente} 
Dinheiro pra facção: R$ ${dinheiroPraFaccao}`)


          } else {
            button.innerText = "Copiar"
            button.classList.remove("success")
          }
    })  
})



