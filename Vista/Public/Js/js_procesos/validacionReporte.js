
$("#formulario").validate({
    rules: {
    fecha_inicio: {
       required: true,
    },
    fecha_fin: {
      required: true,
    },
    },
  })
  
  $("#consultar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto', 'Información consultada exitosamente', 'success');
  })