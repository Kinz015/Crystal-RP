const dinheiroSujo = document.querySelector('#dinheiroSujo')
const porcentagem = document.querySelector('#porcentagem')
const lavarDinheiro = document.querySelector('#lavarDinheiro')

const divMaquina = document.querySelector('.results1')
const divCliente = document.querySelector('.results2')
const divFaccao = document.querySelector('.results3')

const spanBtnCopy = document.querySelector('#spanBtnCopy')

const resultDinheiroPraMaquina = document.createElement('input')
const spanDinheiroPraMaquina = document.createElement('span')
const resultDinheiroProCliente = document.createElement('input')
const spanDinheiroProCliente = document.createElement('span')
const resultDinheiroPraFaccao = document.createElement('input')
const spanDinheiroPraFaccao = document.createElement('span')

lavarDinheiro.addEventListener('click', function calculate() {

        if (resultDinheiroPraMaquina.value.length  > 0) {
          resultDinheiroPraMaquina.value = ''
          resultDinheiroProCliente.value = ''
          resultDinheiroPraFaccao.value = ''
        }

        let valorDaPorcentagem = Number(porcentagem.value) * Number(dinheiroSujo.value) / 100

        let dinheiroPraMaquina = Number(dinheiroSujo.value) * 15 / 100

        let dinheiroProCliente = Number(dinheiroSujo.value) - Number(valorDaPorcentagem)
        
        let dinheiroPraFaccao = valorDaPorcentagem - dinheiroPraMaquina

        resultDinheiroPraMaquina.disabled = true
        resultDinheiroPraMaquina.value = `R$ ${dinheiroPraMaquina}`
        resultDinheiroPraMaquina.classList.add('resultDinheiro')
        spanDinheiroPraMaquina.append(resultDinheiroPraMaquina)
        divMaquina.append(spanDinheiroPraMaquina)

        resultDinheiroProCliente.disabled = true
        resultDinheiroProCliente.value = `R$ ${dinheiroProCliente}`
        resultDinheiroProCliente.classList.add('resultDinheiro')
        spanDinheiroProCliente.append(resultDinheiroProCliente)
        divCliente.append(spanDinheiroProCliente)

        resultDinheiroPraFaccao.disabled = true
        resultDinheiroPraFaccao.value = `R$ ${dinheiroPraFaccao}`
        resultDinheiroPraFaccao.classList.add('resultDinheiro')
        spanDinheiroPraFaccao.append(resultDinheiroPraFaccao)
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



