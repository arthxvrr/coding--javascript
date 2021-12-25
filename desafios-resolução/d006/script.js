function formatar(f) {
    return f.toLocaleString('pt-BR')
}

function converter() {
    var celsius = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    var kelvin = celsius + 273.15
    var fahrenheit = (celsius * 9/5) + 32
    var texto = document.getElementById('texto')
    var res = document.getElementById('res')
    texto.innerHTML = `A temperatura de ${formatar(celsius)}°C, corresponde a...`
    res.innerHTML = `<p>${formatar(kelvin)}ºK (Kelvin)</p>
<p>${formatar(fahrenheit)}°F (Fahrenheit)</p>`
}