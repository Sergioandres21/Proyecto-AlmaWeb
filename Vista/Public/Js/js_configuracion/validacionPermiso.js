
$("#formulario").validate({
    rules: {
      IDpermiso:{
        required: true,
        digits: true,
      },
      descripcion: {
        required:true,
        maxlength:150,
      },
    },
  })
  
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Permiso registrado con exito','success');
  })
  
  
  $("#formulario2").validate({
    rules: {
      descripcionM: {
        required:true,
        maxlength:150,
      },
    },
  })
  
  $("#IDpermisoM").attr("disabled",true);
  
  $("#Actualizar").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Permiso actualizado con exito','success');
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

// Seleccionar y desactivar check box
var checkbox = $('table tbody input[type="checkbox"]');
$("#selectAll").click(function () {
    if (this.checked) {
        checkbox.each(function () {
            this.checked = true;
        });
    } else {
        checkbox.each(function () {
            this.checked = false;
        });
    }
});
checkbox.click(function () {
    if (!this.checked) {
        $("#selectAll").prop("checked", false);
    }
});

// Seleccionar y desactivar check box de formularios
/*
var checkbox2 = $('form input[type="checkbox"]');
$("#select").click(function () {
    if (this.checked) {
        checkbox2.each(function () {
            this.checked = true;
        });
    } else {
        checkbox2.each(function () {
            this.checked = false;
        });
    }
});
checkbox2.click(function () {
    if (!this.checked) {
        $("#select").prop("checked", false);
    }
});
*/