
$("#formulario").validate({
    rules: {
    razonsocial:{
        required: true,
        maxlength: 35,
      },
      municipio: {
        required: true,
      },
      direccion: {
          required: true,
          maxlength: 55,
      },
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Centro de estética registrado con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
        direccionM: {
            required: true,
            maxlength: 55,
          }
    },
  })
  
$("#razonsocialM").attr("disabled",true);
$("#municipioM").attr("disabled",true);

  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Centro de estética actualizado con exito','success');
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
   