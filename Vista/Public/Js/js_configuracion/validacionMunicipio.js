
$("#formulario").validate({
    rules: {
    IDmunicipio:{
        required: true,
        digits: true,
      },
      IDdepartamento: {
        required: true,
      },
      nombreMunicipio: {
        required: true,
        minlength: 3,
        maxlength: 35
      }
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Municipio registrado con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
          nombremunicipioM: {
            required: true,
            minlength: 3,
            maxlength: 35
          }
    },
  })
  
$("#IDmunicipioM").attr("disabled",true);
$("#IDdepartamentoM").attr("disabled",true);

  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Municipio actualizado con exito','success');
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
   