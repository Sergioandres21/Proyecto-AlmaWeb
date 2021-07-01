
$("#formulario").validate({
    rules: {
      IDproducto:{
        required: true,
      },
      cantidad: {
        required: true,
        digits:true,
      },
      direccion: {
        required: true,
        maxlength: 50,
      },
      metodo: {
        required: true,
      },
    },
  })
  
  
  $("#Actualizar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Pedido actualizado con exito','success');
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
          text: "¿Está seguro que desea eliminar este pedido?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Se eliminó exitosamente", {
              icon: "success",
            });
          } else {
            swal("No se completo la acción");
          }
        });
        return 0;
  }
   