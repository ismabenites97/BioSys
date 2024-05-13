<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BioSys - Login</title>
</head>
<body>
    
<form id="login-form" class="login-container">
    <h2>Login</h2>

    <div class="input-group">
        <!--<label for="nome_usuario"><b>Email:</b></label>-->
        <input type="text" id="email" name="email" placeholder="seu@email.com" onchange="onChangeEmail()" required>
    </div>
    <div class="error" id="obrigLogin">Informe um email</div> <!--Avisando o user-->
    <div class="error" id="avisoLogin">Informe um email válido</div> <!--Avisando o user-->

    <div class="input-group">
       <!-- <label for="senha"><b>Senha:</b></label>-->
        <input type="password" id="senha" name="senha" placeholder="sua senha" onchange="onChangeSenha()" required>
    </div>
    <div class="error" id="obrigSenha">Informe uma senha</div> <!--Avisando o user-->
    <div class="error" id="avisoSenha">Senha inválida</div> <!--Avisando o user-->
    
    
    <div>
        <button type="submit" class="login-btn" disabled="true" id="login-btn" onclick="login(event)">Acessar</button>

        <button type="submit" class="registra-btn" disabled="true" id="registra-btn" onclick="registro(event)">Registrar</button>
    </div>
    <div>
        <button type="submit" class="clear" disabled="true" id="recover-btn">Recuperar senha</button> 
    </div>
   
</form>


<!--CSS   -->
<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="global.css">

 <!--Chamando o script de login-->   
 <script src="login.js"></script>

<script src="index.js"></script>
<script src="validate.js"></script>

</body>
</html>
