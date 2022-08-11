document.addEventListener('DOMContentLoaded', () =>{

    const button = document.querySelector('#regBtn');
    button.addEventListener('click', (event) => {

        event.preventDefault();

        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const email = document.getElementById('email');
        const pass1 = document.getElementById('password1');
        const pass2 = document.getElementById('password2');
        const check = document.getElementById('terminos');

        const input = document.getElementsByClassName('form-control');


        if (!check.checked || Array.from(input).some(input => input.value == '')){
            showAlertError();
        } else if (pass1.value.length > 5 && pass1.value == pass2.value){
            showAlertSuccess();
        } else {
            showAlertError();
        }

    })

});