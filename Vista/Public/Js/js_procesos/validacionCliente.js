$("#formulario").validate({
    rules: {
      numeroidentificacion: {
        required: true,
        digits: true,
        validarIdent: /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/,
      },
      IdentificadorU: {
        required: true,
        digits: true,
        equalTo: "#numeroidentificacion",
      },
      municipio: {
        required: true,
      },
      nombre: {
        required: true,
        maxlength: 45,
      },
      apellido: {
        required: true,
        maxlength: 40,
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
        validarTele: /^[1-9]\d{10}$/,
      },
      celular: {
        required: true,
        digits: true,
        validarCelu: /^3[\d]{9}$/,
      },
      residencia: {
        required: true,
        maxlength:55,
      },
      estado: {
        required: true,
      },
    },
  })

$.validator.addMethod('validarIdent', function(value, element, param) 
      {
        return this.optional(element) || value.match(param);
      },'El número de identificación no es correcto');
  
$.validator.addMethod('validarTele', function(value, element, param) 
      {
        return this.optional(element) || value.match(param);
    },'El número de teléfono no es correcto');

$.validator.addMethod('validarCelu', function(value, element, param) 
    {
      return this.optional(element) || value.match(param);
  },'El número de celular no es correcto');

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
            maxlength: 45,
          },
          apellidoM: {
            required: true,
            maxlength: 40,
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
            validarTele: /^[1-9]\d{10}$/,
          },
          celularM: {
            required: true,
            digits: true,
            validarCelu: /^3[\d]{9}$/,
          },
          residenciaM: {
            required: true,
            maxlength:55,
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