
$("#formulario").validate({  
    rules: {
      Idusuario:{
        required: true,
        digits: true,
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
        maxlength:11
      },
        contrasena: {
          required:true,
          minlength:5,
          maxlength:20,
        },
        contrasena1: {
          required:true,
          equalTo:"#contrasena" },
    },
  })
  
  
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
        maxlength:11
      },
        contrasenaM: {
          required:true,
          minlength:5,
          maxlength:20,
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
   