
        // Atualização futura, para escolha de turmas
// document.getElementById('turma').addEventListener('change', function() {
//     var selectedValue = this.value;
//     if (selectedValue !== "Escolha") {
//         window.location.href = "/turmas/" + selectedValue + ".html";
//     }
// });

// document.getElementById('login').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que o formulário seja enviado normalmente

//     var rollValue = document.getElementById('roll').value; // Obtém o valor selecionado na turma

//     // Redireciona com base na escolha da turma
//     if (rollValue !== "" && rollValue !== "Qual sua turma?") {
//         var redirectUrl = "/turmas/" + rollValue + "/home.html"; // Constrói a URL de redirecionamento
//         window.location.href = redirectUrl; // Redireciona para a URL construída
//     } else {
//         alert("Por favor, escolha sua turma."); // Se a turma não for selecionada, exibe um alerta
//     }
// });