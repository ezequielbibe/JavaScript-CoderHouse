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

let autosEnVenta;
const traerDatosJson = async () => {

    let response = await fetch("./json/autos.json");
    let data = await response.json();

    autosEnVenta = data;
}
traerDatosJson();
// AGREGAR UN PRODUCTO AL CATALOGO


const agregandoProducto = () => {

    (async () => {
        const { value: agergarVehiculo} = await Swal.fire({
            title: 'Agregar un vehiculo al sistema.',
            html: '<input type="text" placeholder="Marca" class="swal2-input" id="input1">' +
            '<input type="text" placeholder="Modelo" class="swal2-input" id="input2">'+
            '<input type="text" placeholder="Año" class="swal2-input" id="input3">'+
            '<input type="text" placeholder="Precio" class="swal2-input" id="input4">'+
            '<input type="text" placeholder="Combustible" class="swal2-input" id="input5">'+
            '<input type="text" placeholder="Caracteristicas" class="swal2-input" id="input6">'+
            '<input type="text" placeholder="Kilometraje" class="swal2-input" id="input7">'+
            '<input type="text" placeholder="Imagen" class="swal2-input" id="input8">',
            confirmButtonText: 'Confirmar',
            padding: '1rem',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: false, 
            confirmButton: true,
            confirmButtonColor: '#34358d',
            confirmButtonAriaLabel: 'Confimar',
            preConfirm: () => {
                return [
                    inputForm1 = document.getElementById('input1'),
                    inputForm2 = document.getElementById('input2'),
                    inputForm3 = document.getElementById('input3'),
                    inputForm4 = document.getElementById('input4'),
                    inputForm5 = document.getElementById('input5'),
                    inputForm6 = document.getElementById('input6'),
                    inputForm7 = document.getElementById('input7'),
                    inputForm8 = document.getElementById('input8')
                ]
            }
        })
        if(agergarVehiculo){
            let agora;
            const autoNew = new Autos(inputForm1.value, inputForm2.value, inputForm3.value, inputForm4.value, inputForm5.value, inputForm6.value, inputForm7.value, inputForm8.value);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Se agrego el vehiculo correctamente',
              })
            if(autoNew.kilometraje != 0) {
                agora = JSON.parse(localStorage.getItem("autosUsados"));
                agora.push(autoNew);
                localStorage.setItem("autosUsados", JSON.stringify(agora));
                mostrarUsados();
            } else {
                agora = JSON.parse(localStorage.getItem("autos0km"));
                agora.push(autoNew);
                localStorage.setItem("autos0km", JSON.stringify(agora));
                mostrarCeros();
            }
        }
    })()
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
        let {marca, modelo, anio, precio, combustible, caracteristicas,kilometraje, imagen} = auto;
        let ceros = document.createElement("div");
        ceros.innerHTML = `
                            <div class="ceros-card-img">
                                <img src="${imagen}" alt="${modelo}">
                            </div>
                            <div class="ceros-card-text">
                                <h3>${marca} ${modelo}</h3>
                                <p>${caracteristicas}</p>
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
        let {marca, modelo, anio, precio, combustible, caracteristicas,kilometraje, imagen} = auto;
        usados.innerHTML = `
                            <div class="usados-card-img">
                                <img src="${imagen}" alt="${modelo}">
                            </div>
                            <div class="usados-card-text">
                                <h3>${marca} ${modelo}</h3>
                                <p>${caracteristicas}</p>
                                <button>calcular financiación</button>
                            </div>`;
        usados.className = "usados-card";
        document.getElementById("usado").append(usados);
    })
}
mostrarCeros();
mostrarUsados();

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
    
    sessionStorage.getItem("user1ON") ? console.log("Session ya iniciada") : sessionStorage.setItem("user1ON", "Si");
}
sessionStorage.getItem("user1ON") && sesionON();


// INICIO DE SESION


const iniciarSesion = () => {
    (async () => {
        const { value: formInicio} = await Swal.fire({
            title: 'Iniciar Sesion',
            html: '<input type="email" placeholder="Correo electronico" class="swal2-input" id="inputSesion1">' +
            '<input type="password" placeholder="Contraseña" class="swal2-input" id="inputSesion2">',
            confirmButtonText: 'Confirmar',
            padding: '1rem',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false, 
            confirmButton: true,
            confirmButtonColor: '#34358d',
            cancelButton: true,
            confirmButtonAriaLabel: 'Confimar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonAriaLabel: 'Cancelar',
            preConfirm: () => {
                return [
                    inputSesion1 = document.getElementById('inputSesion1'),
                    inputSesion2 = document.getElementById('inputSesion2')
                ]
              }
        })
        if(formInicio){
            if(inputSesion1.value === userUno && inputSesion2.value === passUno){
                sesionON();
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Sesion Iniciada correctamente',
                  })
            } else {
                console.log(":D");
            }
        }
    })()
}
const btnIniciarSesion = document.getElementById("inicioSesion");
btnIniciarSesion.addEventListener('click', iniciarSesion);