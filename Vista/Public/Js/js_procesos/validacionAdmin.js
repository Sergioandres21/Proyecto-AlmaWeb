
$("#formulario").validate({
    rules: {
    IDadmin:{
        required: true,
        digits: true,
      },
      IDrol: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      contrasena: {
        required: true,
        minlength:5,
        maxlength:20,
    },
    confir_contrasena: {
        required: true,
        equalTo:"#contrasena",
    },
    celular: {
        required: true,
        digits: true,
    },
    estado: {
        required: true,
    },
    },
  })
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Información registrada con exito','success');
  })

  $("#IDadminM").attr("disabled",true);
  $("#IdrolM").attr("disabled",true);

  $("#formulario2").validate({
    rules: {
      emailM: {
        required: true,
        email: true
      },
      contrasenaM: {
        required: true,
        minlength:5,
        maxlength:20,
    },
    confir_contrasenaM: {
        required: true,
        equalTo:"#contrasenaM",
    },
    celularM: {
        required: true,
        digits: true,
    },
    estadoM: {
        required: true,
    },
    },
  })

  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Información actualizada con exito','success');
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

function limpiarCampos(){
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("descripcion").value = "";
}