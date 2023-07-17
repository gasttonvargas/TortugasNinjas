let usuarioAdministrador = { email: "admin@admin.com", password: "Admin1234"};

let usuariosRegistrados = JSON.parse(localStorage.getItem(`usuario`));

let formLogin = document.getElementById("formLogin")
const alertaEmailLogin = document.getElementById("alertaEmailLogin")
const alertaPasswordLogin = document.getElementById("alertaPasswordLogin")

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let inicioSesion = true;

    alertaEmailLogin.innerHTML = ""
    alertaPasswordLogin.innerHTML = ""

    let emailLogin = document.getElementById("emailLogin").value;
    let passLogin = document.getElementById("passLogin").value;

    if(emailLogin.length === 0){
        inicioSesion = false;
        alertaEmailLogin.style.color = "#ff0000";
        alertaEmailLogin.innerHTML = "Email no ingresado"
    }

    if(passLogin.length === 0){
        inicioSesion = false;
        alertaPasswordLogin.style.color = "#ff0000";
        alertaPasswordLogin.innerHTML = "Contraseña no ingresada"
    }

    if(!inicioSesion){
        return;
    }

    let cantidadUsuarios = usuariosRegistrados.length

    function indiceEmailRegistrado(usuariosEnBase, emailIngresadoPorUsuario, cantidadUsuariosEnBase){
        let indice = -1
        for(let i=0; i<cantidadUsuariosEnBase; i++){

            if(usuariosEnBase[i]["email"] === emailIngresadoPorUsuario){
                indice = i
                return indice
            }

            if(i === cantidadUsuarios - 1){
                return indice
            }
        }
    }

    let index = indiceEmailRegistrado(usuariosRegistrados, emailLogin, cantidadUsuarios);
    alert(index)
    
    if(index === -1){
        if(emailLogin === usuarioAdministrador["email"]){
            if(passLogin === usuarioAdministrador["password"]){
                alert("el admin B)")
            }
            else{
                alertaPasswordLogin.style.color = "#ff0000";
                alertaPasswordLogin.innerHTML = "Contraseña e email no coinciden"
            }
        }else{
            alertaEmailLogin.style.color = "#ff0000";
            alertaEmailLogin.innerHTML = "Email no registrado"
        }

    }else{
        if(usuariosRegistrados[index]["password"] == passLogin){
            alert("si es loko")
        }else{
            alertaPasswordLogin.style.color = "#ff0000";
            alertaPasswordLogin.innerHTML = "Contraseña e email no coinciden"
        }
    }
})