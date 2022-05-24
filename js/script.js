// CLASES Y ARREGLOS


class Autos {
    constructor(marca, modelo, anio, precio, combustible, caracteristicas,kilometraje, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.combustible = combustible;
        this.caracteristicas = caracteristicas;
        this.kilometraje = kilometraje;
        this.disponible = "Disponible";
        this.id = autosEnVenta.length++;
        this.imagen = imagen;
    }

    vender(){
        this.disponible = "Vendido";
    }
}

let autosEnVenta = [];
const auto1 = new Autos("Volkswagen", "Gol Trend Trendline", 2021, 3500000, "Nafta", "El Gol Trend Trendline cuenta con un motor 1.6, una cilindrada de 1599cc, capacidad de tanque de 55L, control de transmisión delantera y capacidad para 5 personas. Tambien contiene frenos ABS, airbag para conductor y pasajero y computadora abordo.", 0, "https://http2.mlstatic.com/D_NQ_NP_770031-MLA43660842672_102020-O.webp", 1);
const auto2 = new Autos("Peugeot", "208 Feline Tiptronic", 2022, 4110000, "Nafta", "El 208 Feline Tiptronic cuenta con un motor 1.6, una cilindrada de 1587cc, capacidad de tanque de 47L, control de transmisión delantera y capacidad para 5 personas. Tambien contiene frenos ABS, airbag para conductor y pasajero y computadora abordo.", 0, "https://http2.mlstatic.com/D_NQ_NP_801127-MLA49988347847_052022-O.webp", 2);
const auto3 = new Autos("Fiat", "Mobi Easy Pack Top", 2021, 2150000, "Nafta", "El Mobi Easy Pack Top cuenta con un motor 1.0, una cilindrada de 999cc, capacidad de tanque de 47L, control de transmisión delantera y capacidad para 5 personas. Tambien contiene frenos ABS, airbag para conductor y pasajero y computadora abordo", 0, "https://http2.mlstatic.com/D_NQ_NP_771948-MLA49791101390_042022-O.webp", 3);
const auto4 = new Autos("Fiat", "Palio", 2008, 950000, "Nafta", "El fiat palio cuenta con un motor 1.4, con VTV vigente, aire acondicionado, dirección hidraulica, levanta vidrios. Excelente estado.", 147000, "https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/279085760_1943894032620452_7250392270765552604_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=843cd7&_nc_ohc=Hf6OPFZIXcAAX8Y2tGq&_nc_ht=scontent.faep9-3.fna&oh=00_AT-Nh2OK1oqrtj5nYdStTT3JEsMcKdPB-eHPTnWEXNtg9g&oe=6291CF66");
const auto5 = new Autos("Ford", "Fiesta", 2015, 2450000, "Nafta", "El Fort Fiesta cuenta con un motor 1.6 S Plus, 5 puertas, todos los services hechos en tiempo y forma, un confort sin igual, aire acondicionado, calefaccion, direccion hidraulica y llantas nuevas", 399000, "https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/281737240_3173638016208907_8126788378267619126_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=843cd7&_nc_ohc=LOArEnvd7dcAX9_4mUy&_nc_ht=scontent.faep9-2.fna&oh=00_AT8b7nGJ3_6xVYOvlbQzBgPdDB9-yQIR--lZXOfwBDHp_g&oe=6290CEB4");
const auto6 = new Autos("Renault", "Kangoo", 2010, 1450000,"Nafta", "El Renault Kangoo cuenta con un excelente estado, unica mano, motor 1.6, aire acondicionado,direccion hidraulica, levanta vidrios, doble porton lateral, un interior y mecanica excelente.", 155000, "https://scontent.faep9-2.fna.fbcdn.net/v/t45.5328-4/278175620_5257221837634359_4889775875135527656_n.png?stp=dst-png_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=c48759&_nc_ohc=nNC5cStN_owAX8gXtE0&_nc_ht=scontent.faep9-2.fna&oh=00_AT84JP1Y0mUp6eD4nU_xkeTi4VsP5TSDs01CYzflZjQSnw&oe=62925269");
const auto7 = new Autos("Volkswagen", "Amarok Confortline", 2016, 3600000, "Diesel", "La camioneta Amarok 2.0 Confortline cuenta con un motor 2.0 180HP, caja manual, cierre centralizado aire acondicionado, cristales electricos, airbag, llantas de aleación, faros auxiliares, computadora de abordo, tracción 4x2, tapizados de lona y sensor de estacionamiento", 100000, "https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/279884266_140932155173946_4695718679604874321_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=843cd7&_nc_ohc=ao2wFZSCMw0AX9h0CHS&_nc_ht=scontent.faep9-3.fna&oh=00_AT935puwIVpYjFk1qHFN3HJEUpsXn7PN4CGbGGc7-52r5A&oe=6290D66B");
const auto8 = new Autos("Renault", "Sandero Stepway", 2010, 1200000, "Nafta y GNC", "El Renault Sandero Stepway cuenta con motor 1.6, dirección asistida, levantavidrios, aire acondicionado, cubiertas traseras nuevas, amortiguadores nuevos, VTV recien hecha y un tubo de GNC de 5ta GEN", 160000, "https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/278568945_154367930403213_945838260781527592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=843cd7&_nc_ohc=kRu-Bb6CQkIAX8ZMxzJ&_nc_ht=scontent.faep9-3.fna&oh=00_AT8GKNx71jom5vk3JUITDRWsntc3xKCEemhhEEiV2PhnGQ&oe=62918E09");
const auto9 = new Autos("Volkswagen", "UP", 2017, 1800000, "Nafta", "El volkswagen UP cuenta con motor 1.0, aire acondicionado, airbag, VTV, dirección hidraulica, cuatro cubiertas nuevas, levantavidrios, 3 puertas, excelente para el uso en ciudad y gran rendimiento en ruta.", 31000, "https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/282029911_1471445743326213_4711867831672071009_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=843cd7&_nc_ohc=he8yq5nW6HgAX8gQ43o&_nc_ht=scontent.faep9-1.fna&oh=00_AT9RaK6Z88tBGJhWiLmtMrQdgjYSct3acFxQ1QGQ_9iPhw&oe=62909986");

