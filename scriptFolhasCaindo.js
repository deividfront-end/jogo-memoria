function criarFolha() {
    const folha = document.createElement('img');
    folha.src = `folha${Math.floor(Math.random() * 1) + 3}.png`; // Seleciona uma folha aleatória
    folha.classList.add('folha1');
    folha.style.right = `${Math.random() * 100 - 50}%`; // Posição horizontal aleatória entre -50% e 150%
    folha.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório
    folhasContainer.appendChild(folha);
}
folha.src = `folha${Math.floor(Math.random() * 4) + 1}.png`; // Seleciona folhas de 1 a 4