$("#formulario").validate({
    rules: {
      nombre: {
        required: true,
      },
      apellido: {
        required: true,
      },
      tipodocumento: {
        required: true,
      },
      numerodocumento: {
        required: true,
        digits: true,
      },
      email: {
        required: true,
        email: true
      },
      contrasena: {
        required: true,
        minlength: 5,
        maxlength: 20,
      },
      confir_contrasena: {
        required: true,
        equalTo: "#contrasena",
      },
      celular: {
        required: true,
        digits: true,
      },
    },
  })
  
  $("#Actualizar").click(function () {
    if ($("#formulario").valid() == false) {
      return;
    }
    swal('Correcto', 'Información actualizada con exito', 'success');
  })
