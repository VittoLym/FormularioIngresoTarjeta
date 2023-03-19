const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir'),
    Form = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logoMarca'),
    Firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year')
    CCV = document.querySelector('#tarjeta .ccv')


    // voltear hacia el frente
const turnCard = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
}
// voltear hacia el resverso
const returnCard = () => {
    if(!tarjeta.classList.contains('active')){
    tarjeta.classList.toggle('active');
    }
}

    //* Rotacion tarjeta
    tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
//* Abrir y cerar form
btnAbrirFormulario.addEventListener('click',() => {
    btnAbrirFormulario.classList.toggle('active')
    Form.classList.toggle('active');
});
//* Select del mes dinamico
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText =i;
    Form.selectMes.appendChild(opcion);
}
//* Select del año dinamico 
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText =i;
    Form.selectYear.appendChild(opcion);
}
//* Input numero de tarjeta 
Form.inputNumero.addEventListener('keyup',(e) => {
    const inputNumero= e.target.value;

    Form.inputNumero.value = inputNumero
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar letras
    .replace(/\D/g, '')
    // Espaciado
    .replace(/([0-9]{4})/g,'$1 ')
    .trim();

    numeroTarjeta.textContent = inputNumero;
    if(inputNumero == ''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = ''
    }
    if (inputNumero[0] == 4){
        logoMarca.innerHTML = '';
        const img = document.createElement('img');
        img.src = '/assets/img/visa.png'
        logoMarca.appendChild(img);
    }
    else if(inputNumero[0] == 5){
        logoMarca.innerHTML = '';
        const img = document.createElement('img');
        img.src = '/assets/img/mastercard.png'
        logoMarca.appendChild(img);
    };

// voltear  tarjeta 
    turnCard();
})
// Input nombre tarjeta 
Form.inputName.addEventListener('keyup', (e) =>{
    const nameCard = e.target.value;
    Form.inputName.value = nameCard
    // Eliminar numeros
    .replace(/[0-9]/g, '')
    nombreTarjeta.textContent = nameCard
    Firma.textContent = nameCard;
    if(nameCard == ''){
        nombreTarjeta.textContent = "JOHN DOE"
    };
});
// select mes
Form.selectMes.addEventListener('change', (e)=> {
    mesExpiracion.textContent = e.target.value;
    turnCard();
});
//select año
Form.selectYear.addEventListener('change', (e)=> {
    yearExpiracion.textContent = e.target.value.slice(2);
    turnCard();
});
// CCV Dinamico 
Form.inputCCV.addEventListener('keyup', () => {
    returnCard();

    Form.inputCCV.value = Form.inputCCV.value
    .replace(/\D/g, '')
    .replace(/\s/g, '');

    CCV.textContent = Form.inputCCV.value
});