autosEnVenta.push(auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9);

// SESION DEL USUARIO


localStorage.setItem("user1", "coderhouse@hotmail.com");
localStorage.setItem("passUser1", "coder123");
let userUno = localStorage.getItem("user1");
let passUno = localStorage.getItem("passUser1");
const sesionON = () => {
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
    
    sessionStorage.getItem("user1ON") ? console.log("Session ya iniciada") : sessionStorage.setItem("user1ON", "Si");
}
sessionStorage.getItem("user1ON") && sesionON();

const verificarUsuario = (e) => {
    e.preventDefault();
    (inputSesion1.value === userUno) && (inputSesion2.value === passUno) ? sesionON() : alert(`Usuario o contraseña erronea, por favor vuelva a intentarlo.`);
}
let formSesion = document.getElementById("inicioForm");
let inputSesion1 = document.getElementById("mailS");
let inputSesion2 = document.getElementById("passS");
formSesion.addEventListener("submit", verificarUsuario);



// AGREGAR UN PRODUCTO AL CATALOGO


const agregandoProducto = () => {
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


// BUSCAR UN PRODUCTO DEL CATALOGO


const buscadorDeProductos = (e) => {
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


// MOSTRAR PRODUCTOS

let autosCero = autosEnVenta.filter((el) => el.kilometraje === 0);
localStorage.getItem("autos0km") ? console.log("Autos0km cargados en sistema") : localStorage.setItem("autos0km", JSON.stringify(autosCero));
let autosUsados = autosEnVenta.filter((el) => el.kilometraje != 0);
localStorage.getItem("autosUsados") ? console.log("Autos usados cargados en sistema") : localStorage.setItem("autosUsados", JSON.stringify(autosUsados));

const mostrarCeros = () => {
    let autosCerosLS = JSON.parse(localStorage.getItem("autos0km"));
    autosCerosLS.forEach(auto => {
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

const mostrarUsados = () => {
    let autosUsadosLS = JSON.parse(localStorage.getItem("autosUsados"));
    autosUsadosLS.forEach(auto => {
        let usados = document.createElement("div");
        usados.innerHTML = `
                            <div class="usados-card-img">
                                <img src="${auto.imagen}" alt="${auto.modelo}">
                            </div>
                            <div class="usados-card-text">
                                <h3>${auto.marca} ${auto.modelo}</h3>
                                <p>${auto.caracteristicas}</p>
                                <button>calcular financiación</button>
                            </div>`;
        usados.className = "usados-card";
        document.getElementById("usado").append(usados);
    })
}
mostrarCeros();
mostrarUsados();