function formatar(f) {
    return f.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function calcular() {
    var nome_produto = String(prompt('Qual é o produto que você está comprando?'))
    var preco_original = Number(prompt(`Qual é o preço de ${nome_produto}?`))
    var desconto = preco_original * 0.10
    var preco_final = preco_original - desconto
    var texto = document.getElementById('texto')
    var res = document.getElementById('res')
    texto.innerText = `Calculando desconto de 10% para ${nome_produto}`
    res.innerHTML = `<p>O preço original era de ${formatar(preco_original)}.</p>
<p>Você acaba de ganhar ${formatar(desconto)} de desconto (-10%).</p>
No fim, você vai pagar ${formatar(preco_final)} no produto ${nome_produto}.`
}