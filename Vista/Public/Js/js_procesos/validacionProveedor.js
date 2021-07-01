
$("#formulario").validate({
    rules: {
    numeroidentificacion:{
        required: true,
        digits: true
      },
      IDrol: {
        required: true,
      },
      municipio: {
        required: true,
    },
    nombre: {
        required: true,
        minlength: 3,
        maxlength: 45,
    },
    apellido: {
        required: true,
        minlength: 3,
        maxlength: 40,
    },
    tipodocumento: {
        required: true,
    },
    email: {
        required: true,
        email: true,
    },
    celular: {
        required: true,
        digits: true,
    },
    telefono: {
        digits: true,
    },
    residencia: {
        maxlength: 54,
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
    swal('Correcto','Proveedor registrado con exito','success');
  })

  $("#numeroidentificacionM").attr("disabled",true);
  $("#IDrolM").attr("disabled",true);
  $("#municipioM").attr("disabled",true);

  $("#formulario2").validate({
    rules: {
        nombreM: {
            required: true,
            minlength: 3,
            maxlength: 45,
        },
        apellidoM: {
            required: true,
            minlength: 3,
            maxlength: 40,
        },
        tipodocumentoM: {
            required: true,
        },
        emailM: {
            required: true,
            email: true,
        },
        celularM: {
          required: true,
          digits: true,
        },
        telefonoM: {
            digits: true,
        },
        residenciaM: {
            maxlength: 54,
        },
        estadoM: {
            required: true,
        },
    }
  })

  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Proveedor actualizado con exito','success');
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