$("#formulario").validate({
    rules: {
      servicio:{
        required: true,
      },
      cliente: {
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