
$("#formulario").validate({  
    rules: {
      email: {
        required: true,
        email: true
      },
    },
  })
  
  
  $("#Recuperar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Solicitud envíada al correo con exito','success');
  })
  
  
  $("#form").validate({
    rules: {
      contrasena: {
        required: true,
        pass : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,55}$/,
      },
      contrasena1: {
        required:true,
        equalTo:"#contrasena",
      },
    },
  })

  
  $("#Recuperar1").click(function(){
    if($("#form").valid() == false){
     return;
    }
    swal('Correcto','Contraseña modificada con exito','success');
  })
  
  
$("#formu").validate({  
    rules: {
      email2: {
        required: true,
        email: true
      },
    },
  })
  
  
  $("#Recuperar2").click(function(){
    if($("#formu").valid() == false){
     return;
    }
    swal('Correcto','Usuario enviado al correo con exito','success');
  })

  $.validator.addMethod('pass', function(value, element, param) 
  {
    return this.optional(element) || value.match(param);
  },'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.');
  
