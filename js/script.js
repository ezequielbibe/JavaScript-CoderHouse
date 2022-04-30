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
            break;
        }
    }
}
verificarUsuario();

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

const producto1 = new Productos("Placa De Video Sapphire Pulse Rx 6500 Xt Oc 4gb Gddr6 Radeon", "AMD", 52000, "La tarjeta gráfica SAPPHIRE PULSE AMD Radeon RX 6500 XT funciona con la potente tecnología de enfriamiento Dual-X junto con el control inteligente del ventilador para mantener bajas las temperaturas y el ruido del ventilador. El diseño refinado de PCB ofrece un rendimiento estable, confiable y constante, lo que reduce de manera eficiente la temperatura de la PCB y el ruido de la señal de los componentes.", "5");

const productosEnVenta = [];
    productosEnVenta.push(producto1);

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
