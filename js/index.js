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

const blocoResults = document.querySelector('.blocoResults')

const copyBtn = document.createElement('button')

const err = document.querySelector('#porcentError')

dinheiroSujo.addEventListener("keypress", function(e) {
    if (!checkChar(e)) {
      e.preventDefault();
    }
})
const resticao = '[0-9]'

function checkChar(e) {
  const char = String.fromCharCode(e.charCode);

  if (char.match(resticao)) {
    return true;
  }
}
// dinheiroSujo.value = '$ ' 

porcentagem.addEventListener("keypress", function(e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
})

function checkChar(e) {
const char = String.fromCharCode(e.charCode);

if (char.match(resticao)) {
  return true;
}
}

porcentagem.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    porcentagem.value = ''
  }
});

porcentagem.addEventListener('input', () => {
      let inputText = porcentagem.value;
      if (inputText.length === 2) {
        porcentagem.value = inputText +'%';
      }
});


lavarDinheiro.addEventListener('click', function calculate() {
  const positionValue = 1
  // let dinheiroSujoNumber = dinheiroSujo.value.slice(positionValue)
  // console.log(dinheiroSujoNumber)
  porcentagemNumber = porcentagem.value[0] += porcentagem.value[1]

  if (resultDinheiroPraMaquina.value.length  > 0) {
    resultDinheiroPraMaquina.value = ''
    resultDinheiroProCliente.value = ''
    resultDinheiroPraFaccao.value = ''
  }

  if (porcentagemNumber < 30 || porcentagemNumber > 100) {
    err.textContent = 'O valor da porcentagem deve ser acima de 30%'
  } else {
    err.textContent = ''
    let valorDaPorcentagem = Number(porcentagemNumber) * Number(dinheiroSujo.value) / 100

    let dinheiroPraMaquina = Number(dinheiroSujo.value) * 15 / 100

    let dinheiroProCliente = Number(dinheiroSujo.value) - Number(valorDaPorcentagem)
    
    let dinheiroPraFaccao = valorDaPorcentagem - dinheiroPraMaquina

    let resultDinheiroPraMaquinaFormatted = new Intl.NumberFormat('pt-BR', {
      currency: 'USD'
    }).format(dinheiroPraMaquina)

    resultDinheiroPraMaquina.disabled = true
    resultDinheiroPraMaquina.value = `R$ ${resultDinheiroPraMaquinaFormatted}`
    resultDinheiroPraMaquina.classList.add('resultDinheiro')
    spanDinheiroPraMaquina.append(resultDinheiroPraMaquina)
    divMaquina.append(spanDinheiroPraMaquina)

    let resultDinheiroProClienteFormatted = new Intl.NumberFormat('pt-BR', {
      currency: 'USD'
    }).format(dinheiroProCliente)

  resultDinheiroProCliente.disabled = true
    resultDinheiroProCliente.value = `R$ ${resultDinheiroProClienteFormatted}`
    resultDinheiroProCliente.classList.add('resultDinheiro')
    spanDinheiroProCliente.append(resultDinheiroProCliente)
    divCliente.append(spanDinheiroProCliente)

    let resultDinheiroPraFaccaoFormatted = new Intl.NumberFormat('pt-BR', {
      currency: 'USD'
    }).format(dinheiroPraFaccao)

    resultDinheiroPraFaccao.disabled = true
    resultDinheiroPraFaccao.value = `R$ ${resultDinheiroPraFaccaoFormatted}`
    resultDinheiroPraFaccao.classList.add('resultDinheiro')
    spanDinheiroPraFaccao.append(resultDinheiroPraFaccao)
    divFaccao.append(spanDinheiroPraFaccao)

    blocoResults.classList.add('modificadBlocoResults')

    console.log(valorDaPorcentagem)
    console.log(dinheiroPraMaquina)
    console.log(dinheiroProCliente)
    console.log(dinheiroPraFaccao)

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
Porcentagem: R$ ${porcentagem.value}
Dinheiro pro cliente: R$ ${dinheiroProCliente} 
Dinheiro pra facção: R$ ${dinheiroPraFaccao}`)
      } else {
        button.innerText = "Copiar"
        button.classList.remove("success")
      }
})
  }    
})




