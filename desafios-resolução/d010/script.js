function calcular() {
    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c = Number(prompt('Qual é o valor de c?'))
    var delta = (-b)**2 - 4 * a * c
    var texto = document.getElementById('texto')
    var res = document.getElementById('res')
    texto.innerText = `Resolvendo Bhaskara`
    res.innerHTML = `A equação atual é <strong>${a}x<sup>2</sup>+${b}x + 2 = 0</strong>
<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p></strong>
O valor calculado foi <strong><span id="deltaspan"> &Delta; = ${delta}</span></strong>`
}