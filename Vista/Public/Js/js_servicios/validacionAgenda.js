$("#formulario").validate({
    rules: {
    fecha: {
        required: true,
    },
    hora: {
        required: true,
    },
    profesional: {
        required: true,
    },
    servicio: {
        required: true,
    },
    nombre: {
        required: true,
        maxlength: 45,
    },
    apellido: {
        required: true,
        maxlength: 40,
    },
    celular: {
        required: true,
        validarCelu: /^3[\d]{9}$/,
    },
    email: {
        required: true,
        email: true,
    },
    departamento: {
        required: true,
    },
    ciudad: {
        required: true,
    },
    },
  })

  $("#continuar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    alert('Agenda registrada con éxito');
  })

  $.validator.addMethod('validarCelu', function(value, element, param) 
  {
    return this.optional(element) || value.match(param);
  },'El número de celular no es correcto');
