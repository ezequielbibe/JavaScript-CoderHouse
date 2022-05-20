//CLASES Y ARREGLOS
class AutosUsados {
    constructor(marca, modelo, anio, precio, combustible, caracteristicas, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.combustible = combustible;
        this.caracteristicas = caracteristicas;
        this.kilometraje = kilometraje;
        this.disponible = "Disponible";
        this.id = autosUsados.length++;
    }

    vender(){
        this.disponible = "Vendido";
    }
}
class AutosNuevos {
    constructor(marca, modelo, anio, precio, combustible, caracteristicas, imagen, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.combustible = combustible;
        this.caracteristicas = caracteristicas;
        this.kilometraje = 0;
        this.disponible = "Disponible";
        this.id = id;
        this.imagen = imagen;
    }

    vender(){
        this.disponible = "Vendido";
    }
}
let autosNuevos = [];
let autosUsados = [];
let autosEnVenta = [];
const auto1 = new AutosNuevos("Volkswagen", "Gol Trend Trendline", 2021, 3500000, "Nafta", "El Gol Trend Trendline cuenta con un motor 1.6, una cilindrada de 1599cc, capacidad de tanque de 55L, control de transmisión delantera y capacidad para 5 personas. Tambien contiene frenos ABS, airbag para conductor y pasajero y computadora abordo.", "https://http2.mlstatic.com/D_NQ_NP_770031-MLA43660842672_102020-O.webp", 1);
const auto2 = new AutosNuevos("Peugeot", "208 Feline Tiptronic", 2022, 4110000, "Nafta", "El 208 Feline Tiptronic cuenta con un motor 1.6, una cilindrada de 1587cc, capacidad de tanque de 47L, control de transmisión delantera y capacidad para 5 personas. Tambien contiene frenos ABS, airbag para conductor y pasajero y computadora abordo.", "https://http2.mlstatic.com/D_NQ_NP_801127-MLA49988347847_052022-O.webp", 2);
const auto3 = new AutosNuevos("Fiat", "Mobi Easy Pack Top", 2021, 2150000, "Nafta", "El Mobi Easy Pack Top cuenta con un motor 1.0, una cilindrada de 999cc, capacidad de tanque de 47L, control de transmisión delantera y capacidad para 5 personas. Tambien contiene frenos ABS, airbag para conductor y pasajero y computadora abordo", "https://http2.mlstatic.com/D_NQ_NP_771948-MLA49791101390_042022-O.webp", 3);
autosNuevos.push(auto1, auto2, auto3);
autosEnVenta.push(auto1, auto2, auto3);


// FUNCIONES

localStorage.setItem("user1", "coderhouse@hotmail.com");
localStorage.setItem("passUser1", "coder123");
let userUno = localStorage.getItem("user1");
let passUno = localStorage.getItem("passUser1");
function sesionON(){
    let inicio = document.getElementById("inicioSesion");
    let registro = document.getElementById("registro");
    let botonesIniRegis = document.getElementById("botones");
    let emailContact = document.getElementById("emailContact");
    emailContact.remove();
    botonesIniRegis.remove();
    inicio.remove();
    registro.remove();

    let botonAgregar = document.createElement("div");
    botonAgregar.innerHTML = `<button id="btn_agregar">Agregar Producto</button>`;
    document.getElementById("header-arriba").append(botonAgregar);
    let btn_agregar = document.getElementById("btn_agregar");
    btn_agregar.addEventListener("click", agregandoProducto);

    let sesionIniciada = document.createElement("h4");
    sesionIniciada.innerText = `Se inicio sesion correctamente!`
    document.getElementById("volverArriba").append(sesionIniciada);
}
function verificarSession() {
    if(sessionStorage.getItem("user1ON")){
        sesionON();
    }
}
verificarSession();
function verificarUsuario(e) {
    e.preventDefault();
        if(inputSesion1.value === userUno && inputSesion2.value === passUno) {
            sesionON();
        } else {
            alert(`Usuario o contraseña erronea, por favor vuelva a intentarlo.`);
        }
}
let formSesion = document.getElementById("inicioForm");
let inputSesion1 = document.getElementById("mailS");
let inputSesion2 = document.getElementById("passS");
formSesion.addEventListener("submit", verificarUsuario);


function agregandoProducto() {
    let marca = prompt("Ingrese la marca del vehiculo");
    let nombre = prompt("Ingrese el nombre del vehiculo");
    let anio = prompt("Ingrese el año del vehiculo");
    let precio = prompt("Ingrese el precio del vehiculo");
    let combustible = prompt("Ingrese el cumbustible del vehiculo");
    let caracteristicas = prompt("Ingrese las caracteristicas del vehiculo");
    let imagen = prompt("Ingrese la img del vehiculo");

    const autoNew = new AutosNuevos(marca, nombre, anio, precio, combustible, caracteristicas, imagen, autosNuevos.length++);
    console.log(autoNew);

    let agora = JSON.parse(localStorage.getItem("autos0km"));
    agora.push(autoNew);
    localStorage.setItem("autos0km", JSON.stringify(agora));

    mostrar();
}

function buscadorDeProductos(e){
    let resultadovich = [];
    e.preventDefault();

    if(autosEnVenta.some((el) => el.modelo.toUpperCase().includes(input.value.toUpperCase()))) {
        let resultado = autosEnVenta.filter((el) => el.modelo.toUpperCase().includes(input.value.toUpperCase()));
        for (const result of resultado) {
           resultadovich = resultadovich + `• ${result.modelo} - $${result.precio} \n`;
        }
        alert(`Resultado de tu busqueda:\n ${resultadovich}`);
    } else {
        alert("No pudimos encontrar nada en la web :(");
    }
}

let input = document.getElementById("buscador");
let busqueda = document.getElementById("form");
busqueda.addEventListener("submit", buscadorDeProductos);

function mostrar() {
    if(localStorage.getItem("autos0km")) {
        console.log("Autos0km cargados en sistema");
    } else {
        localStorage.setItem("autos0km", JSON.stringify(autosNuevos));
    }
    let autosNuevosLS = JSON.parse(localStorage.getItem("autos0km"));
    autosNuevosLS.forEach(auto => {
        let ceros = document.createElement("div");
        ceros.innerHTML = `
                            <div class="ceros-card-img">
                                <img src="${auto.imagen}" alt="${auto.modelo}">
                            </div>
                            <div class="ceros-card-text">
                                <h3>${auto.marca} ${auto.modelo}</h3>
                                <p>${auto.caracteristicas}</p>
                                <button>calcular financiación</button>
                            </div>`;
        ceros.className = "ceros-card";
        document.getElementById("cero").append(ceros);

    })
}
mostrar();