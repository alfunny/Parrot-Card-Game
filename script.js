//quantasCartas será variavel global pois será usada na função distribuicaoDeCartas


function iniciarJogo() {
    let quantasCartas = parseInt(prompt("Quantas cartas?"));




    while (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
        quantasCartas = parseInt(prompt("tente outro valor"));
    }

    const elementoEntrada = document.querySelector('.page-wrapper-inicial');
    elementoEntrada.classList.add('escondido');

    const elementoPrincipal = document.querySelector('.page-wrapper-principal');
    elementoPrincipal.classList.remove('escondido');

}

