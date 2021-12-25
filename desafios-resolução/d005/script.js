function formatar(f) {
    return f.toLocaleString('pt-BR')
}

function converter() {
    document.getElementById('res').innerHTML = ''
    var metros = Number(prompt('Digite uma distância em metros (m)'))
    var texto = document.getElementById('texto')
    var res = document.getElementById('res')
    var medidas = ['quilômetros (Km)', 'hectômetros (Hm)', 'decâmetros (Dam)',
                  'decímetros (dm)', 'centímetros (cm)', 'milímetros (mm)']
    var valores = [1000, 100, 10, 10, 100, 1000]
    texto.innerHTML = `A distância de ${formatar(metros)} metros, corresponde a...`
    for (let index = 0; index < medidas.length; index++) {
        const medida = medidas[index];
        const valor = valores[index];
        if (index < 3){
            res.innerHTML += `<p>${formatar(metros / valor)} ${medida}</p>`
        } else {
            res.innerHTML += `<p>${formatar(metros * valor)} ${medida}</p>`
        }
    }    
}