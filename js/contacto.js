// FORM CONTACTO
const form = document.getElementById("contactamosForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Mensaje enviado',
      })
    form.remove();

    let btnForm = document.createElement('button');
    btnForm.innerHTML = `<button id="btnForm" class="btn">Mandar otro mensaje</button>`;
    document.getElementById("contacto").append(btnForm);

    let btnFrom2 = document.getElementById("btnForm");
    btnFrom2.addEventListener("click", ()=>{
        document.getElementById("contacto").append(form)
        btnForm.remove();
    })
});