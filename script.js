function validarFormulario() {
    var nome = document.getElementById('nome').value.trim();
    var dataNas = document.getElementById('dataNas').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var serie = document.getElementById('serie').value;
    var turnos = document.getElementsByName('turno');
    var atividades = document.getElementsByName('atividade');

    // Verifica se o nome foi preenchido
    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    // Verifica se a data de nascimento foi preenchida
    if (dataNas === '') {
        alert('Por favor, preencha o campo Data de Nascimento.');
        return false;
    }

    // Verifica se o email foi preenchido e se está em um formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    // Verifica se o telefone foi preenchido
    if (telefone === '') {
        alert('Por favor, preencha o campo Telefone.');
        return false;
    }

    // Verifica se a série foi selecionada
    if (serie === '') {
        alert('Por favor, selecione uma Série.');
        return false;
    }

    // Verifica se pelo menos um turno foi selecionado
    var turnoSelecionado = false;
    for (var i = 0; i < turnos.length; i++) {
        if (turnos[i].checked) {
            turnoSelecionado = true;
            break;
        }
    }
    if (!turnoSelecionado) {
        alert('Por favor, selecione um Turno.');
        return false;
    }

    // Verifica se pelo menos uma atividade extra-curricular foi selecionada
    var atividadeSelecionada = false;
    for (var j = 0; j < atividades.length; j++) {
        if (atividades[j].checked) {
            atividadeSelecionada = true;
            break;
        }
    }
    if (!atividadeSelecionada) {
        alert('Por favor, selecione pelo menos uma Atividade Extra-curricular.');
        return false;
    }

    // SSe foram todos preenchidos corretamente, retorna true para enviar o formulário
    return true;
}

// Função para voltar da página de sucesso para a página de matrícula
function voltar() {
    window.history.back();
}
