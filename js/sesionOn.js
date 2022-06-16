const sesionON = () => {
    let inicio = document.getElementById("inicioSesion");
    let botonesIniRegis = document.getElementById("botones");
    let emailContact = document.getElementById("emailContact");
    emailContact.remove();
    botonesIniRegis.remove();
    inicio.remove();

    let botonAgregar = document.createElement("div");
    botonAgregar.innerHTML = `<button id="btn_agregar" class="btn">Agregar Producto</button>`;
    document.getElementById("header-arriba").append(botonAgregar);
    let btn_agregar = document.getElementById("btn_agregar");
    btn_agregar.addEventListener("click", agregandoProducto);
    
    sessionStorage.getItem("user1ON") ? console.log("Session ya iniciada") : sessionStorage.setItem("user1ON", "Si");
}
sessionStorage.getItem("user1ON") && sesionON();