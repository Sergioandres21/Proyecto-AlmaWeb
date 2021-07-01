
$("#formulario").validate({
    rules: {
    IDtipo: {
       required: true,
    },
      IDprofesional: {
      required: true,
    },
    IDtarifa: {
        required: true,
    },
    nombre: {
        required: true,
        maxlength: 60,
    },
    precio: {
        required: true,
        digits: true,
    },
    tiempo: {
        required: true,
    },
    descripcion: {
        required: true,
        maxlength: 200,
    },
    estado: {
        required: true,
    }
    },
  })
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Servicio registrado con exito','success');
  })

  $("#IDtipoM").attr("disabled",true);
  $("#IDprofesionalM").attr("disabled",true);
  $("#IDtarifaM").attr("disabled",true);

  $("#formulario2").validate({
    rules: {
         nombreM: {
             required: true,
             maxlength: 60,
         },
         precioM: {
             required: true,
             digits: true,
         },
         tiempoM: {
             required: true,
         },
         descripcionM: {
             required: true,
             maxlength: 200,
         },
         estadoM: {
             required: true,
         }
    },
  })

  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Servicio actualizado con exito','success');
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