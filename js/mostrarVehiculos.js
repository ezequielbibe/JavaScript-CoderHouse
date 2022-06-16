// MOSTRAR PRODUCTOS

const mostrarCeros = () => {
    let autosCerosLS = JSON.parse(localStorage.getItem("autos0km"));
    autosCerosLS.forEach(auto => {
        let {marca, modelo, anio, precio, combustible, caracteristicas,kilometraje, imagen, id} = auto;
        let ceros = document.createElement("div");
        ceros.innerHTML = `
                            <div class="ceros-card-img">
                                <img src="${imagen}" alt="${modelo}">
                            </div>
                            <div class="ceros-card-text">
                                <h3>${marca} ${modelo}</h3>
                                <p>${caracteristicas}</p>
                                <button id="btn${id}" class="btn">calcular financiación</button>
                            </div>`;
        ceros.className = "ceros-card";
        document.getElementById("cero").append(ceros);
        let btn = document.getElementById(`btn${id}`);
        btn.addEventListener("click", ()=> {
            (async () => {
                const { value: calculoFin} = await Swal.fire({
                    title: 'Calcular Financiacion.',
                    html: ` <p>Seleccione la cantidad de cuotas.</p>
                            <select id="select" name="select" class="swal2-input">
                                <option value="12">12 cuotas</option>
                                <option value="24">24 cuotas</option>
                                <option value="36">36 cuotas</option>
                                <option value="48">48 cuotas</option>
                                <option value="60">60 cuotas</option>
                                <option value="72">72 cuotas</option>
                            </select>`,
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
                            inputForm1 = document.getElementById('select'),
                        ]
                    }
                })
                if(calculoFin){
                    
                    const mensajeFin = (interes, calculo) => {
                        Swal.fire({
                            title: `${marca} ${modelo}`,
                            html: `<h3>El precio del vehiculo seleccionado es de $${precio}</h3>`+
                                    `<p>En ${inputForm1.value} cuotas tiene un interes del ${interes}%.</p>`+
                                    `<p>Le quedaria el precio final del vehiculo en $${precio + (precio * calculo)} en ${inputForm1.value} cuotas de $${(precio + (precio * calculo)) / inputForm1.value}</p>`,
                            confirmButtonText: 'Confirmar',
                            padding: '1rem',
                            allowOutsideClick: false,
                            allowEscapeKey: true,
                            allowEnterKey: false, 
                            confirmButton: true,
                            confirmButtonColor: '#34358d',
                            confirmButtonAriaLabel: 'Confimar'
                        });
                    }
                    switch(inputForm1.value) {
                        case '12': 
                            mensajeFin(17, 0.17);
                        break;

                        case '24':
                            mensajeFin(35, 0.3);
                        break;

                        case '36':
                            mensajeFin(69, 0.69);
                        break;

                        case '48':
                            mensajeFin(86, 0.86);
                        break;

                        case '60':
                            mensajeFin(103, 1.03);
                        break;

                        case '72':
                            mensajeFin(120, 1.20);
                        break;
                    }
                }
            })()
        })
    })
}

const mostrarUsados = () => {
    let autosUsadosLS = JSON.parse(localStorage.getItem("autosUsados"));
    autosUsadosLS.forEach(auto => {
        let usados = document.createElement("div");
        let {marca, modelo, anio, precio, combustible, caracteristicas,kilometraje, imagen, id} = auto;
        usados.innerHTML = `
                            <div class="usados-card-img">
                                <img src="${imagen}" alt="${modelo}">
                            </div>
                            <div class="usados-card-text">
                                <h3>${marca} ${modelo}</h3>
                                <p>${caracteristicas}</p>
                                <button id="btn${id}" class="btn">calcular financiación</button>
                            </div>`;
        usados.className = "usados-card";
        document.getElementById("usado").append(usados);
        
        let btn = document.getElementById(`btn${id}`);
        btn.addEventListener("click", ()=> {
            (async () => {
                const { value: calculoFin} = await Swal.fire({
                    title: 'Calcular Financiacion.',
                    html: ` <p>Seleccione la cantidad de cuotas.</p>
                            <select id="select" name="select" class="swal2-input">
                                <option value="12">12 cuotas</option>
                                <option value="24">24 cuotas</option>
                                <option value="36">36 cuotas</option>
                                <option value="48">48 cuotas</option>
                                <option value="60">60 cuotas</option>
                                <option value="72">72 cuotas</option>
                            </select>`,
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
                            inputForm1 = document.getElementById('select'),
                        ]
                    }
                })
                if(calculoFin){
                    
                    const mensajeFin = (interes, calculo) => {
                        Swal.fire({
                            title: `${marca} ${modelo}`,
                            html: `<h3>El precio del vehiculo seleccionado es de $${precio}</h3>`+
                                    `<p>En ${inputForm1.value} cuotas tiene un interes del ${interes}%.</p>`+
                                    `<p>Le quedaria el precio final del vehiculo en $${precio + (precio * calculo)} en ${inputForm1.value} cuotas de $${(precio + (precio * calculo)) / inputForm1.value}</p>`,
                            confirmButtonText: 'Confirmar',
                            padding: '1rem',
                            allowOutsideClick: false,
                            allowEscapeKey: true,
                            allowEnterKey: false, 
                            confirmButton: true,
                            confirmButtonColor: '#34358d',
                            confirmButtonAriaLabel: 'Confimar'
                        });
                    }
                    switch(inputForm1.value) {
                        case '12': 
                            mensajeFin(17, 0.17);
                        break;

                        case '24':
                            mensajeFin(35, 0.3);
                        break;

                        case '36':
                            mensajeFin(69, 0.69);
                        break;

                        case '48':
                            mensajeFin(86, 0.86);
                        break;

                        case '60':
                            mensajeFin(103, 1.03);
                        break;

                        case '72':
                            mensajeFin(120, 1.20);
                        break;
                    }
                }
            })()
        })
    })
}