$("#formulario").validate({
    rules: {
      titulo: {
        required: true,
        maxlength: 50,
      },
      producto: {
        required: true,
      },
      imagen: {
        required: true,
      },
    },
  })
  
  $("#Guardar").click(function () {
    if ($("#formulario").valid() == false) {
      return;
    }
    swal('Correcto', 'Imagen registrada con exito', 'success');
  })
  
  $("#productoM").attr("disabled", true);
  
  $("#formulario2").validate({
    rules: {
      tituloM: {
        required: true,
        maxlength: 50,
      },
      imagenM: {
        required: true,
      },
    },
  })
  
  $("#Actualizar").click(function () {
    if ($("#formulario2").valid() == false) {
      return;
    }
    swal('Correcto', 'Imagen actualizada con exito', 'success');
  })
  
  
  function mensaje1() {
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
  
  function mensaje2() {
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