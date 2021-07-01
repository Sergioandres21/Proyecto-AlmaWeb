
$("#formulario").validate({
    rules: {
    IDunidad:{
        required: true,
        digits: true,
      },
      nombreunidad: {
        required: true,
        minlength: 2,
        maxlength: 25
      },
      valor: {
        required: true,
        digits:true,
      }
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Unidad de medida registrada con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
        nombreunidadM: {
        required: true,
        minlength: 2,
        maxlength: 25
          },
          valorM: {
            required: true,
            digits:true,
          }
    },
  })
  
$("#IDunidadM").attr("disabled",true);

  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Unidad de medida actualizada con exito','success');
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
   