
$("#formdepartamento").validate({
  rules: {
    IDdepartamento:{
      required: true,
      digits: true,
    },
    nombredepartamento: {
      required: true,
      minlength: 3,
      maxlength:30
    }
  },
})


$("#create").click(function(){
  if($("#formdepartamento").valid() == false){
   return;
  }
  swal('Correcto','Departamento registrado con exito','success');
})


$("#formdepartamentomodificar").validate({
  rules: {
    nombredepartamentoM: {
      required: true,
      minlength: 3,
      maxlength:30
    }
  },
})

$("#IDdepartamentoM").attr("disabled",true);

$("#botonM").click(function(){
  if($("#formdepartamentomodificar").valid() == false){
   return;
  }
  swal('Correcto','Departamento actualizado con exito','success');
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
 