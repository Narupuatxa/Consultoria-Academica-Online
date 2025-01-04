<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitização e coleta dos dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $course = htmlspecialchars($_POST['course']);
    $contact = htmlspecialchars($_POST['contact']);
    $university = htmlspecialchars($_POST['university']);
    $message = htmlspecialchars($_POST['message']);

    // Verifica se algum campo está vazio
    if (empty($name) || empty($course) || empty($contact) || empty($university) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Por favor, preencha todos os campos."]);
        exit;
    }

    // Gerando a URL para o WhatsApp
    $whatsappUrl = "https://api.whatsapp.com/send?phone=868187201&text=" . urlencode(
        "Novo formulário preenchido:\n" .
            "Nome: $name\n" .
            "Curso: $course\n" .
            "Contato: $contact\n" .
            "Universidade: $university\n" .
            "Mensagem: $message"
    );

    // Redirecionando para o WhatsApp
    header("Location: $whatsappUrl");
    exit;
} else {
    // Caso o método não seja POST
    echo "Método inválido. Use POST para enviar o formulário.";
}
