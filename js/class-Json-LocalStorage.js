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
        this.id = JSON.parse(localStorage.getItem("autosEnVenta")).length + 1;
        this.imagen = imagen.toUpperCase()  ===  'NO' ? 'https://static.vecteezy.com/system/resources/previews/004/855/556/non_2x/photo-camera-icon-with-hand-drawn-doodle-style-isolated-on-white-vector.jpg' : imagen; 
    }

    vender(){
        this.disponible = "Vendido";
    }
}

let autosEnVenta = [];
const traerDatosJson = async () => {

    let response = await fetch("./json/autos.json");
    let data = await response.json();

    autosEnVenta = data;
    let autosCero = autosEnVenta.filter((el) => el.kilometraje === 0);
    localStorage.getItem("autosEnVenta") ? console.log("Autos cargados en sistema") : localStorage.setItem("autosEnVenta", JSON.stringify(autosEnVenta));
    localStorage.getItem("autos0km") ? console.log("Autos0km cargados en sistema") : localStorage.setItem("autos0km", JSON.stringify(autosCero));
    let autosUsados = autosEnVenta.filter((el) => el.kilometraje != 0);
    localStorage.getItem("autosUsados") ? console.log("Autos usados cargados en sistema") : localStorage.setItem("autosUsados", JSON.stringify(autosUsados));
    mostrarCeros();
    mostrarUsados();
}

traerDatosJson();
localStorage.setItem("user1", "coderhouse@hotmail.com");
localStorage.setItem("passUser1", "coder123");
let userUno = localStorage.getItem("user1");
let passUno = localStorage.getItem("passUser1");