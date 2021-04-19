addEventListener('DOMContentLoaded', ()=>{
    console.log("entró a la validación");
    const formulario = document.querySelector('form');

    let inputNombre = formulario.elements[0]
    let inputEmail = formulario.elements[1]
    let inputAsunto = formulario.elements[2]
    let inputComentario = formulario.elements[3]

    /* EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL*/
    let regExEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    inputNombre.addEventListener('blur',function(){
        console.log(inputNombre.value.length);
        switch(true){
            case this.value.length===0:
                errorNombre.innerHTML = "Debe ingresar un nombre";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }
    })
    inputEmail.addEventListener('blur', function(){
        switch(true){
            case this.value.length===0:
                errorEmail.innerHTML = "Debe ingresar su email.";
                this.classList.add('is-invalid');
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser valido.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorEmail.innerHTML = "";
                break;
        }
    })
    inputAsunto.addEventListener('blur', function(){
        switch(true){
            case this.value.length===0:
                errorAsunto.innerHTML = "Debe ingresar el asunto.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorAsunto.innerHTML = "";
                break;
        }
    })
    inputComentario.addEventListener('keyup', function(){
        switch(true){
            case this.value.length>=0 && this.value.length<=20:
                errorComentario.innerHTML = "Debe ingresar minimo 20 caracteres.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorComentario.innerHTML = "";
                break;
        }
    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        console.log("Formulario: ");
        console.log(elementos);
        let error = false
        for (let i = 0; i < 3; i++) {
            if (elementos[i].value == 0) {
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if (elementos[0].value.length < 4) {
            console.log("entro nombre");
            error = true
            errorNombre.innerHTML = "Tenés que llenar este campo"
            this.classList.add('is-invalid')
        }
        if (elementos[1].value.length < 1) {
            console.log("entro email");
            error = true
            errorEmail.innerHTML = "Tenés que llenar este campo"
            this.classList.add('is-invalid')
        }
        if (elementos[2].value.length < 1) {
            console.log("entro email");
            error = true
            errorAsunto.innerHTML = "Tenés que llenar este campo"
            this.classList.add('is-invalid')
        }
        if (elementos[3].value.length < 4) {
            console.log("entro comentario");
            error = true
            errorComentario.innerHTML = "Tenés que poner al menos 20 Caracteres"
            this.classList.add('is-invalid')
        }
        if (!error) {
            errorSubmit.innerHTML = ""
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Tu mensaje ha sido enviado.',
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                formulario.submit();
                })
                .then(()=>{
                    res.render('index.html')
                })
        }
        else {
            errorSubmit.innerHTML = "Los campos señalados son obligatorio."
        }
    })
})