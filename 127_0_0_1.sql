-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2021 a las 04:31:53
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.23

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `profediana`
--
CREATE DATABASE IF NOT EXISTS `profediana` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `profediana`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliacioneps`
--

CREATE TABLE `afiliacioneps` (
  `idafiliacioneps` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `afiliacioneps`:
--

--
-- Volcado de datos para la tabla `afiliacioneps`
--

INSERT INTO `afiliacioneps` (`idafiliacioneps`, `nombre`, `descripcion`, `codigo`) VALUES
(1, 'Sanitas', 'Cotizante', 1),
(2, 'Sanitas', 'Beneficiario', 2),
(3, 'Famisanar', 'Cotizante', 3),
(4, 'Famisanar', 'Beneficiario', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `idalumno` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `numerodocumento` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `barrio` varchar(45) DEFAULT NULL,
  `telefonofijo` varchar(45) DEFAULT NULL,
  `telefonomovil` varchar(45) DEFAULT NULL,
  `correoelectronico` varchar(45) DEFAULT NULL,
  `contacto` varchar(45) DEFAULT NULL,
  `pagos` int(11) DEFAULT NULL,
  `afiliacioneps_idafiliacioneps` int(11) NOT NULL,
  `nivelacademico_idnivelacademico` int(11) NOT NULL,
  `documento_iddocumento` int(11) NOT NULL,
  `ciudad_idciudad` int(11) NOT NULL,
  `idestadoalumno` int(11) DEFAULT NULL,
  `idestadocivil` int(11) DEFAULT NULL,
  `id_sede` int(11) NOT NULL,
  `idasistencia` int(11) NOT NULL,
  `idfotoalumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `alumno`:
