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

// Função para enviar o formulário para um único número do WhatsApp
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

    // Número de WhatsApp
    const numero = "258868187201"; // Primeiro número

    // URLs para envio de mensagens
    const whatsappAppUrl = `https://wa.me/${numero}?text=${mensagemTexto}`; // WhatsApp App
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${numero}&text=${mensagemTexto}`; // WhatsApp Web

    // Abre os links para enviar a mensagem
    window.open(whatsappAppUrl, "_blank");
    window.open(whatsappWebUrl, "_blank");
}

// Adiciona o evento de envio ao formulário
document.getElementById('contact-form').addEventListener('submit', enviarFormulario);
