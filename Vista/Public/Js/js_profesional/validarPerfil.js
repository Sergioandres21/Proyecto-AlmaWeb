
$("#formulario2").validate({
    rules: {
      nombre:{
        required: true,
        minlength: 2,
        maxlength: 45
      },
      apellido: {
        required: true,
        minlength: 2,
        maxlength: 40
      },
      tipo_documento: {
        required: true,
      },
      identificacion: {
        required: true,
        digits: true,
        validarIdent: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
      },
      correo: {
        required: true,
        email: true,
      },
      celular: {
          required: true,
          digits: true,
          validarCelu: /^3[\d]{9}$/,
      },
      contrasena: {
          required: true,
          pass : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,55}$/,
      },
      contrasena2: {
          required: true,
          equalTo:"#contrasena",
      },
      Direccion: {
        maxlength: 55,
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
  
  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Información actualizada con exito','success');
  })
  
  
  function mensaje1(){
    swal({
      title: "Pregunta",
      text: "¿Está seguro que desea activar este elemento?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Se activo exitosamente", {
          icon: "success",
        });
      } else {
        swal("No se compreto la acción");
      }
    });
    return 0;
  }
  
  function mensaje2(){
        swal({
          title: "Pregunta",
          text: "¿Está seguro que desea desactivar este elemento?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Se desactivo exitosamente", {
              icon: "success",
            });
          } else {
            swal("No se completo la acción");
          }
        });
        return 0;
  }
   