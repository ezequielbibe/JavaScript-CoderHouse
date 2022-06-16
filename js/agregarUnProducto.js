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
            '<input type="text" placeholder="Imagen" class="swal2-input" id="input8">'+
            '<p>*Si no tenes una foto para poner, porfavor escribe la palbra "No" en imagen</p>',
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
            let totalVehi;
            const autoNew = new Autos(inputForm1.value, inputForm2.value, inputForm3.value, parseInt(inputForm4.value), inputForm5.value, inputForm6.value, inputForm7.value, inputForm8.value);
            const Toast = Swal.mixin({
                toast: true,
                text: 'la pagina se recarga en segundos.',
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
                totalVehi = JSON.parse(localStorage.getItem("autosEnVenta"));
                totalVehi.push(autoNew);
                localStorage.setItem("autosEnVenta", JSON.stringify(totalVehi))
                setTimeout(function(){
                    window.location.href = window.location.href;
                }, 3100);
            } else {
                agora = JSON.parse(localStorage.getItem("autos0km"));
                agora.push(autoNew);
                localStorage.setItem("autos0km", JSON.stringify(agora));
                mostrarCeros();
                totalVehi = JSON.parse(localStorage.getItem("autosEnVenta"));
                totalVehi.push(autoNew);
                localStorage.setItem("autosEnVenta", JSON.stringify(totalVehi))
                setTimeout(function(){
                    window.location.href = window.location.href;
                }, 3100);
            }
        }
    })()
}