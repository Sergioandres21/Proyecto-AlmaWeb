$("#formulario").validate({
    rules: {
      IDagenda: {
        required: true,
        digits: true,
      },
      servicio: {
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
      estado: {
        required: true,
      },
      cliente: {
        required: true,
      },
      numeroidentificacion: {
        required: true,
        digits: true,
      },
      IdentificadorU: {
        required: true,
        digits: true,
      },
      municipio: {
        required: true,
      },
      nombre: {
        required: true,
      },
      apellido: {
        required: true,
      },
      tipodocumento: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefono: {
        required: true,
        digits: true,
      },
      celular: {
        required: true,
        digits: true,
      },
      residencia: {
        required: true,
      },
      estado2: {
        required: true,
      },
    },
  })
  
  $("#Guardar").click(function () {
    if ($("#formulario").valid() == false) {
      return;
    }
    swal('Correcto', 'Agenda registrada con exito', 'success');
  })
  
  /*
  $("#servicioM").attr("disabled", true);
  
  $("#formulario2").validate({
    rules: {
      tituloM: {
        required: true,
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
    swal('Correcto', 'Información actualizada con exito', 'success');
  })
  */
  
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