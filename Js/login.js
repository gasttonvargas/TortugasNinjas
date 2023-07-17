let usuarioAdministrador = { email: "admin@admin.com", password: "Admin1234"};

let usuariosRegistrados = JSON.parse(localStorage.getItem(`usuario`));

let formLogin = document.getElementById("formLogin")
<<<<<<< HEAD
const alertaEmailLogin = document.getElementById("alertaEmailLogin")
const alertaPasswordLogin = document.getElementById("alertaPasswordLogin")

=======
let btnOjo = document.getElementById("btn-funcion-ojo")
const alertaEmailLogin = document.getElementById("alertaEmailLogin")
const alertaPasswordLogin = document.getElementById("alertaPasswordLogin")

let banderaOjo = false

btnOjo.addEventListener("click", (event) => {
    event.preventDefault();

    if(!banderaOjo){
        document.getElementById("passLogin").type = "text"
        banderaOjo = true
    }else{
        document.getElementById("passLogin").type = "password"
        banderaOjo = false
    }
})

>>>>>>> 15f9eb83153e19e51c53be334fd4be1b127c59e0
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
<<<<<<< HEAD

    let cantidadUsuarios = usuariosRegistrados.length
=======
    
    if(usuariosRegistrados != null){
        let cantidadUsuarios = usuariosRegistrados.length
    }else{
        if(emailLogin === usuarioAdministrador["email"]){
            if(passLogin === usuarioAdministrador["password"]){

                setTimeout(()=>{
                    window.location.href = "administrador.html"
                }, 1000)
            }
            else{
                alertaPasswordLogin.style.color = "#ff0000";
                alertaPasswordLogin.innerHTML = "Contraseña o email no coinciden"
            }
        }else{
            alertaEmailLogin.style.color = "#ff0000";
            alertaEmailLogin.innerHTML = "Email no registrado"
            return;
        }
    }
>>>>>>> 15f9eb83153e19e51c53be334fd4be1b127c59e0

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
<<<<<<< HEAD
    alert(index)
=======
>>>>>>> 15f9eb83153e19e51c53be334fd4be1b127c59e0
    
    if(index === -1){
        if(emailLogin === usuarioAdministrador["email"]){
            if(passLogin === usuarioAdministrador["password"]){
<<<<<<< HEAD
                alert("el admin B)")
=======

                setTimeout(()=>{
                    window.location.href = "administrador.html"
                }, 1000)
>>>>>>> 15f9eb83153e19e51c53be334fd4be1b127c59e0
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
<<<<<<< HEAD
            alert("si es loko")
=======
            setTimeout(()=>{
                window.location.href = "paginaPrincipal.html"
            }, 1000)
>>>>>>> 15f9eb83153e19e51c53be334fd4be1b127c59e0
        }else{
            alertaPasswordLogin.style.color = "#ff0000";
            alertaPasswordLogin.innerHTML = "Contraseña e email no coinciden"
        }
    }
})