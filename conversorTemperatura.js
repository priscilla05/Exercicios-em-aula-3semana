// Exemplo6:Crie uma função que recebe uma temperatura em 
//graus celsius retorna o valor convertido em Fahrenheit.

function converterTemperatura(temperaturaCelcius){
    const temperaturaFahrenheit = (temperaturaCelcius * 9/5) + 32
    return `A temperatura convertida é ${temperaturaFahrenheit}F`
     
}
const resultado = converterTemperatura(38)
console.log(resultado)