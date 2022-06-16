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