
$("#formulario").validate({
    rules: {
    numero:{
        required: true,
        url: true,
      },
      email: {
        required: true,
        email: true,
      },
      instagram: {
        required: true,
        url: true
      },
      descripcion: {
        maxlength: 250,
      }
    },
  })
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Información registrada con exito','success');
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

function limpiarCampos(){
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("descripcion").value = "";
}