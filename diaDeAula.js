//Exemplo3: Utilizando os conceitos que estudamos, vamos criar um programa que 
//irá nos informar os dias de aula para a nossa turma.

/*let dia = "sabado"
if(dia == "sabado"){
    console.log("Ebaaa!Tem aula")
} else if (dia == "quarta"){
    console.log("Tem a segunda aula da semana")
}else{
    console.log("Não terá aula na nossa turma")
}*/

//Modo switch

function verificarDiaAula(diaDaSemana){
    switch(diaDaSemana){
        case "quarta":
            return "É dia de revisão"
        case "sábado":
            return "É dia de aula"
        default:
            return "Não terá aula"        
    }

 }
  console.log(verificarDiaAula("terça"))
  console.log(verificarDiaAula("quarta"))
  console.log(verificarDiaAula("sábado"))