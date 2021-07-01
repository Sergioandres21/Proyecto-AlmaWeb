
var form = document.getElementById('formcontacto');
function validacion(){
   form.addEventListener('submit', function(evt){
     evt.preventDefault();
    
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


        if (form.nombre.value ==0){
          swal('Error','El campo nombre es obligatorio','error');
          return 0;
        }

        if(form.nombre.value.length <= 2){
          swal('Error','El campo nombre debe ser mayor a 2 carácteres','error');
          return 0;
        }

        if (form.apellido.value ==0){
          swal('Error','El campo apellido es obligatorio','error');
          return 0;
        }

        if(form.apellido.value.length <= 2){
          swal('Error','El campo apellido debe ser mayor a 2 carácteres','error');
          return 0;
        }

        if (form.email.value == 0){
          swal('Error','El campo email es obligatorio','error');
          return 0;
        }

        if (form.asunto.value ==0){
          swal('Error','El campo asunto es obligatorio','error');
          return 0;
        }

        if (form.mensaje.value ==0){
          swal('Error','El campo mensaje es obligatorio','error');
          return 0;
        }

        if(form.mensaje.value.length < 10){
          swal('Error','El campo mensaje debe ser mayor a 10 carácteres','error');
          return 0;
        }

        if (emailRegex.test(form.email.value) == false) {
          swal('Error','No ha ingresado correctamente el email','error');
          return 0;
        }

        swal('Correcto','Mensaje envíado con exito','success');
   });
  }




/*
  function validacion(){
        var valor = document.formcontacto.email.value;
        var form = document.formcontacto;
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


        if (form.nombre.value ==0){
          swal('Error','El campo nombre es obligatorio','error');
        }

        if (form.asunto.value ==0){
          swal('Error','El campo asunto es obligatorio','error');
        }

        if (form.mensaje.value ==0){
          swal('Error','El campo mensaje es obligatorio','error');
        }

        if (form.email.value == 0){
          swal('Error','El campo email es obligatorio','error');
        }

        if (emailRegex.test(valor)) {
          swal('Correcto','Ha ingresado correctamente el email','success');
        } else {
          swal('Error','No ha ingresado correctamente el email','error');
        }

        swal('Correcto','Mensaje envíado con exito','success');
    }
*/

    //validando el campo nombre de tipo texto

    /*if (isNaN(identificacion)){
        alert("su identificacion no es numerica")
        document.clientes.identificacion.focus()
    }
    else{
      Identificacion = document.clientes.identificacion.value;
      if (Identificacion.length>12){

      alert("se ha excedido en la cantidad de caracteres en el campo identificacion")
           document.clientes.identificacion.focus()
           return 0;}
    }
    if (document.clientes.nombre.value.length == 0){
           alert("Tiene que ingresar el nombre");
           document.clientes.nombre.focus();
           return 0;
    }
    else if (document.clientes.nombre.value.length >= 25){
        alert("La cantidad de caracteres no cumple");
           document.clientes.nombre.focus();
           return 0;
    }
    if (document.clientes.apellido.value.length == 0){
           alert("Tiene que ingresar el apellido");
           document.clientes.apellido.focus();
           return 0;
    }
    else if (document.clientes.apellido.value.length >= 25){
          alert("La cantidad de caracteres no cumple");
           document.clientes.apellido.focus();
           return 0;
    }
    if (document.clientes.direccion.value.length == 0){
           alert("Tiene que ingresar la dirección");
           document.clientes.direccion.focus();
           return 0;
    }
    else if (document.clientes.direccion.value.length >= 25){
          alert("La cantidad de caracteres no cumple");
           document.clientes.direccion.focus();
           return 0;
    }*/
    
    
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    /*
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    function validacion(){
      var valor = document.clientes.email.value;
      valor1 = document.clientes.telefono.value;
      var identificacion = document.clientes.identificacion.value;
      var estado = document.clientes.estado.value;
    if (emailRegex.test(valor)) {
      valor.innerText = "válido";
      alert("ha ingresado correctamente")
    } else {
      valor.innerText = "incorrecto";
      alert("no ha ingresado correctamente")
      document.Clientes.email.focus()
    }
    // validando el teléfono
    if( (/^\d{9}$/.test(valor1))) {
        alert("ha ingresado un telefono válido")
    } else if (valor1 = null){
        alert("no ha ingresado un telefono")
        document.clientes.telefono.focus()
        return 0;
    }

    // validando el estado

    if (estado == 0 || estado == ""){
      alert("Seleccione una opción para continuar");
      document.clientes.estado.focus();
    } else if (estado == 1 || estado == 2) {
    
      alert("Opción seleccionada con éxito");
      document.clientes.estado.focus();
     
    }
    
       
    alert("Gracias por enviar el formulario");
    document.clientes.submit();
}
*/