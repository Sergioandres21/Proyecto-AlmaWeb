$("#formulario").validate({
    rules: {
      CodigoBoleta: {
        required: true,
        digits: true,
      },
      codigo_pedido: {
        required: true,
        digits: true,
      },
      IDcliente: {
        required: true,
      },
      IDprofesional: {
        required: true,
      },
      razonsocial: {
        required: true,
      },
      fechapago: {
        required: true,
      },
      estado: {
        required: true,
      },
      totalpago: {
        required: true,
        digits: true,
      },
    },
  })
  
  $("#Guardar").click(function () {
    if ($("#formulario").valid() == false) {
      return;
    }
    swal('Correcto', 'Boleta registrada con exito', 'success');
  })
  
  $("#CodigoBoletaM").attr("disabled", true);
  $("#codigo_pedidoM").attr("disabled", true);
  $("#IDprofesionalM").attr("disabled", true);
  $("#IDclienteM").attr("disabled", true);
  $("#razonsocialM").attr("disabled", true);
  $("#totalpagoM").attr("disabled", true);
  
  $("#formulario2").validate({
    rules: {
      fechapagoM: {
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
    swal('Correcto', 'Boleta actualizada con exito', 'success');
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