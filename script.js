// Lista de URLs para imagens de background
const backgrounds = [
    "images/CONSULTORIA.png", // Certifique-se de que os arquivos estejam na mesma pasta ou forneça o caminho correto
    "images/ucm2.jpeg",
    "images/unisced.jpg"
];

let bgIndex = 0;
const bgElement = document.getElementById("dynamic-background");

// Função para alterar o fundo
function changeBackground() {
    bgIndex = (bgIndex + 1) % backgrounds.length; // Avança para o próximo índice e retorna ao primeiro quando chega ao final
    bgElement.style.backgroundImage = `url('${backgrounds[bgIndex]}')`; // Altera o fundo
}

// Altera o fundo a cada 5 segundos
setInterval(changeBackground, 5000);

// Inicializa o fundo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    bgElement.style.backgroundImage = `url('${backgrounds[bgIndex]}')`; // Define o fundo inicial
});

// Função para enviar o formulário para os dois números do WhatsApp
function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('name').value;
    const curso = document.getElementById('course').value;
    const contato = document.getElementById('contact').value;
    const universidade = document.getElementById('university').value;
    const mensagem = document.getElementById('message').value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !curso || !contato || !universidade || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Mensagem para ser enviada
    const mensagemTexto = encodeURIComponent(
        "Novo formulário preenchido:\n" +
        "Nome: " + nome + "\n" +
        "Curso: " + curso + "\n" +
        "Contato: " + contato + "\n" +
        "Universidade: " + universidade + "\n" +
        "Mensagem: " + mensagem
    );

    // Números de WhatsApp
    const numero1 = "258868187201"; // Primeiro número
    const numero2 = "258847331127"; // Segundo número

    // URLs para envio de mensagens
    const whatsappAppUrl1 = `https://wa.me/${numero1}?text=${mensagemTexto}`; // WhatsApp App para o primeiro número
    const whatsappWebUrl1 = `https://web.whatsapp.com/send?phone=${numero1}&text=${mensagemTexto}`; // WhatsApp Web para o primeiro número

    const whatsappAppUrl2 = `https://wa.me/${numero2}?text=${mensagemTexto}`; // WhatsApp App para o segundo número
    const whatsappWebUrl2 = `https://web.whatsapp.com/send?phone=${numero2}&text=${mensagemTexto}`; // WhatsApp Web para o segundo número

    // Abre os links para enviar as mensagens simultaneamente
    window.open(whatsappAppUrl1, "_blank");
    window.open(whatsappWebUrl1, "_blank");
    window.open(whatsappAppUrl2, "_blank");
    window.open(whatsappWebUrl2, "_blank");
}

// Adiciona o evento de envio ao formulário
document.getElementById('contact-form').addEventListener('submit', enviarFormulario);
