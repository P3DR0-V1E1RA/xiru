 // Script para enviar os dados do formulário usando JavaScript
 document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Exemplo de exibição dos dados no console 
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + mensagem);

    // Limpar os campos após enviar o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
});


document.getElementById("contato").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Fazer o envio do formulário para o servidor ou processar os dados aqui (usando AJAX ou algo similar)

    // Exemplo de exibição da mensagem de sucesso
    exibirMensagemEnviada();
});

function exibirMensagemEnviada() {
    // Exibir a mensagem de sucesso
    var mensagemEnviadaDiv = document.getElementById("mensagem-enviada");
    mensagemEnviadaDiv.style.display = "block";

    // Limpar os campos após enviar o formulário (opcional)
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

    // Esconder a mensagem após alguns segundos (opcional)
    setTimeout(function() {
        mensagemEnviadaDiv.style.display = "none";
    }, 3000); // Mostrar a mensagem por 3 segundos (3000 milissegundos)
}
