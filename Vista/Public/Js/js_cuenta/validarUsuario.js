
$("#formulario").validate({  
    rules: {
      Idusuario:{
        required: true,
        digits: true,
        validarIdent: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
      },
      Idrol: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      numero: {
        required:true,
        digits:true,
        validarCelu: /^3[\d]{9}$/,
      },
        contrasena: {
          required:true,
          pass : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,55}$/,
        },
        contrasena1: {
          required:true,
          equalTo:"#contrasena" },
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
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Usuario registrado con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
      emailM: {
        required: true,
        email: true
      },
      numeroM: {
        required:true,
        digits:true,
        validarCelu: /^3[\d]{9}$/,
      },
        contrasenaM: {
          required:true,
          pass : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,55}$/,
        },
        contrasenaM1: {
          required:true,
          equalTo:"#contrasenaM" },
    },
  })
  
  $("#IdusuarioM").attr("disabled",true);
  $("#IdrolM").attr("disabled",true);
  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Usuario actualizado con exito','success');
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
   