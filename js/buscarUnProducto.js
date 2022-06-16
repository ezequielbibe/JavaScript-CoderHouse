// BUSCAR UN PRODUCTO DEL CATALOGO


const buscadorDeProductos = (e) => {
    let resultadovich = [];
    e.preventDefault();

    if(autosEnVenta.some((el) => el.modelo.toUpperCase().includes(input.value.toUpperCase()))) {
        let resultado = autosEnVenta.filter((el) => el.modelo.toUpperCase().includes(input.value.toUpperCase()));
        for (const result of resultado) {
           resultadovich = resultadovich + `• ${result.modelo} - $${result.precio} \n`;
        }
        Swal.fire(
            '¡Resultado de tu busqueda!',
            `${resultadovich}`,
            'info'
        )
    } else {
        Swal.fire(
            'x.x',
            'No pudimos encontrar ningun modelo en la web',
            'warning'
          )
    }
}

let input = document.getElementById("buscador");
let busqueda = document.getElementById("form");
busqueda.addEventListener("submit", buscadorDeProductos);