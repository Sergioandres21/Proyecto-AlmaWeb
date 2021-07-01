$("#formulario").validate({
    rules: {
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
        digits: true,
      },
      celular: {
        required: true,
        digits: true,
      },
      residencia: {
        required: true,
      },
      estado: {
        required: true,
      },
    },
  })
  
  $("#Guardar").click(function () {
    if ($("#formulario").valid() == false) {
      return;
    }
    swal('Correcto', 'Cliente registrado con exito', 'success');
  })
  
  $("#numeroidentificacionM").attr("disabled", true);
  $("#IdentificadorUM").attr("disabled", true);
  $("#municipioM").attr("disabled", true);
  
  $("#formulario2").validate({
    rules: {
          nombreM: {
            required: true,
          },
          apellidoM: {
            required: true,
          },
          tipodocumentoM: {
            required: true,
          },
          emailM: {
            required: true,
            email: true,
          },
          telefonoM: {
            digits: true,
          },
          celularM: {
            required: true,
            digits: true,
          },
          residenciaM: {
            required: true,
          },
          estadoM: {
            required: true,
          },
    },
  })
  
  $("#Actualizar").click(function () {
    if ($("#formulario2").valid() == false) {
      return;
    }
    swal('Correcto', 'Cliente actualizado con exito', 'success');
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