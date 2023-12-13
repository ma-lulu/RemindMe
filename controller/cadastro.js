function getFormCadastro() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;

    if (verificaSenha(senha, confirmaSenha)) {
        //cria um objeto com os dados do form
        const formData = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha
        };

        //"fetch" faz a requisição POST para o servidor
        fetch('http://localhost:5173/view/pages/cadastro.html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            // Manipula a resposta do servidor (data)
            console.log('Resposta do servidor:', data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    } else {
        console.error('Senhas não correspondem ou não atendem aos requisitos.');
    }
}

function verificaSenha(senha, confirmaSenha) {
    if (senha.length > 6) {
        if (senha === confirmaSenha) {
            return true; // Senhas correspondem e atendem aos requisitos
        } else {
            console.error('As senhas não correspondem.');
        }
    } else {
        console.error('A senha deve ter pelo menos 6 caracteres.');
    }
    return false; // Senhas não correspondem ou não atendem aos requisitos
}
