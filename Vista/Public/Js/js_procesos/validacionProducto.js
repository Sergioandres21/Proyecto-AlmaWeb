
$("#formulario").validate({
    rules: {
    IDproveedor:{
        required: true,
      },
      IDunidad: {
        required: true,
      },
      IDtipo: {
        required: true,
    },
      IDmarca: {
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
    existencia: {
        required: true,
        digits: true,
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
    swal('Correcto','Producto registrado con exito','success');
  })

  $("#IDproveedorM").attr("disabled",true);
  $("#IDunidadM").attr("disabled",true);
  $("#IDtipoM").attr("disabled",true);
  $("#IDmarcaM").attr("disabled",true);
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
        existenciaM: {
            required: true,
            digits: true,
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
    swal('Correcto','Producto actualizado con exito','success');
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