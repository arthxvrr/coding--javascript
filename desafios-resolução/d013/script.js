function formatar(f) {
    return f.toLocaleString('pt-BR')
}

function entrar_notas() {
    var nome_aluno = String(prompt('Qual é o nome do aluno?'))
    var nota1 = Number(prompt(`Primeira nota de ${nome_aluno}:`))
    var nota2 = Number(prompt(`Segunda nota de ${nome_aluno}:`))
    var media = (nota1 + nota2)/2
    var texto = document.getElementById('texto')
    var res = document.getElementById('res')
    texto.innerText = `Analisando a situação de ${nome_aluno}`
    if (media < 3){
        res.innerHTML = `<p>Com as notas ${formatar(nota1)} e ${formatar(nota2)}, a <strong> média ${formatar(media)}</strong></p>
    <p>Com média abaixo de 3,0, o aluno está <strong><span id="reprovado">REPROVADO</span></strong></p>`
    } else if (media >= 3 && media < 6){
        res.innerHTML = `<p>Com as notas ${formatar(nota1)} e ${formatar(nota2)}, a <strong> média é ${formatar(media)}</strong></p>
    <p>Com média entre 3,0 e 6,0, o aluno está em <strong><span id="recuperacao">RECUPERAÇÃO</span></strong></p>`
    } else {
        res.innerHTML = `<p>Com as notas ${formatar(nota1)} e ${formatar(nota2)}, a <strong> média é ${formatar(media)}</strong></p>
    <p>Com média acima de 6,0, o aluno está <strong><span id="aprovado">APROVADO</span></strong></p>`
    }
}