--   `afiliacioneps_idafiliacioneps`
--       `afiliacioneps` -> `idafiliacioneps`
--   `idestadocivil`
--       `estadocivil` -> `idestadocivil`
--   `nivelacademico_idnivelacademico`
--       `nivelacademico` -> `idnivelacademico`
--   `documento_iddocumento`
--       `documento` -> `iddocumento`
--   `id_sede`
--       `sede` -> `idsede`
--   `ciudad_idciudad`
--       `ciudad` -> `idciudad`
--   `id_sede`
--       `sede` -> `idsede`
--   `idfotoalumno`
--       `fotoalumno` -> `idfotoalumno`
--

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`idalumno`, `nombre`, `apellido`, `numerodocumento`, `direccion`, `barrio`, `telefonofijo`, `telefonomovil`, `correoelectronico`, `contacto`, `pagos`, `afiliacioneps_idafiliacioneps`, `nivelacademico_idnivelacademico`, `documento_iddocumento`, `ciudad_idciudad`, `idestadoalumno`, `idestadocivil`, `id_sede`, `idasistencia`, `idfotoalumno`) VALUES
(0, 'Laura', 'Mateus', '1023569854', 'cra 45 N 34-89', 'Quirigua', '2003569', '3012562354', 'micorreo@correo.com', 'Juanita Sanchez', 1, 1, 1, 1, 1, 1, 1, 1, 0, 1),
(1, 'juan', 'sanchez', '45895658', 'cra 45 N 78-89', 'San luis', '2300048', '3102568974', 'jusanchez@correo.com', 'martha perez', 1, 1, 1, 1, 1, 1, 1, 1, 0, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `idasistencia` int(11) NOT NULL,
  `idcurso` int(11) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `idjustificacion` int(11) DEFAULT NULL,
  `idpago` int(11) DEFAULT NULL,
  `alumno_idalumno` int(11) NOT NULL,
  `alumno_pais_idpais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `asistencia`:
--   `alumno_idalumno`
--       `alumno` -> `idalumno`
--   `idcurso`
--       `curso` -> `idcurso`
--   `idjustificacion`
--       `justificacion` -> `idjustificacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia_has_curso`
--

CREATE TABLE `asistencia_has_curso` (
  `asistencia_idasistencia` int(11) NOT NULL,
  `curso_idcurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `asistencia_has_curso`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `idciudad` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  `paisidpais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `ciudad`:
--   `paisidpais`
--       `pais` -> `idpais`
--

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`idciudad`, `nombre`, `descripcion`, `codigo`, `paisidpais`) VALUES
(1, 'Bogota', 'Ciudad Capital', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `idcurso` int(11) NOT NULL,
  `clase` varchar(45) DEFAULT NULL,
  `tema` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `estadocurso` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `curso`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documento`
--

CREATE TABLE `documento` (
  `iddocumento` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `documento`:
--

--
-- Volcado de datos para la tabla `documento`
--

INSERT INTO `documento` (`iddocumento`, `tipo`, `descripcion`, `codigo`) VALUES
(1, 'Cedula', 'cedula ciudadania colombiana', 1),
(2, 'Tarjeta Identidad', 'Menor de edad Colombiano', 2),
(3, 'PEP', 'Permis especial', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadoalumno`
--

CREATE TABLE `estadoalumno` (
  `idestadoalumno` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `estadopagos_idestadopagos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `estadoalumno`:
--

--
-- Volcado de datos para la tabla `estadoalumno`
--

INSERT INTO `estadoalumno` (`idestadoalumno`, `nombre`, `descripcion`, `estadopagos_idestadopagos`) VALUES
(1, 'Inscrito', 'Sin pagos', 1),
(2, 'Activo', 'Despues de pagar matricula y pension', 2),
(3, 'Inactivo', 'Consultar en Asistencias', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadocivil`
--

CREATE TABLE `estadocivil` (
  `idestadocivil` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `estadocivil`:
--

--
-- Volcado de datos para la tabla `estadocivil`
--

INSERT INTO `estadocivil` (`idestadocivil`, `nombre`, `descripcion`, `codigo`) VALUES
(1, 'soltero', 'Sin relacion conyugal', 1),
(2, 'Casado', 'Union marital ', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadopagos`
--

CREATE TABLE `estadopagos` (
  `idestadopagos` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `estadopagos`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotoalumno`
--

CREATE TABLE `fotoalumno` (
  `idfotoalumno` int(11) NOT NULL,
  `rutaimagen` varchar(250) NOT NULL,
  `codigo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONES PARA LA TABLA `fotoalumno`:
--

--
-- Volcado de datos para la tabla `fotoalumno`
--

INSERT INTO `fotoalumno` (`idfotoalumno`, `rutaimagen`, `codigo`) VALUES
(1, 'ruta foto', 1),
(2, 'ruta foto 2', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `justificacion`
--

CREATE TABLE `justificacion` (
  `idjustificacion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `ruta` varchar(45) DEFAULT NULL,
  `asistencia_idasistencia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `justificacion`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--

CREATE TABLE `modulos` (
  `idmodulos` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `rutas` varchar(45) DEFAULT NULL,
  `roles_idroles` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `modulos`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientoproducto`
--

CREATE TABLE `movimientoproducto` (
  `idmovimientoproducto` int(11) NOT NULL,
  `idproducto` int(11) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `idpago` int(11) DEFAULT NULL,
  `tipomovimiento_idtipomovimiento` int(11) NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL,
  `estadopagos_idestadopagos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `movimientoproducto`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivelacademico`
--

CREATE TABLE `nivelacademico` (
  `idnivelacademico` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `nivelacademico`:
--

--
-- Volcado de datos para la tabla `nivelacademico`
--

INSERT INTO `nivelacademico` (`idnivelacademico`, `nombre`, `descripcion`, `codigo`) VALUES
(1, 'Primaria', 'primero a quinto primaria', 1),
(2, 'Secundaria', 'Sexto a once', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `idpago` int(11) NOT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `idestadopago` int(11) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `idmovimientoproducto` int(11) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  `iadlumno` int(11) DEFAULT NULL,
  `idestadoalumno` varchar(45) DEFAULT NULL,
  `estadopagos_idestadopagos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `pago`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `idpais` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `pais`:
--

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`idpais`, `nombre`, `descripcion`, `codigo`) VALUES
(1, 'Colombia', 'Colombian@', 1),
(2, 'Venezuela', 'Venezolan@', 2),
(3, 'Argentina', 'Argentin@', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idproducto` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `idtipoproducto` int(11) DEFAULT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `rutaimagen` varchar(45) DEFAULT NULL,
  `precioventa` varchar(45) DEFAULT NULL,
  `tipoproducto_idtipoproducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `producto`:
--

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idproducto`, `nombre`, `descripcion`, `cantidad`, `idtipoproducto`, `stock`, `codigo`, `rutaimagen`, `precioventa`, `tipoproducto_idtipoproducto`) VALUES
(1, 'Pension', 'Pension por 5 meses', NULL, 2, NULL, '235689', '1', '230000', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_has_movimientoproducto`
--

CREATE TABLE `producto_has_movimientoproducto` (
  `producto_idproducto` int(11) NOT NULL,
  `movimientoproducto_idmovimientoproducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `producto_has_movimientoproducto`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idroles` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `roles`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sede`
--

CREATE TABLE `sede` (
  `idsede` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `clave` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONES PARA LA TABLA `sede`:
--

--
-- Volcado de datos para la tabla `sede`
--

INSERT INTO `sede` (`idsede`, `nombre`, `descripcion`, `clave`) VALUES
(1, 'Bogota', 'Cll 34 N', 1),
(2, 'Las Vegas', 'Usa - Nevada', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipomovimiento`
--

CREATE TABLE `tipomovimiento` (
  `idtipomovimiento` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tipomovimiento`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE `tipoproducto` (
  `idtipoproducto` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tipoproducto`:
--

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`idtipoproducto`, `nombre`, `descripcion`) VALUES
(1, 'Producto', 'Fisico'),
(2, 'Servicio', 'intangible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(16) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `idempresa` int(11) DEFAULT NULL,
  `idrol` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `idusuarios` int(11) NOT NULL,
  `sede_idsede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `usuarios`:
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `afiliacioneps`
--
ALTER TABLE `afiliacioneps`
  ADD PRIMARY KEY (`idafiliacioneps`);

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`idalumno`),
  ADD KEY `idestadocivil` (`idestadocivil`),
  ADD KEY `idestadoalumno` (`idestadoalumno`),
  ADD KEY `ciudad_idciudad` (`ciudad_idciudad`),
  ADD KEY `idestadocivil_2` (`idestadocivil`),
  ADD KEY `idestadocivil_3` (`idestadocivil`),
  ADD KEY `idestadoalumno_2` (`idestadoalumno`),
  ADD KEY `afiliacioneps_idafiliacioneps` (`afiliacioneps_idafiliacioneps`),
  ADD KEY `nivelacademico_idnivelacademico` (`nivelacademico_idnivelacademico`),
  ADD KEY `ciudad_idciudad_2` (`ciudad_idciudad`),
  ADD KEY `documento_iddocumento` (`documento_iddocumento`),
  ADD KEY `id_sede` (`id_sede`),
  ADD KEY `id_sede_2` (`id_sede`),
  ADD KEY `idasistencia` (`idasistencia`),
  ADD KEY `idfotoestudiante` (`idfotoalumno`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`idasistencia`,`alumno_idalumno`,`alumno_pais_idpais`),
  ADD KEY `idcurso` (`idcurso`),
  ADD KEY `idjustificacion` (`idjustificacion`),
  ADD KEY `idpago` (`idpago`),
  ADD KEY `idpago_2` (`idpago`),
  ADD KEY `alumno_pais_idpais` (`alumno_pais_idpais`),
  ADD KEY `Alumno` (`alumno_idalumno`);

--
-- Indices de la tabla `asistencia_has_curso`
--
ALTER TABLE `asistencia_has_curso`
  ADD PRIMARY KEY (`asistencia_idasistencia`,`curso_idcurso`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`idciudad`),
  ADD KEY `idpais` (`paisidpais`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idcurso`);

--
-- Indices de la tabla `documento`
--
ALTER TABLE `documento`
  ADD PRIMARY KEY (`iddocumento`);

--
-- Indices de la tabla `estadoalumno`
--
ALTER TABLE `estadoalumno`
  ADD PRIMARY KEY (`idestadoalumno`);

--
-- Indices de la tabla `estadocivil`
--
ALTER TABLE `estadocivil`
  ADD PRIMARY KEY (`idestadocivil`);

--
-- Indices de la tabla `estadopagos`
--
ALTER TABLE `estadopagos`
  ADD PRIMARY KEY (`idestadopagos`);

--
-- Indices de la tabla `fotoalumno`
--
ALTER TABLE `fotoalumno`
  ADD PRIMARY KEY (`idfotoalumno`);

--
-- Indices de la tabla `justificacion`
--
ALTER TABLE `justificacion`
  ADD PRIMARY KEY (`idjustificacion`,`asistencia_idasistencia`);

--
-- Indices de la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`idmodulos`,`roles_idroles`);

--
-- Indices de la tabla `movimientoproducto`
--
ALTER TABLE `movimientoproducto`
  ADD PRIMARY KEY (`idmovimientoproducto`);

--
-- Indices de la tabla `nivelacademico`
--
ALTER TABLE `nivelacademico`
  ADD PRIMARY KEY (`idnivelacademico`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`idpago`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`idpais`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idproducto`);

--
-- Indices de la tabla `producto_has_movimientoproducto`
--
ALTER TABLE `producto_has_movimientoproducto`
  ADD PRIMARY KEY (`producto_idproducto`,`movimientoproducto_idmovimientoproducto`);

--
-- Indices de la tabla `sede`
--
ALTER TABLE `sede`
  ADD PRIMARY KEY (`idsede`);

--
-- Indices de la tabla `tipomovimiento`
--
ALTER TABLE `tipomovimiento`
  ADD PRIMARY KEY (`idtipomovimiento`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD PRIMARY KEY (`idtipoproducto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD KEY `idusuarios` (`idusuarios`),
  ADD KEY `sede_idsede` (`sede_idsede`),
  ADD KEY `idrol` (`idrol`),
  ADD KEY `idempresa` (`idempresa`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estadoalumno`
--
ALTER TABLE `estadoalumno`
  MODIFY `idestadoalumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `estadocivil`
--
ALTER TABLE `estadocivil`
  MODIFY `idestadocivil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `fotoalumno`
--
ALTER TABLE `fotoalumno`
  MODIFY `idfotoalumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `nivelacademico`
--
ALTER TABLE `nivelacademico`
  MODIFY `idnivelacademico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sede`
--
ALTER TABLE `sede`
  MODIFY `idsede` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`afiliacioneps_idafiliacioneps`) REFERENCES `afiliacioneps` (`idafiliacioneps`),
  ADD CONSTRAINT `alumno_ibfk_2` FOREIGN KEY (`idestadocivil`) REFERENCES `estadocivil` (`idestadocivil`),
  ADD CONSTRAINT `alumno_ibfk_3` FOREIGN KEY (`nivelacademico_idnivelacademico`) REFERENCES `nivelacademico` (`idnivelacademico`),
  ADD CONSTRAINT `alumno_ibfk_4` FOREIGN KEY (`documento_iddocumento`) REFERENCES `documento` (`iddocumento`),
  ADD CONSTRAINT `alumno_ibfk_5` FOREIGN KEY (`id_sede`) REFERENCES `sede` (`idsede`),
  ADD CONSTRAINT `alumno_ibfk_6` FOREIGN KEY (`ciudad_idciudad`) REFERENCES `ciudad` (`idciudad`),
  ADD CONSTRAINT `alumno_ibfk_7` FOREIGN KEY (`id_sede`) REFERENCES `sede` (`idsede`),
  ADD CONSTRAINT `fotoalumno` FOREIGN KEY (`idfotoalumno`) REFERENCES `fotoalumno` (`idfotoalumno`);

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `Alumno` FOREIGN KEY (`alumno_idalumno`) REFERENCES `alumno` (`idalumno`),
  ADD CONSTRAINT `curso` FOREIGN KEY (`idcurso`) REFERENCES `curso` (`idcurso`),
  ADD CONSTRAINT `justifica` FOREIGN KEY (`idjustificacion`) REFERENCES `justificacion` (`idjustificacion`);

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`paisidpais`) REFERENCES `pais` (`idpais`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
