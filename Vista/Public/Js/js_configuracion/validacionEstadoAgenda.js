
$("#formulario").validate({
    rules: {
      IDestado:{
        required: true,
        digits: true,
      },
      nombreEstado: {
        required: true,
        minlength: 3,
        maxlength: 45
      }
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Estado de agenda registrado con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
      nombreEstadoM: {
        required: true,
        minlength: 3,
        maxlength:45
      }
    },
  })
  
  $("#IDestadoM").attr("disabled",true);
  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Estado de agenda actualizada con exito','success');
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
   