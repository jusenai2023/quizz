//criamos a função que verifica se uma resposta é correta//
const resultado = document.getElementById("resultado")
//Questão01//
function verificarResposta__1(resposta){
    if(resposta === "d"){
        resultado.innerHTML = " Resposta correta";
        resultado.style.color = "green"
    } else {
        resultado.innerHTML = " Resposta incorreta";
        resultado.style.color = "red"
    }
}
//Questão02//
function verificarResposta__2(resposta){
    if(resposta === "e"){
        resultado.innerHTML = " Resposta correta";
        resultado.style.color = "green"
    } else {
        resultado.innerHTML = " Resposta incorreta";
        resultado.style.color = "red"
    }
}
//Questão03//
function verificarResposta__3(resposta){
    if(resposta === "a"){
        resultado.innerHTML = " Resposta correta";
        resultado.style.color = "green"
    } else {
        resultado.innerHTML = " Resposta incorreta";
        resultado.style.color = "red"
    }
}

