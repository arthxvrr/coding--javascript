function formatar(f) {
    return f.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function comprar() {
    var nome_produto = String(prompt('Que produto você está comprando?'))
    var preco_produto = Number(prompt(`Quanto custa ${nome_produto} que você está comprando?`))
    var pago = Number(prompt(`Qual foi o valor que você deu para pagar ${nome_produto}?`))
    var troco = pago - preco_produto
    alert(`Você comprou ${nome_produto} que custou ${formatar(preco_produto)}.
Deu ${formatar(pago)} em dinheiro e vai receber ${formatar(troco)} de troco.
Volte sempre!`)
}