
$("#formulario").validate({
    rules: {
    IDtarifa:{
        required: true,
        digits: true,
      },
      anotarifa: {
        required: true,
        date: true,
      },
      resolucion: {
        required: true,
        maxlength: 50
      }
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Tarifa de producto registrada con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
        anotarifaM: {
            required: true,
            date: true
          },
          resolucionM: {
            required: true,
            maxlength: 50
          }
    },
  })
  
$("#IDtarifaM").attr("disabled",true);

  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Tarifa de producto actualizada con exito','success');
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
   