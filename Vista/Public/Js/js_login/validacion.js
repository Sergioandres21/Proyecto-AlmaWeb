
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
        email: true
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
  
