function confirmarLog() {
    const nome = document.getElementById("Nome").value;
    const idade = document.getElementById("Idade").value;
    const email = document.getElementById("E-mail").value;
    const cpf = document.getElementById("Cpf").value;

    document.getElementById("emailerros").textContent = "";
    document.getElementById("nomeerros").textContent = "";
    document.getElementById("cpferros").textContent = "";
    document.getElementById("idadeerros").textContent = "";
    document.getElementById("resultado").textContent = "";

    let valid = true;

    // Validação do email
    if (!validarEmail(email)) {
        document.getElementById("emailerros").textContent = "Email incorreto, verifique sua veracidade e se contém '@'";
        valid = false;
    }
    if (!validarNome(nome)) {
        document.getElementById("nomeerros").textContent = "deve-se ter um nome";
        valid = false;
    }
    if (!validarEmail(email)) {
        document.getElementById("emailerros").textContent = "Email incorreto, verifique sua veracidade e se contém '@'";
        valid = false;
    }

    // Validação do CPF
    if (!validarcpf(cpf)) {
        document.getElementById("cpferros").textContent = "CPF incorreto, verifique sua veracidade e se contém 11 números";
        valid = false;
    }

    // Validação da idade
    if (idade < 18) {
        document.getElementById("idadeerros").textContent = "Deve ser maior de 18 para usar esse site";
        valid = false;
    }

    // Se tudo estiver correto, mostra a mensagem de sucesso
    if (valid) {
        document.getElementById("resultado").textContent = `Seu cadastro foi confirmado com sucesso, usuário ${nome}`;
        document.getElementById("resultado").style.color = "green";
    }
}

function validarEmail(email) {
    return email.includes('@');
}
function validarNome(nome){
    return nome.length > 0 
}

function validarcpf(cpf) {
    // Verificação simples de 11 números (apenas comprimento, sem validação real do CPF)
    return cpf.length === 11 && !isNaN(cpf);
}
