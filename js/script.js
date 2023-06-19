document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Recupera os valores dos campos do formulário
    var nome = document.getElementById("formInputNome").value;
    var email = document.getElementById("formInputEmail").value;
    var telefone = document.getElementById("formInputTelefone").value;
    var mensagem = document.getElementById("formInputMensagem").value;

    // Exibe os valores no modal
    document.getElementById("modalMessage").innerHTML = "Nome: " + nome + "<br>Email: " + email + "<br>Telefone: " + telefone + "<br>Mensagem: " + mensagem;

    var modal = new bootstrap.Modal(document.getElementById("myModal")); // Cria uma nova instância do modal usando o Bootstrap 5
    modal.show(); // Exibe o modal
});
