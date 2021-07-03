Proyecto AlmaWeb, fase diseño, Sena 2021.
Ficha 2170338.

Script de la base de datos mysql.

CREATE DATABASE AlmaWeb;


CREATE TABLE `agenda` (
  `IdAgenda` int(11) NOT NULL,
  `IdServicio` int(11) NOT NULL,
  `NumeroIdentificacionCliente` int(11) NOT NULL,
  `NumeroIdentificacionCosmetologa` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `EstadoAgenda` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boletas_de_pago`
--

CREATE TABLE `boletas_de_pago` (
  `IdBoletaPago` int(11) NOT NULL,
  `idPedido` int(11) NOT NULL,
  `NumeroIdentificacionCosmetologa` int(11) NOT NULL,
  `Cliente_NumeroIdentificacion` int(11) NOT NULL,
  `RazonSocial` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `FechaPago` date NOT NULL,
  `TotalPago` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro_de_estetica`
--

CREATE TABLE `centro_de_estetica` (
  `RazonSocial` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `IdMunicipio` int(11) NOT NULL,
  `Mision` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Vision` varchar(400) COLLATE utf8_spanish_ci NOT NULL,
  `Quienes_somos` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Direccion` varchar(55) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `NumeroIdentificacion` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `IdMunicipio` int(11) NOT NULL,
  `Nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Apellidos` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `TipoDeDocumento` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `Email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Telefono` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Celular` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `DireccionResidencia` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `IdDepartamento` int(11) NOT NULL,
  `Nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_de_servicios`
--

CREATE TABLE `detalle_de_servicios` (
  `IdDetalleServicio` int(11) NOT NULL,
  `IdServicio` int(11) NOT NULL,
  `IdBoletaPago` int(11) NOT NULL,
  `NumeroIdentificacionCliente` int(11) NOT NULL,
  `ValorUnitario` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedidos`
--

CREATE TABLE `detalle_pedidos` (
  `IdDetallePedido` int(11) NOT NULL,
  `IdProductos` int(11) NOT NULL,
  `IdPedidos` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Subtotal` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_pedidos`
--

CREATE TABLE `estado_pedidos` (
  `IdEstadoPedido` int(11) NOT NULL,
  `NombreEstado` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `home_producto`
--

CREATE TABLE `home_producto` (
  `id_home` int(11) NOT NULL,
  `Titulo_Presentacion` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Subtitulo` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Imagen` binary(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `home_servicio`
--

CREATE TABLE `home_servicio` (
  `id_home` int(11) NOT NULL,
  `Titulo_Presentacion` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Subtitulo` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Imagen` binary(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_de_servicios`
--

CREATE TABLE `imagenes_de_servicios` (
  `idImagen` binary(1) NOT NULL,
  `IdServicio` int(11) NOT NULL,
  `NombreImagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_productos`
--

CREATE TABLE `imagen_productos` (
  `IdImagen` binary(1) NOT NULL,
  `IdProductos` int(11) NOT NULL,
  `NombreImagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca_productos`
--

CREATE TABLE `marca_productos` (
  `IdMarcaProducto` int(11) NOT NULL,
  `NombreMarca` varchar(55) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `IdMunicipio` int(11) NOT NULL,
  `IdDepartamento` int(11) NOT NULL,
  `Nombre` varchar(35) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedidos` int(11) NOT NULL,
  `NumeroIdentificacionCliente` int(11) NOT NULL,
  `IdEstadoPedido` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `IdPermiso` int(11) NOT NULL,
  `Nombre` varchar(150) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_roles`
--

CREATE TABLE `permisos_roles` (
  `IdPermisoRol` int(11) NOT NULL,
  `IdRol` int(11) NOT NULL,
  `IdPermiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `IdProductos` int(11) NOT NULL,
  `PROVEEDORES_NumeroDeIdentificacion` int(11) NOT NULL,
  `IdUnidadMedida` int(11) NOT NULL,
  `IdTipoProducto` int(11) NOT NULL,
  `IdMarcaProducto` int(11) NOT NULL,
  `IdTarifa` int(11) NOT NULL,
  `Nombre` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Precio` float NOT NULL,
  `Existencia` int(11) NOT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

CREATE TABLE `profesionales` (
  `NumeroIdentificacion` int(11) NOT NULL,
  `IdMunicipio` int(11) NOT NULL,
  `IdRol` int(11) NOT NULL,
  `TipoDocumento` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Apellidos` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Celular` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `DireccionResidencia` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `NumeroDeIdentificacion` int(11) NOT NULL,
  `IdRol` int(11) NOT NULL,
  `IdMunicipio` int(11) NOT NULL,
  `TipoDeDocumento` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `Nombres` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Apellidos` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Telefono` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Celular` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `DireccionResidencia` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienes_somos`
--

CREATE TABLE `quienes_somos` (
  `id` int(11) NOT NULL,
  `Mision` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Vision` varchar(400) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `IdRol` int(11) NOT NULL,
  `Nombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(254) COLLATE utf8_spanish_ci NOT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`IdRol`, `Nombre`, `Descripcion`, `Estado`) VALUES
(1, 'Administrador', 'Acceso al sistema y realizar crud', b'1'),
(2, 'Cliente', 'Se permitirá el inicio de sesión al cliente.', b'1'),
(3, 'Profesional', 'Se permitirá el acceso al profesional.', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `IdServicio` int(11) NOT NULL,
  `IdTipoServicios` int(11) NOT NULL,
  `NumeroIdentificacionProfesional` int(11) NOT NULL,
  `IdTarifa` int(11) NOT NULL,
  `Nombre` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Precio` float NOT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `TiempoDuracion` time NOT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarifas`
--

CREATE TABLE `tarifas` (
  `IdTarifa` int(11) NOT NULL,
  `AnoTarifa` date NOT NULL,
  `Resolucion` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `IdTipoProducto` int(11) NOT NULL,
  `NombreTipoProducto` varchar(35) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_servicios`
--

CREATE TABLE `tipo_servicios` (
  `IdTipoServicios` int(11) NOT NULL,
  `NombreTipoServicio` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad_de_medida`
--

CREATE TABLE `unidad_de_medida` (
  `IdUnidadMedida` int(11) NOT NULL,
  `NombreUnidadMedida` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `ValorUnidadMedida` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL,
  `IdRol` int(11) NOT NULL,
  `Email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Contraseña` varchar(55) COLLATE utf8_spanish_ci NOT NULL,
  `ImagenUsuario` binary(1) DEFAULT NULL,
  `Telefono` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `IdRol`, `Email`, `Contraseña`, `ImagenUsuario`, `Telefono`, `Estado`) VALUES
(123, 2, 'alex@gmail.com', 'alex123', NULL, '312929292', b'1'),
(1234, 3, 'sofia@gmail.com', 'sofia123', NULL, '3212321', b'1'),
(10020, 1, 'sergio@gmail.com', 'sergio1', 0x30, '3117', b'1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`IdAgenda`),
  ADD KEY `fk_AGENDA_SERVICIOS1_idx` (`IdServicio`),
  ADD KEY `fk_AGENDA_CLIENTE1_idx` (`NumeroIdentificacionCliente`),
  ADD KEY `fk_AGENDA_COSMETOLOGA1_idx` (`NumeroIdentificacionCosmetologa`);

--
-- Indices de la tabla `boletas_de_pago`
--
ALTER TABLE `boletas_de_pago`
  ADD PRIMARY KEY (`IdBoletaPago`),
  ADD KEY `fk_BOLETA_DE_PAGO_Pedidos1_idx` (`idPedido`),
  ADD KEY `fk_BOLETA_DE_PAGO_COSMETOLOGA1_idx` (`NumeroIdentificacionCosmetologa`),
  ADD KEY `fk_BOLETAS_DE_PAGO_CENTRO_DE_ESTETICA1_idx` (`RazonSocial`),
  ADD KEY `fk_BOLETAS_DE_PAGO_CLIENTES1_idx` (`Cliente_NumeroIdentificacion`);

--
-- Indices de la tabla `centro_de_estetica`
--
ALTER TABLE `centro_de_estetica`
  ADD PRIMARY KEY (`RazonSocial`),
  ADD KEY `fk_CENTRO_DE_ESTETICA_MUNICIPIOS1_idx` (`IdMunicipio`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`NumeroIdentificacion`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Celular` (`Celular`),
  ADD KEY `fk_CLIENTE_USUARIOS1_idx` (`IdUsuario`),
  ADD KEY `fk_CLIENTES_MUNICIPIOS1_idx` (`IdMunicipio`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`IdDepartamento`);

--
-- Indices de la tabla `detalle_de_servicios`
--
ALTER TABLE `detalle_de_servicios`
  ADD PRIMARY KEY (`IdDetalleServicio`),
  ADD KEY `fk_DETALLE_DE_SERVICIO_SERVICIOS1_idx` (`IdServicio`),
  ADD KEY `fk_DETALLE_DE_SERVICIOS_BOLETASDEPAGO1_idx` (`IdBoletaPago`),
  ADD KEY `fk_DETALLE_DE_SERVICIOS_CLIENTE_idx` (`NumeroIdentificacionCliente`);

--
-- Indices de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD PRIMARY KEY (`IdDetallePedido`),
  ADD KEY `fk_PRODUCTOS_has_Pedidos_Pedidos1_idx` (`IdPedidos`),
  ADD KEY `fk_PRODUCTOS_has_Pedidos_PRODUCTOS1_idx` (`IdProductos`);

--
-- Indices de la tabla `estado_pedidos`
--
ALTER TABLE `estado_pedidos`
  ADD PRIMARY KEY (`IdEstadoPedido`);

--
-- Indices de la tabla `home_producto`
--
ALTER TABLE `home_producto`
  ADD PRIMARY KEY (`id_home`);

--
-- Indices de la tabla `home_servicio`
--
ALTER TABLE `home_servicio`
  ADD PRIMARY KEY (`id_home`);

--
-- Indices de la tabla `imagenes_de_servicios`
--
ALTER TABLE `imagenes_de_servicios`
  ADD PRIMARY KEY (`idImagen`),
  ADD KEY `fk_Imagenes_servicios_SERVICIOS1_idx` (`IdServicio`);

--
-- Indices de la tabla `imagen_productos`
--
ALTER TABLE `imagen_productos`
  ADD PRIMARY KEY (`IdImagen`),
  ADD KEY `fk_IMAGEN_PRODUCTO_PRODUCTOS1_idx` (`IdProductos`);

--
-- Indices de la tabla `marca_productos`
--
ALTER TABLE `marca_productos`
  ADD PRIMARY KEY (`IdMarcaProducto`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`IdMunicipio`),
  ADD KEY `fk_MUNICIPIOS_DEPARTAMENTOS1_idx` (`IdDepartamento`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedidos`),
  ADD KEY `fk_Pedidos_CLIENTE1_idx` (`NumeroIdentificacionCliente`),
  ADD KEY `fk_PEDIDOS_ESTADOPEDIDOS1_idx` (`IdEstadoPedido`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`IdPermiso`);

--
-- Indices de la tabla `permisos_roles`
--
ALTER TABLE `permisos_roles`
  ADD PRIMARY KEY (`IdPermisoRol`),
  ADD KEY `fk_PERMISOS_has_ROLES_ROLES1_idx` (`IdRol`),
  ADD KEY `fk_PERMISOS_has_ROLES_PERMISOS1_idx` (`IdPermiso`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`IdProductos`),
  ADD KEY `fk_PRODUCTOS_PROVEEDORES1_idx` (`PROVEEDORES_NumeroDeIdentificacion`),
  ADD KEY `fk_PRODUCTOS_UNIDAD_DE_MEDIDA1_idx` (`IdUnidadMedida`),
  ADD KEY `fk_PRODUCTOS_TIPO_PRODUCTO1_idx` (`IdTipoProducto`),
  ADD KEY `fk_PRODUCTOS_MARCA_PRODUCTOS1_idx` (`IdMarcaProducto`),
  ADD KEY `fk_PRODUCTOS_TARIFAS1` (`IdTarifa`);

--
-- Indices de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD PRIMARY KEY (`NumeroIdentificacion`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Celular` (`Celular`),
  ADD KEY `fk_PROFESIONALES_MUNICIPIOS1_idx` (`IdMunicipio`),
  ADD KEY `fk_PROVEEDORES_Roles1_idx` (`IdRol`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`NumeroDeIdentificacion`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Celular` (`Celular`),
  ADD UNIQUE KEY `Telefono` (`Telefono`),
  ADD KEY `fk_PROVEEDORES_Roles1_idx` (`IdRol`),
  ADD KEY `fk_PROVEEDORES_MUNICIPIOS1_idx` (`IdMunicipio`);

--
-- Indices de la tabla `quienes_somos`
--
ALTER TABLE `quienes_somos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`IdRol`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`IdServicio`),
  ADD UNIQUE KEY `Nombre` (`Nombre`),
  ADD KEY `fk_SERVICIOS_TIPO_SERVICIOS1_idx` (`IdTipoServicios`),
  ADD KEY `fk_SERVICIOS_PROFESIONALES1_idx` (`NumeroIdentificacionProfesional`),
  ADD KEY `fk_SERVICIOS_TARIFAS1` (`IdTarifa`);

--
-- Indices de la tabla `tarifas`
--
ALTER TABLE `tarifas`
  ADD PRIMARY KEY (`IdTarifa`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`IdTipoProducto`);

--
-- Indices de la tabla `tipo_servicios`
--
ALTER TABLE `tipo_servicios`
  ADD PRIMARY KEY (`IdTipoServicios`);

--
-- Indices de la tabla `unidad_de_medida`
--
ALTER TABLE `unidad_de_medida`
  ADD PRIMARY KEY (`IdUnidadMedida`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Contraseña` (`Contraseña`),
  ADD UNIQUE KEY `Telefono` (`Telefono`),
  ADD KEY `fk_USUARIOS_Roles1_idx` (`IdRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `home_producto`
--
ALTER TABLE `home_producto`
  MODIFY `id_home` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `home_servicio`
--
ALTER TABLE `home_servicio`
  MODIFY `id_home` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca_productos`
--
ALTER TABLE `marca_productos`
  MODIFY `IdMarcaProducto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IdProductos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `quienes_somos`
--
ALTER TABLE `quienes_somos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `IdServicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `fk_AGENDA_CLIENTE1` FOREIGN KEY (`NumeroIdentificacionCliente`) REFERENCES `clientes` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_AGENDA_COSMETOLOGA1` FOREIGN KEY (`NumeroIdentificacionCosmetologa`) REFERENCES `profesionales` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_AGENDA_SERVICIOS1` FOREIGN KEY (`IdServicio`) REFERENCES `servicios` (`IdServicio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `boletas_de_pago`
--
ALTER TABLE `boletas_de_pago`
  ADD CONSTRAINT `fk_BOLETAS_DE_PAGO_CENTRO_DE_ESTETICA1` FOREIGN KEY (`RazonSocial`) REFERENCES `centro_de_estetica` (`RazonSocial`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_BOLETAS_DE_PAGO_CLIENTES` FOREIGN KEY (`Cliente_NumeroIdentificacion`) REFERENCES `clientes` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_BOLETA_DE_PAGO_COSMETOLOGA1` FOREIGN KEY (`NumeroIdentificacionCosmetologa`) REFERENCES `profesionales` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_BOLETA_DE_PAGO_Pedidos1` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`idPedidos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `centro_de_estetica`
--
ALTER TABLE `centro_de_estetica`
  ADD CONSTRAINT `fk_CENTRO_DE_ESTETICA_MUNICIPIOS1` FOREIGN KEY (`IdMunicipio`) REFERENCES `municipios` (`IdMunicipio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_CLIENTES_MUNICIPIOS1` FOREIGN KEY (`IdMunicipio`) REFERENCES `municipios` (`IdMunicipio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_CLIENTE_USUARIOS1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_de_servicios`
--
ALTER TABLE `detalle_de_servicios`
  ADD CONSTRAINT `fk_DETALLE_DE_SERVICIOS_BOLETAS_DE_PAGO1` FOREIGN KEY (`IdBoletaPago`) REFERENCES `boletas_de_pago` (`IdBoletaPago`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_DETALLE_DE_SERVICIO_CLIENTE` FOREIGN KEY (`NumeroIdentificacionCliente`) REFERENCES `clientes` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_DETALLE_DE_SERVICIO_SERVICIOS1` FOREIGN KEY (`IdServicio`) REFERENCES `servicios` (`IdServicio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD CONSTRAINT `fk_PRODUCTOS_has_Pedidos_PRODUCTOS1` FOREIGN KEY (`IdProductos`) REFERENCES `productos` (`IdProductos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRODUCTOS_has_Pedidos_Pedidos1` FOREIGN KEY (`IdPedidos`) REFERENCES `pedidos` (`idPedidos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagenes_de_servicios`
--
ALTER TABLE `imagenes_de_servicios`
  ADD CONSTRAINT `fk_Imagenes_servicios_SERVICIOS1` FOREIGN KEY (`IdServicio`) REFERENCES `servicios` (`IdServicio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagen_productos`
--
ALTER TABLE `imagen_productos`
  ADD CONSTRAINT `fk_IMAGEN_PRODUCTO_PRODUCTOS1` FOREIGN KEY (`IdProductos`) REFERENCES `productos` (`IdProductos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD CONSTRAINT `fk_MUNICIPIOS_DEPARTAMENTOS1` FOREIGN KEY (`IdDepartamento`) REFERENCES `departamentos` (`IdDepartamento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_PEDIDOS_ESTADOPEDIDOS1` FOREIGN KEY (`IdEstadoPedido`) REFERENCES `estado_pedidos` (`IdEstadoPedido`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pedidos_CLIENTE1` FOREIGN KEY (`NumeroIdentificacionCliente`) REFERENCES `clientes` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `permisos_roles`
--
ALTER TABLE `permisos_roles`
  ADD CONSTRAINT `fk_PERMISOS_has_ROLES_PERMISOS1` FOREIGN KEY (`IdPermiso`) REFERENCES `permisos` (`IdPermiso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PERMISOS_has_ROLES_ROLES1` FOREIGN KEY (`IdRol`) REFERENCES `roles` (`IdRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_PRODUCTOS_MARCA_PRODUCTOS1` FOREIGN KEY (`IdMarcaProducto`) REFERENCES `marca_productos` (`IdMarcaProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRODUCTOS_PROVEEDORES1` FOREIGN KEY (`PROVEEDORES_NumeroDeIdentificacion`) REFERENCES `proveedores` (`NumeroDeIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRODUCTOS_TARIFAS1` FOREIGN KEY (`IdTarifa`) REFERENCES `tarifas` (`IdTarifa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRODUCTOS_TIPO_PRODUCTO1` FOREIGN KEY (`IdTipoProducto`) REFERENCES `tipo_producto` (`IdTipoProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRODUCTOS_UNIDAD_DE_MEDIDA1` FOREIGN KEY (`IdUnidadMedida`) REFERENCES `unidad_de_medida` (`IdUnidadMedida`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD CONSTRAINT `fk_PROFESIONALES_MUNICIPIOS1` FOREIGN KEY (`IdMunicipio`) REFERENCES `municipios` (`IdMunicipio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PROFESIONALES_ROLES1` FOREIGN KEY (`IdRol`) REFERENCES `roles` (`IdRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD CONSTRAINT `fk_PROVEEDORES_MUNICIPIOS1` FOREIGN KEY (`IdMunicipio`) REFERENCES `municipios` (`IdMunicipio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PROVEEDORES_Roles1` FOREIGN KEY (`IdRol`) REFERENCES `roles` (`IdRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD CONSTRAINT `fk_SERVICIOS_PROFESIONALES1` FOREIGN KEY (`NumeroIdentificacionProfesional`) REFERENCES `profesionales` (`NumeroIdentificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_SERVICIOS_TARIFAS1` FOREIGN KEY (`IdTarifa`) REFERENCES `tarifas` (`IdTarifa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_SERVICIOS_TIPO_SERVICIOS1` FOREIGN KEY (`IdTipoServicios`) REFERENCES `tipo_servicios` (`IdTipoServicios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_USUARIOS_Roles1` FOREIGN KEY (`IdRol`) REFERENCES `roles` (`IdRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;