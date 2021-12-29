function formatar_dolar(d) {
    return d.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
}

function formatar_real(r) {
    return r.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function converter() {
    var cotacao = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
    var real = Number(prompt('Quantos R$ você tem na carteira?'))
    var dolar = real / cotacao
    var texto = document.getElementById('texto')
    var res = document.getElementById('res')
    texto.innerText = `Com ${formatar_real(real)} você conseguirá comprar...`
    res.innerText = `${formatar_dolar(dolar)}`
}