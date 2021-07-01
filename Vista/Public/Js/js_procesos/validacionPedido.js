
$("#formulario").validate({
    rules: {
    IDdetalle:{
        required: true,
        digits: true,
      },
      IDcliente: {
        required: true,
      },
      IDproducto: {
        required: true,
    },
      cantidad: {
      required: true,
      digits: true,
    },
    IDestado: {
        required: true,
    },
    fechapedido: {
        required: true,
    },
    subtotal: {
        required: true,
        digits: true,
    },
    },
  })
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Pedido registrado con exito','success');
  })

  $("#IDadminM").attr("disabled",true);
  $("#IdrolM").attr("disabled",true);

  $("#formulario2").validate({
    rules: {
      IDclienteM: {
        required: true,
      },
      IDproductoM: {
        required: true,
    },
    cantidadM: {
      required: true,
      digits: true,
    },
    IDestadoM: {
        required: true,
    },
    fechapedidoM: {
        required: true,
    },
    },
  })

  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Pedido actualizado con exito','success');
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