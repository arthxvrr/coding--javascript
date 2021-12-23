function iniciar() {
    var nome = String(prompt('Qual é o seu nome?'))
    var idade = Number(prompt(`Olá, ${nome}! Quantos anos você tem?`))
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}