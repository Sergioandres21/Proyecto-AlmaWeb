<?php 

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

session_start();
$_SESSION['usuario']= $usuario;

$conexion = mysqli_connect("localhost","root","","almaweb");
// include('db.php');

$consulta = "SELECT * FROM usuarios where IdUsuario = '$usuario' and Contraseña = '$contrasena' and IdRol = '1'";
$consulta2 = "SELECT * FROM usuarios where IdUsuario = '$usuario' and Contraseña = '$contrasena' and IdRol = '2'";
$consulta3 = "SELECT * FROM usuarios where IdUsuario = '$usuario' and Contraseña = '$contrasena' and IdRol = '3'";

$resultado = mysqli_query($conexion,$consulta);
$resultado2 = mysqli_query($conexion,$consulta2);
$resultado3 = mysqli_query($conexion,$consulta3);

$filas=mysqli_num_rows($resultado);
$filas1 = mysqli_num_rows($resultado2);
$filas2 = mysqli_num_rows($resultado3);


if($filas){
    header("location:../../Vista/Usuario/index.html");
} elseif ($filas1) {
    header("location:../../Vista/Procesos/dashboard.html");
} elseif ($filas2){
    header("location:../../Vista/Profesional/index.html");
}else{
    ?>
    <?php
    include_once("login1.php");
    ?>

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <script>
        swal('Error','No ha ingresado correctamente el usuario o la contraseña','error');
    </script>

    <?php 
}
mysqli_free_result($resultado);
mysqli_free_result($resultado1);
mysqli_free_result($resultado2);

mysqli_close($conexion);

?>
