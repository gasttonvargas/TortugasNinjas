let formRegistro = document.getElementById("formRegistro")
let usuarios = []
const alertaNombre = document.getElementById("alertaNombre")
const alertaApellido = document.getElementById("alertaApellido")
const alertaNickname = document.getElementById("alertaNickname")
const alertaEmail = document.getElementById("alertaEmail")
const alertaPassword = document.getElementById("alertaPassword")

formRegistro.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let apellidoUsuario = document.getElementById("apellidoUsuario").value;
    let nicknameUsuario = document.getElementById("nicknameUsuario").value;
    let emailUsuario = document.getElementById("emailUsuario").value;
    let passUsuario = document.getElementById("passUsuario").value;

    alertaNombre.innerHTML = ""
    alertaApellido.innerHTML = ""
    alertaNickname.innerHTML = ""
    alertaEmail.innerHTML = ""
    alertaPassword.innerHTML = ""
    
    let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let validacionPassword = ""
    let validoEnContrasena = true
    let valido = true

    if(nombreUsuario.length === 0){
        alertaNombre.style.color = "#ff0000";
        alertaNombre.innerHTML = "Campo 'Nombre' no puede permanecer vacio"
        valido = false
    }else if(nombreUsuario.length > 20){
        alertaNombre.style.color = "#ff0000";
        alertaNombre.innerHTML = "Nombre/s muy largo"
        valido = false
    }else{
        alertaNombre.style.color = "#008000";
        alertaNombre.innerHTML = "Nombre/s válido/s"
    }

    if(apellidoUsuario.length === 0){
        alertaApellido.style.color = "#ff0000";
        alertaApellido.innerHTML = "Campo 'Apellido' no puede permanecer vacio"
        valido = false
    }else if(apellidoUsuario.length > 20){
        alertaApellido.style.color = "#ff0000";
        alertaApellido.innerHTML = "Apellido/s muy largo"
        valido = false
    }else{
        alertaApellido.style.color = "#008000";
        alertaApellido.innerHTML = "Apellido/s válido/s"
    }

    if(nicknameUsuario.length === 0){
        alertaNickname.style.color = "#ff0000";
        alertaNickname.innerHTML = "Campo 'Nombre de usuario' no puede permanecer vacio"
        valido = false
    }else if(nicknameUsuario.length < 5){
        alertaNickname.style.color = "#ff0000";
        alertaNickname.innerHTML = "Nombre de usuario muy corto"
        valido = false
    }

    if(emailUsuario.length === 0){
        alertaEmail.style.color = "#ff0000";
        alertaEmail.innerHTML = "Campo 'Email' no puede permanecer vacio"
        valido = false
    }else if(!validacionEmail.test(emailUsuario)){
        alertaEmail.style.color = "#ff0000";
        alertaEmail.innerHTML = "Email no valido"
        valido = false
    }

    if(passUsuario.length === 0){
        alertaPassword.style.color = "#ff0000";
        alertaPassword.innerHTML = "Campo 'Contraseña' no puede permanecer vacio"
        valido = false
    }else{
        if(passUsuario.length < 8){
            validacionPassword += "- Debe tener más de 8 caracteres. <br>"
            valido = false
            validoEnContrasena = false
        }

        if(!passUsuario.match(/[A-Z]/)){
            validacionPassword += "- Debe tener al menos una letra mayúscula. <br>"
            valido = false
            validoEnContrasena = false
        }

        if(!passUsuario.match(/[0-9]/)){
            validacionPassword += "- Debe tener al menos un número. <br>"
            valido = false
            validoEnContrasena = false
        }

        if(validoEnContrasena){
            alertaPassword.style.color = "#008000"
            alertaPassword.innerHTML = "Contraseña válida"
        }else{
            alertaPassword.style.color = "#ff0000";
            alertaPassword.innerHTML = validacionPassword
        }
    }

    let nickUsado = usuarios.find(usuarios => 
        usuarios.nickname == nicknameUsuario
    )

    if(nickUsado){
        alertaNickname.style.color = "#ff0000";
        alertaNickname.innerHTML = "Nombre de usuario usado"
        return;
    }

    let emailUsado = usuarios.find(usuarios => 
        usuarios.email == emailUsuario
    )

    if(emailUsado){
        alertaEmail.style.color = "#ff0000";
        alertaEmail.innerHTML = "Email usado"
        return;
    }

    if(valido){
        usuarios.push({
            nombre : nombreUsuario,
            apellido: apellidoUsuario,
            nickname : nicknameUsuario,
            email : emailUsuario,
            password : passUsuario
        })

        localStorage.setItem("usuario", JSON.stringify(usuarios));

        alertaNombre.innerHTML = ""
        alertaApellido.innerHTML = ""
        alertaNickname.innerHTML = ""
        alertaEmail.innerHTML = ""
        alertaPassword.innerHTML = ""
        formRegistro.reset()
    }
})