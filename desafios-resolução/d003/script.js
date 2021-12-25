function calcular() {
    var numero = Number(prompt('Digite um número inteiro qualquer'))
    var antecessor = numero - 1
    var sucessor = numero + 1
    alert(`Antes de ${numero} temos o número ${antecessor},
Depois de ${numero}, temos o número ${sucessor}`)
}