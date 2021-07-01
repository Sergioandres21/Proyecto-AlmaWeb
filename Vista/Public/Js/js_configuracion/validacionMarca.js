
$("#formulario").validate({
    rules: {
      IDmarca:{
        required: true,
        digits: true,
      },
      nombremarca: {
        required: true,
        minlength: 3,
        maxlength:45
      }
    },
  })
  
  
  $("#guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Marca registrada con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
      nombremarcaM: {
        required: true,
        minlength: 3,
        maxlength:45
      }
    },
  })
  
  $("#IDmarcaM").attr("disabled",true);
  
  $("#actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Marca actualizada con exito','success');
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
   