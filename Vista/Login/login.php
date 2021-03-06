<!doctype html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <title>Iniciar Sesión - AlmaWeb</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <!-- Estilo -->
  <link rel="stylesheet" href="../Public/Css/css_login/login.css">

  <!-- Favicon-->
  <link rel="icon" type="image/x-icon" href="../Public/Imagenes/A.png" />

  <!-- Ionic icons-->
  <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet">

  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

</head>

<body>
  <nav class="navbar navbar-expand-lg fixed-top navbar">
    <div class="container">
      <img src="../Public/Imagenes/logo3.png" class="logo-brand" alt="logo">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="icon ion-md-menu"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../../Index.php"><ion-icon name="home-outline" class="mr-2"></ion-icon>Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Servicios/indexservicio.html"><ion-icon name="bookmarks-outline" class="mr-2"></ion-icon>Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Productos/Productos.html"><ion-icon name="bag-handle-outline" class="mr-2"></ion-icon>Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../Index.php #nosotros"><ion-icon name="accessibility-outline" class="mr-2"></ion-icon>Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../Index.php #contact"><ion-icon name="at-circle-outline" class="mr-2"></ion-icon>Contáctanos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Productos/carrito.html">
                                <ion-icon name="cart-outline" class="mr-2"></ion-icon>Carrito
                        </a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.php"><ion-icon name="log-in-outline" class="mr-2"></ion-icon>Iniciar sesión</a>
                    </li>
                </ul>
      </div>
    </div>
  </nav>

  <section class="vh-100 ff-login">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="ff-login-box">
            <form action="../../Controlador/Login/validar.php" method="POST">
              <h3 class="text-center font-weight-light text-uppercase">Login</h3>
              <input type="text" class="form-control form-control-lg font-weight-light mt-4" placeholder="Usuario"
                name="usuario">
              <input type="password" class="form-control form-control-lg font-weight-light mt-3"
                placeholder="Contraseña" name="contrasena">
              <div class="custom-control custom-checkbox ml-4 mt-3">
                <input type="checkbox" class="custom-control-input" id="rememberMe">
                <label class="custom-control-label" for="rememberMe">Recordarme</label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg mt-3 ff-login-btn font-weight-bold">Ingresar</button>
              <div class="pie-form">
                <div class="text-center">
                  <a href="Olvidastecontrasena.html">¿Olvidaste tu contraseña?</a>
                </div>
                <div class="col-12 text-center mb-2">
                  <a href="Olvidousuario.html">¿Olvidaste tu usuario?</a>
                </div>
              </div>
            </form>
            <div class="col-12 text-center">
              <p>¿No tiene una cuenta de AlmaWeb?</p>
              <a href="../Registro Usuario/RegistroUsuario.html" class="boton-regis btn-lg">Registrarme</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>

</body>

</html>