//Exemplo9:Crie uma função que irá converter uma quantia de real 
//para dolar utilizando a cotação do dia.

function converterRealDolar(real){
    const cotacaoDoDia = 4.68
    const resultadoEmDolar = real / cotacaoDoDia
    return `Real:${real} para dólar ${resultadoEmDolar.toFixed(2)}` 
}
console.log(converterRealDolar(3)) // 0.64

