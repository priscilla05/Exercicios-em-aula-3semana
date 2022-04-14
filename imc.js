//Exemplo4:Vamos criar uma função que calcula o IMC de uma pessoa, 
//dado a altura em m e a massa em kg.


function calcularImc(peso,altura){
    const alturaAoQuadrado = Math.pow(altura,2)
    const valorImc = peso/ alturaAoQuadrado
    
    return `O resultado é ${valorImc.toFixed(2)}`
}

console.log(calcularImc(92, 1.7))