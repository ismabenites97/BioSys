    // Funções para manipular mudanças nos campos de email e senha
    function onChangeEmail(){
        toggleButtonsDisable();
        toggleEmailErrors();   
    }

    function onChangeSenha(){
        toggleButtonsDisable();
        togglePasswordErrors();
    }

    // Verificação de validade do email
    function isEmailValid(){
        const email = form.email().value;
        if(!email){
            return false;
        }
        return validateEmail(email);
    }

    // Verificação de validade da senha
    function isPasswordValid(){
        const password = form.senha().value;
        if (!password) {
            return false;
        }
        return true; // Qualquer senha não vazia é considerada válida
    }

    // Alternância de erros do email
    function toggleEmailErrors(){
        const email = form.email().value;
        if(!email) {
            form.emailRequired().style.display = "block";
        } else {
            form.emailRequired().style.display = "none";
        }

        if (validateEmail(email)){
            form.emailInvalidError().style.display = "none";
        } else {
            form.emailInvalidError().style.display = "block";
        }
    }

    // Alternância de erros da senha
    function togglePasswordErrors(){
        const password = form.senha().value;
        if(!password) {
            form.obrigSenha().style.display = "block";
        } else {
            form.obrigSenha().style.display = "none";
        }
    }

    // Habilitação/Desabilitação do botão de registrar
    function toggleRegistrarButton() {
        const email = form.email().value;
        const password = form.senha().value;
        if (email === "tiagotlm@icloud.com" && password === "#71460@Moraes#") {
            form.registraBtn().disabled = false;
        } else {
            form.registraBtn().disabled = true;
        }
    }

    // Habilitação/Desabilitação de todos os botões
    function toggleButtonsDisable(){
        const emailValid = isEmailValid();
        const passwordValid = isPasswordValid();
        form.loginBtn().disabled = !emailValid || !passwordValid;
        form.recoverBtn().disabled = !emailValid;
        toggleRegistrarButton();
    }

    // Função para recuperação de senha
    function recoverPassword(){
        showLoading();
        firebase.auth().sendPasswordResetEmail(form.email().value).then( () => {
            hideLoading();
            alert('Email enviado com sucesso.');
        }).catch(error => {
            hideLoading();
            alert('Falha no envio de email');
        });
    }

    // Função de mensagens de erro
    function getErrorMessage(error){
        if (error.code == "auth/user-not-found"){
            return "Usuário não encontrado";
        }
        if (error.code == "auth/invalid-credential"){
            return "Credenciais inválidas";
        }
    }

    // Encapsulamento do formulário
    const form = {
        email: () => document.getElementById('email'),
        senha: () => document.getElementById('senha'),
        emailInvalidError: () => document.getElementById('avisoLogin'),
        emailRequired: () => document.getElementById('obrigLogin'),
        loginBtn: () => document.getElementById('login-btn'),
        recoverBtn: () => document.getElementById('recover-btn'),
        obrigSenha: () => document.getElementById('obrigSenha'),
        registraBtn: () => document.getElementById('registra-btn')
    }

    // Event listeners para os campos de email e senha
    form.email().addEventListener('change', onChangeEmail);
    form.senha().addEventListener('change', onChangeSenha);

    // Chamada inicial para garantir que os botões estejam corretamente configurados quando a página é carregada
    toggleButtonsDisable();
    