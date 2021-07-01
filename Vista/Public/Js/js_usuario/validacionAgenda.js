
$("#formulario").validate({
    rules: {
      servicio:{
        required: true,
      },
      profesional: {
        required: true,
      },
      fecha: {
        required: true,
      },
      hora: {
        required: true,
      },
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Agenda registradada con exito','success');
  })
  

  $("#formulario2").validate({
    rules: {
        fechaM: {
            required: true,
        },
        horaM: {
            required: true,
            },
        },
  })


  $("#servicioM").attr("disabled",true);
  $("#profesionalM").attr("disabled",true);
  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Agenda actualizada con exito','success');
  })
  
  
  function mensaje1(){
    swal({
      title: "Pregunta",
      text: "¿Está seguro que eliminar esta agenda?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Se elimino exitosamente", {
          icon: "success",
        });
      } else {
        swal("No se compreto la acción");
      }
    });
    return 0;
  }
  