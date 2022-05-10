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

class Productos {
    constructor(nombre, marca, precio, caracteristicas, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.caracteristicas = caracteristicas;
        this.stock = stock;
    }

    vender(){
        this.stock = this.stock - 1;
    }
    ingresoStock(cantidad){
        this.stock = this.stock + parseInt(cantidad)
    }
}

const producto1 = new Productos("Placa De Video Rx 6500 Xt Oc 4gb Gddr6 Radeon", "AMD", 52000, "La tarjeta gráfica SAPPHIRE PULSE AMD Radeon RX 6500 XT funciona con la potente tecnología de enfriamiento Dual-X junto con el control inteligente del ventilador para mantener bajas las temperaturas y el ruido del ventilador. El diseño refinado de PCB ofrece un rendimiento estable, confiable y constante, lo que reduce de manera eficiente la temperatura de la PCB y el ruido de la señal de los componentes.", "5");
const producto2 = new Productos("Procesador Intel Core i3-10100F", "Intel", 13500, "Microprocesador Intel de 10ma generacion, con 4 núcleos de CPU, y una frecuencia maxima de 4.3GHz", 4);
const producto3 = new Productos("Procesador Intel Core i3-10100", "Intel", 20000, "Microprocesador Intel de 10ma generacion, con 4 núcleos de CPU, y una frecuencia maxima de 4.3GHz. Cuenta con graficas integradas UHD Graphics 630", "5");
const producto4 = new Productos("Procesador Intel Core i5-10400F", "Intel", 23500, "Microprocesador Intel DDR4 de 10ma generacion con 6 núcleos y una frecuencia maxima de 4.3GHz", "2")
const producto5 = new Productos("Procesador Intel Core i5-10400F", "Intel", 27000, "Microprocesador Intel DDR4 de 10ma generacion con 6 núcleos y una frecuencia maxima de 4.3GHz con tarjeta grafica intregrada UHD Graphics 630", "3")
const producto6 = new Productos("Placa de video Nvidia Asus Phoenix GeForce GTX1650", "Nvidia", 48000, "Tarjeta grafica Nvidia GDDR6, con tamaño de memoria de 4GB con conectividad HDMI 2.0b, DL-DVI-D, DisplayPort 1.4", "1");
const producto7 = new Productos("Placa de video Nvida GeForce GTX1660 SUPER", "Nvidia", 80000, "Tarjeta Grafica Nvidia GDDR6, con tamaño de memoria de 6GB con conectividad DisplayPort 1.4, HDMI 2.0b", "2");
const productosEnVenta = [];

productosEnVenta.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7);

function agregandoProducto() {
    let nombreNew = prompt("Ingrese el nombre del producto");
    let marcaNew = prompt("Ingrese la marca del producto");
    let precioNew = prompt("Ingrese el precio del producto");
    let caracteristicasNew = prompt("Ingrese las caracteristicas del producto");
    let stockNew = prompt("Ingrese el stock del producto");

    const productoNew = new Productos(nombreNew, marcaNew, precioNew, caracteristicasNew, stockNew);
    console.log(productoNew);

    productosEnVenta.push(productoNew);
}
let resultadovich = [];

function buscadorDeProductos(){
    let busqueda = prompt("Busqueda de producto");

    if(productosEnVenta.some((el) => el.nombre.toUpperCase().includes(busqueda.toUpperCase()))) {
        let resultado = productosEnVenta.filter((el) => el.nombre.toUpperCase().includes(busqueda.toUpperCase()));
        for (const result of resultado) {
           resultadovich = resultadovich + `• ${result.nombre} - $${result.precio} \n`;
        }
        alert(`Resultado de tu busqueda:\n ${resultadovich}`);
    } else {
        alert("No pudimos encontrar nada en la web :(");
    }
}

for(const producto of productosEnVenta) {
    let stock;
    if(producto.stock < 1) {
        stock = "Sin STOCK";
    } else {
        stock = "Stock Disponible"
    }
    let listado = document.createElement("div");
    listado.innerHTML =`<h3>${producto.nombre}</h3>
                        <h4>Marca: ${producto.marca}</h4>
                        <p>Precio: ${producto.precio}</p>
                        <p>Caracteristicas: ${producto.caracteristicas}</p>
                        <p>Stock: ${stock}
                        `
    document.getElementById("main").append(listado);
}

alert("Sistema para verificar usuario");
verificarUsuario();
alert("Sistema para agregar un producto a la venta")
agregandoProducto();
alert("Sistema de busqueda de productos en venta");
buscadorDeProductos();