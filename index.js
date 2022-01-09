let text = document.querySelector('#input');
let button = document.querySelector('#button');
let buttonBorrar = document.querySelector('#buttonBorrar');
let container = document.querySelector('#container');
let colorPickerFondo = document.querySelector('#colorFondo');
let colorPickerLetra = document.querySelector('#colorLetra');



colorPickerFondo.addEventListener('change', () => {

    text.style.background = colorPickerFondo.value

})

colorPickerLetra.addEventListener('change', () => {
    text.style.color = colorPickerLetra.value
})

if (text.style.background === '') {

    text.style.background = colorPickerFondo.value;

}

if (text.style.color === '') {

    text.style.color = colorPickerLetra.value;

}

button.addEventListener('click', () => {


    if (text.value.trim().length !== 0) {
        let CONTENT = document.createElement('textarea');
        CONTENT.disabled = true;
        CONTENT.classList.add('content');
        CONTENT.textContent = text.value;
        CONTENT.setAttribute('style', ` background: ${text.style.background} ; color: ${text.style.color};  width: 180px; height: 180px;`);
        container.appendChild(CONTENT);

    }
});

buttonBorrar.addEventListener('click', () => {

    container.removeChild(container.lastChild);

});