function formatar(f) {
    return f.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function formatar_variacao(v) {
    return v.toLocaleString('pt-BR')
}

function verificar() {
    var preco_anterior = Number(prompt('Qual era o preço anterior do produto?'))
    var preco_atual = Number(prompt('Qual era o preço atual do produto?'))
    var texto = document.querySelector('div#texto')
    var res = document.querySelector('p#res')
    texto.innerHTML = `Analisando os valores informados`
    if (preco_anterior > preco_atual) {
        var queda_preco = preco_anterior - preco_atual
        var variacao_baixo = (preco_anterior/preco_atual-1)*100
        res.innerHTML = `<p>O produto custava ${formatar(preco_anterior)} e agora custa ${formatar(preco_atual)}.</p>
    <p>Hoje o produto está mais barato.</p>
    <p>O preço caiu ${formatar(queda_preco)} em relação ao preço anterior.</p>
    <p>Uma variação de ${formatar_variacao(variacao_baixo)}% pra baixo.</p>`
    } else if (preco_atual > preco_anterior) {
        var aumento_preco = preco_atual - preco_anterior
        var variacao_cima = (preco_atual/preco_anterior-1)*100
        res.innerHTML = `<p>O produto custava ${formatar(preco_anterior)} e agora custa ${formatar(preco_atual)}.</p>
    <p>Hoje o produto está mais caro.</p>
    <p>O preço subiu ${formatar(aumento_preco)} em relação ao preço anterior.</p>
    <p>Uma variação de ${formatar_variacao(variacao_cima)}% pra cima.</p>`
    } else {
        res.innerHTML = `<p>O produto custava ${formatar(preco_anterior)} e agora custa ${formatar(preco_atual)}.</p>
        <p>Hoje o produto está com o mesmo preço.</p>
        <p>O preço não sofreu alteração.</p>
        <p>Não houve variação de preço.</p>`
    }
}