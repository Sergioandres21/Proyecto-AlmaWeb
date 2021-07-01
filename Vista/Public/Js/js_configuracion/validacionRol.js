
$("#formulario").validate({
    rules: {
      IDrol:{
        required: true,
        digits: true,
      },
      nombre: {
        required: true,
        minlength: 3,
        maxlength:40
      },
      descripcion: {
        required:true,
        maxlength:254,
      },
      estado: {
        required:true,
      }
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Rol registrado con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
      nombreM: {
        required: true,
        minlength: 3,
        maxlength:40
      },
      descripcionM: {
        required:true,
        maxlength:254,
      },
      estadoM: {
        required:true,
      }
    },
  })
  
  $("#IDrolM").attr("disabled",true);
  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Rol actualizado con exito','success');
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
   