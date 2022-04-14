// Utilizando os conceitos que estudamos, 
//vamos criar um programa que funcionará como um sinal de transito.

//const cor = "verde"

/*if(cor== "vermelho"){
    console.log ("pare! Risco de acidente")
} else if (cor == "amarelo") {
    console.log("atenção")
    } else if (cor == "verde") {
    console.log("siga de boas")
    } else {
    console.log("não tem essa cor")
    }*/

    // fazendo com switch
function informarTransito(corFarol) {
switch(corFarol){
    case "vermelha":
        return "Pare!"
    case "amarela":
        return "Atenção"
    case "verde":
        return "siga"
     default:
            return "não tem essa cor"
  }
}
console.log(informarTransito("Verde".toLocaleLowerCase()))



