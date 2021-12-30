function formatar(f) {
    return f.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function reajustar() {
    var nome_funcionario = String(prompt('Qual é o nome do funcionário?'))
    var salario_funcionario = Number(prompt(`Qual é o salário de ${nome_funcionario}`))
    var porcentagem = Number(prompt(`O salário de ${nome_funcionario} vai ser reajustado em qual porcentagem?`))
    var reajuste = salario_funcionario * porcentagem/100
    var novo_salario = salario_funcionario + reajuste
    var texto = document.querySelector('div#texto')
    var res = document.querySelector('p#res')
    texto.innerHTML = `${nome_funcionario} recebeu um aumento salarial!`
    res.innerHTML = `<p>O salário atual era ${formatar(salario_funcionario)}.</p>
    <p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${formatar(reajuste)} no próximo mês.</p>
    <p>E a partir daí, ${nome_funcionario} vai passar a ganhar ${formatar(novo_salario)}</p>`   
}