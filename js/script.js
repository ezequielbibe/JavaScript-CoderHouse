function verificarUsuario() {
    let cuenta;
    let nombre;
    let password;

    for(i=1; i <= 5; i++) {
        nombre = prompt("Ingrese su nombre de usuario.");
        password = prompt("Ingrese su contraseña");
        cuenta = 5 - i;
        if(nombre != "CoderHouse" && password != "coder123") {
            if(cuenta != 0) {
                alert(`Usuario o contraseña erronea, por favor vuelva a intentarlo. Le quedan ${cuenta} intentos.`);
            } else {
                alert(`Te quedaste sin intentos, vuelva a intentarlo mas tarde.`);
                break
            }
        } else {
            alert(`Hola ${nombre}, bienvenido a BahiaNET`);
            let botones = document.getElementById("botones");
            botones.remove();
            break;
        }
    }
}

class Autos {
    constructor(marca, modelo, anio, precio, combustible, caracteristicas, kilometraje, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.combustible = combustible;
        this.caracteristicas = caracteristicas;
        this.kilometraje = kilometraje;
        this.disponible = "Disponible";
        this.id = id;
    }

    vender(){
        this.disponible = "Vendido";
    }
}

const auto1 = new Autos("Fiat", "Palio fire top", 2006, 890000, "Nafta y GNC", "Motor 1.4, cuenta con alarma, cierre centralizado, calefacción y aire acondicionado.", 190000, 1);
const auto2 = new Autos("Suzuki", "Fun", 2005, "Nafta", "Excelente estando general, cubiertas nuevas, alarma y aire acondicionado.", 170000, 2);
const auto3 = new Autos("volkswagen", "Gol Trend", 2022, 3000000, "Nafta", "Motor 1.6, full, cuenta con todo ultima gen para un confort especial, dirreción hidraulica, seguro contra todo riesgo.", 0, 3);
const auto4 = new Autos("Volkswagen", "Bora TDI", 2011, 1300000, "Diesel", "Cuenta con aire acondicionado, alza cristales, espejos electricos, airbag, freno a disco, y cubiertas en buen estado.", 130000, 4);
const auto5 = new Autos("Volkswagen", "Vento TDI", 2006, 1700000, "Diesel", "Motor 1.9 diesel, tapizados de cuero, climatizador bizona, pantalla 10pulgadas con android", 150000, 5);
const auto6 = new Autos("Fiat", "Mobi easy", 2017, 1950000, "Nafta", "Motor 1.4, full, excelente estado general transmision manual", 60000, 6);
const auto7 = new Autos("Fiat", "Punto attractive", 2011, 1600000, "Nafta", "Motor 1.4 5 puertas, con cierre centralizado, levanta vidrios, aire acondicionado, airbag, faros antiniebla, dirección asistida.", 162000, 7);
const auto8 = new Autos("Ford", "Ranger", 2013, 3400000, "Diesel", "Camioneta 4x2 safety, con tapizados de cuero, pantalla tactil 10pulgadas, excelente estado de cubiertas, transmision manual", 136000, 8);
const auto9 = new Autos("Fiat", "Cronos", 2022, 3500000, "Nafta", "Motor 1.3, cuenta con cierre centralizado, alza cristales electricos, espejos electricos, pantalla tactil", 0, 9);

const autosEnVenta = [];

autosEnVenta.push(auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9);

function agregandoProducto() {
    let marca = prompt("Ingrese la marca del vehiculo");
    let nombre = prompt("Ingrese el nombre del vehiculo");
    let anio = prompt("Ingrese el año del vehiculo");
    let precio = prompt("Ingrese el precio del vehiculo");
    let combustible = prompt("Ingrese el cumbustible del vehiculo");
    let caracteristicas = prompt("Ingrese las caracteristicas del vehiculo");
    let kilometraje = prompt("Ingrese el kilometraje del vehiculo");

    const autoNew = new Autos(marca, nombre, anio, precio, combustible, caracteristicas, kilometraje);
    console.log(autoNew);

    autosEnVenta.push(autoNew);
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

/*for(const auto of autosEnVenta) {
    let listado = document.createElement("div");
    listado.innerHTML =`<h3>${auto.marca} ${auto.modelo}</h3>
                        <h3>Precio: ${auto.precio}</h3>
                        <p>Año: ${auto.anio}</p>
                        <p>Combustible: ${auto.combustible}</p>
                        <p>Kilometraje: ${auto.kilometraje}</p>
                        <p>Caracteristicas: ${auto.caracteristicas}</p>
                        <p>Disponibilidad: ${auto.disponible}</p>
                        <button id="boton">Consultar financiación</button>
                        `
    document.getElementById("main").append(listado);
}*/

function consultarFinanciacion() {
    let entrega = parseInt(prompt("Cuanto dinero va a entregar"));
    let cuotas = parseInt(prompt("En cuantas cuotas queres financiar?(Podes elegir entre 12, 24, 36, 48, 60 y 72)"));
    let resultado;

    switch(cuotas) {
        case 12:
            resultado = ((((this.auto.precio - entrega) * 40)) / 100) / 12;
            alert(`La financiacíon te quedaria en 12 cuotas de ${resultado}`);
            break;

        case 24:
            resultado = ((((this.auto.precio - entrega) * 40)) / 100) / 24;
            alert(`La financiacíon te quedaria en 24 cuotas de ${resultado}`);
            break;
        case 36:
            resultado = ((((auto.precio - entrega) * 40)) / 100) / 36;
            alert(`La financiacíon te quedaria en 36 cuotas de ${resultado}`);
            break;
        case 48:
            resultado = ((((auto.precio - entrega) * 40)) / 100) / 48;
            alert(`La financiacíon te quedaria en 48 cuotas de ${resultado}`);
            break;
        case 60:
            resultado = ((((auto.precio - entrega) * 40)) / 100) / 60;
            alert(`La financiacíon te quedaria en 60 cuotas de ${resultado}`);
            break;
        case 72:
            resultado = ((((auto.precio - entrega) * 40)) / 100) / 72;
            alert(`La financiacíon te quedaria en 72 cuotas de ${resultado}`);
            break;
        
    }
}
let input = document.getElementById("buscador");
let busqueda = document.getElementById("form");
busqueda.addEventListener("submit", buscadorDeProductos);
let botoness = document.getElementById("ingresar");
botoness.addEventListener("click", verificarUsuario);