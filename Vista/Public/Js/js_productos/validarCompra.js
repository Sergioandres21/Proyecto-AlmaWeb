$("#formulario").validate({
    rules: {
    nombre: {
        required: true,
        maxlength: 45,
    },
    apellido: {
        required: true,
        maxlength: 40,
    },
    email: {
        required: true,
        email: true,
    },
    celular: {
        required: true,
        digits: true,
        validarCelu: /^3[\d]{9}$/,
    },
    direccion: {
        required: true,
        maxlength: 55,
    },
    departamento: {
        required: true,
    },
    municipio: {
        required: true,
    },
    },
  })

  $("#pago").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    alert('Compra registrada con éxito');
  })

  $.validator.addMethod('validarCelu', function(value, element, param) 
  {
    return this.optional(element) || value.match(param);
  },'El número de celular no es correcto');


$('#formulario').submit(function(e){
    // si la cantidad de checkboxes "chequeados" es cero,
    // entonces se evita que se envíe el formulario y se
    // muestra una alerta al usuario
    if ($('input[type=checkbox]:checked').length === 0) {
        e.preventDefault();
        alert('Debe de seleccionar al menos un método de pago');
    }
});