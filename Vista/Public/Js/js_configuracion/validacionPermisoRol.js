
$("#formulario").validate({
    rules: {
    IDpermisorol:{
        required: true,
      },
      IDrol: {
        required:true,
      },
      IDpermiso: {
        required:true,
      },
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Permiso de rol registrado con exito','success');
  })
  
  $("#IDpermisorolM").attr("disabled",true);


  $("#formulario2").validate({
    rules: {
      IDrolM: {
        required:true,
      },
      IDpermisoM: {
        required:true,
      },
    },
  })

  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Permiso de rol actualizado con exito','success');
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
   