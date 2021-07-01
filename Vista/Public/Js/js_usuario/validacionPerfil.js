
$("#formulario").validate({
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
      },
      correo: {
        required: true,
        email: true,
      },
      celular: {
          required: true,
          digits: true,
      },
      contrasena: {
          required: true,
          minlength:5,
          maxlength:20,
      },
      contrasena2: {
          required: true,
          equalTo:"#contrasena",
      }
    },
  })
  
  
  $("#Actualizar").click(function(){
    if($("#formulario").valid() == false){
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
   