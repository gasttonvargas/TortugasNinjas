let usuarioAdministrador = { email: "admin@admin.com", password: "Admin1234"};

let usuariosRegistrados = JSON.parse(localStorage.getItem(`usuario`));

let formLogin = document.getElementById("formLogin")
// const alertaNombre = document.getElementById("alertaNombre")
// const alertaApellido = document.getElementById("alertaApellido")
// const alertaNickname = document.getElementById("alertaNickname")
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

    if(inicioSesion){
        let emailRegistrado = usuariosRegistrados.find(usuariosRegistrados =>
            usuariosRegistrados.email == emailLogin
        )
    }
})