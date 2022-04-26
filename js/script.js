function verificarUsuario() {
    let cuenta;
    let nombre;
    let password;

    for(i=1; i <= 5; i++) {
        nombre = prompt("Ingrese su nombre de usuario.");
        password = prompt("Ingrese su contrase;a");
        cuenta = 5 - i;
        if(nombre != "CoderHouse" && password != "coder123") {
            if(cuenta != 0) {
                alert(`Usuario o contrase;a erronea, por favor vuelva a intentarlo. Le quedan ${cuenta} intentos.`);
            } else {
                alert(`Te quedaste sin intentos, vuelva a intentarlo mas tarde.`);
                break
            }
        } else {
            alert(`Hola ${nombre}, bienvenido a BahiaNET`);
            break;
        }
    }
}
verificarUsuario();