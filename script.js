// Selecionando os elementos do HTML
const botaoAcao = document.getElementById('botaoAcao');
const mensagem = document.getElementById('mensagem');
const corpoPagina = document.body;

// Função para mudar o texto e a cor ao clicar
botaoAcao.addEventListener('click', () => {
    mensagem.innerText = "🚀 JavaScript Ativado com Sucesso!";
    mensagem.style.color = "#28a745";
    
    // Pequena animação de escala no botão
    botaoAcao.style.transform = "scale(0.95)";
    setTimeout(() => {
        botaoAcao.style.transform = "scale(1)";
    }, 100);
});

// Extra: Função de "Modo Noturno" ao apertar a tecla 'D'
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'd') {
        corpoPagina.style.backgroundColor = "#222";
        corpoPagina.style.color = "#fff";
        console.log("Modo escuro ativado via teclado!");
    }
});