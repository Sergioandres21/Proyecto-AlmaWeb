/*
$("#formulario").validate({
    rules: {
    titulo:{
        required: true,
        maxlength: 40,
      },
      subtitulo: {
        required: true,
        maxlength: 35,
      },
      descripcion: {
        required:true,
        maxlength: 250,
      },
      foto:{
          required:true,
      }
    },
  })
  
  $("#Guardar").click(function(){
    if($("#formulario").valid() == false){
     return;
    }
    swal('Correcto','Información de inicio guardada con exito','success');
  })

  $("#formulario2").validate({
    rules: {
    titulo2:{
        required: true,
        maxlength: 40,
      },
      subtitulo2: {
        required: true,
        maxlength: 35,
      },
      descripcion2: {
        required:true,
        maxlength: 250,
      },
      foto2:{
          required:true,
      }
    },
  })
  
  $("#Guardar2").click(function(){
    if($("#formulario2").valid() == false){
     return;
    }
    swal('Correcto','Información de inicio guardada con exito','success');
  })

*/

  $("#formulario3").validate({
    rules: {
    parrafo:{
        required: true,
        maxlength: 500,
      },
      parrafo2: {
        required: true,
        maxlength: 500,
      },
      parrafo3: {
        required:true,
        maxlength: 400,
      },
    },
  })
  
  $("#Guardar3").click(function(){
    if($("#formulario3").valid() == false){
     return;
    }
    swal('Correcto','Información de inicio guardada con exito','success');
  })
  
  
/*
function limpiarCampos(){
    document.getElementById("titulo").value = "";
    document.getElementById("subtitulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("foto").value = "";
}

function limpiarCampos2(){
    document.getElementById("titulo2").value = "";
    document.getElementById("subtitulo2").value = "";
    document.getElementById("descripcion2").value = "";
    document.getElementById("foto2").value = "";
}
*/

function limpiarCampos3(){
    document.getElementById("parrafo").value = "";
    document.getElementById("parrafo2").value = "";
    document.getElementById("parrafo3").value = "";
}