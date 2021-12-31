function verificar() {
    var ano = Number(prompt('Qual é o ano que você quer verificar?'))
    var texto = document.querySelector('div#texto')
    var res = document.querySelector('p#res')
    texto.innerText =  `Analisando o ano de ${ano}`
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        res.innerHTML = `O ano de ${ano} <span id="bissexto"><strong>É BISSEXTO </strong></span>✅`
    } else {
        res.innerHTML = `O ano de ${ano} <span id="naobissexto"> <strong>NÃO É BISSEXTO </strong></span>❌`
    }
}