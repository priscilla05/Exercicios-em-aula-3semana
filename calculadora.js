/*Exemplo10: Vamos criar uma calculadora com as 4 operações matemáticas básicas
a. Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
b. Deverá ser possível passar 2 números para a operação escolhida
c. Deverá retornar o resultado e imprimir no console*/

function calcula(operador, num1, num2){
    let resultado
    if(operador === "soma"){
        resultado = num1 + num2
        return resultado
    } else if(operador === "multiplicacao"){
        resultado = num1 * num2
        return resultado
    } else if (operador === "divisao"){
        resultado = num1 / num2
        return resultado
    }else if(operador === "subtracao"){
        resultado = num1 - num2
        return resultado
   }else {
      `$ {operador} é válido`
   }
    }
     console.log(calcula("subtracao", 17, 9)) // 8

