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
      tipodocumento: {
        required: true,
      },
      numerodocumento: {
        required: true,
        digits: true,
        validarIdent: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
      },
      email: {
        required: true,
        email: true
      },
      contrasena: {
        required: true,
        pass : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,55}$/,
      },
      confir_contrasena: {
        required: true,
        equalTo: "#contrasena",
      },
      celular: {
        required: true,
        digits: true,
        validarCelu: /^3[\d]{9}$/,
      },
    },
  })

  $.validator.addMethod('validarIdent', function(value, element, param) 
      {
        return this.optional(element) || value.match(param);
      },'El número de identificación no es correcto');
  
$.validator.addMethod('pass', function(value, element, param) 
      {
        return this.optional(element) || value.match(param);
    },'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.');

$.validator.addMethod('validarCelu', function(value, element, param) 
    {
      return this.optional(element) || value.match(param);
  },'El número de celular no es correcto');
  
  $("#Actualizar").click(function () {
    if ($("#formulario").valid() == false) {
      return;
    }
    swal('Correcto', 'Información actualizada con exito', 'success');
  })
