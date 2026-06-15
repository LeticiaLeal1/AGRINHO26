function verificarQuiz(){

    const respostasCorretas =
        document.querySelectorAll(".correta");

    let pontos = 0;

    respostasCorretas.forEach(item => {

        if(item.checked){
            pontos++;
        }

    });

    const resultado =
        document.getElementById("resultado");

    if(pontos === 3){

        resultado.innerHTML =
        "🎉 Parabéns! Você conhece práticas importantes para fortalecer um agro sustentável.";

    }else if(pontos === 2){

        resultado.innerHTML =
        "👍 Muito bem! Você já conhece várias ações sustentáveis.";

    }else{

        resultado.innerHTML =
        "📚 Continue aprendendo sobre sustentabilidade no campo e tente novamente.";

    }

}
