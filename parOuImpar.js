//Exemplo5: Crie uma função que determina se um número é par ou impar.



function descobrirParOuImpar(numero){

    if(numero %2 == 0){
        return `${numero} é par`

    }else{
        return `${numero} é ímpar`
    }
}
const resultado = descobrirParOuImpar(68)
console.log(resultado)

