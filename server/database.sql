-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para profediana
DROP DATABASE IF EXISTS `profediana`;
CREATE DATABASE IF NOT EXISTS `profediana` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `profediana`;

-- Volcando estructura para tabla profediana.afiliacioneps
DROP TABLE IF EXISTS `afiliacioneps`;
CREATE TABLE IF NOT EXISTS `afiliacioneps` (
  `idafiliacioneps` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idafiliacioneps`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.afiliacioneps: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `afiliacioneps` DISABLE KEYS */;
REPLACE INTO `afiliacioneps` (`idafiliacioneps`, `nombre`, `descripcion`, `codigo`) VALUES
	(1, 'Sanitas', 'Cotizante', 1),
	(2, 'Sanitas', 'Beneficiario', 2),
	(3, 'Famisanar', 'Cotizante', 3),
	(4, 'Famisanar', 'Beneficiario', 4);
/*!40000 ALTER TABLE `afiliacioneps` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.alumno
DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
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
  PRIMARY KEY (`idalumno`),
  KEY `idestadocivil` (`idestadocivil`),
  KEY `idestadoalumno` (`idestadoalumno`),
  KEY `ciudad_idciudad` (`ciudad_idciudad`),
  KEY `idestadocivil_2` (`idestadocivil`),
  KEY `idestadocivil_3` (`idestadocivil`),
  KEY `idestadoalumno_2` (`idestadoalumno`),
  KEY `afiliacioneps_idafiliacioneps` (`afiliacioneps_idafiliacioneps`),
  KEY `nivelacademico_idnivelacademico` (`nivelacademico_idnivelacademico`),
  KEY `ciudad_idciudad_2` (`ciudad_idciudad`),
  KEY `documento_iddocumento` (`documento_iddocumento`),
  KEY `id_sede` (`id_sede`),
  CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`afiliacioneps_idafiliacioneps`) REFERENCES `afiliacioneps` (`idafiliacioneps`),
  CONSTRAINT `alumno_ibfk_2` FOREIGN KEY (`idestadocivil`) REFERENCES `estadocivil` (`idestadocivil`),
  CONSTRAINT `alumno_ibfk_3` FOREIGN KEY (`nivelacademico_idnivelacademico`) REFERENCES `nivelacademico` (`idnivelacademico`),
  CONSTRAINT `alumno_ibfk_4` FOREIGN KEY (`documento_iddocumento`) REFERENCES `documento` (`iddocumento`),
  CONSTRAINT `alumno_ibfk_5` FOREIGN KEY (`id_sede`) REFERENCES `sede` (`idsede`),
  CONSTRAINT `alumno_ibfk_6` FOREIGN KEY (`ciudad_idciudad`) REFERENCES `ciudad` (`idciudad`),
  CONSTRAINT `alumno_ibfk_7` FOREIGN KEY (`id_sede`) REFERENCES `sede` (`idsede`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.alumno: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
REPLACE INTO `alumno` (`idalumno`, `nombre`, `apellido`, `numerodocumento`, `direccion`, `barrio`, `telefonofijo`, `telefonomovil`, `correoelectronico`, `contacto`, `pagos`, `afiliacioneps_idafiliacioneps`, `nivelacademico_idnivelacademico`, `documento_iddocumento`, `ciudad_idciudad`, `idestadoalumno`, `idestadocivil`, `id_sede`) VALUES
	(1, 'Laura', 'Mateus', '1023569854', 'cra 45 N 34-89', 'Quirigua', '2003569', '3012562354', 'micorreo@correo.com', 'Juanita Sanchez', 1, 1, 1, 1, 1, 1, 1, 1),
	(2, 'juan', 'sanchez', '45895658', 'cra 45 N 78-89', 'San luis', '2300048', '3102568974', 'jusanchez@correo.com', 'martha perez', 1, 1, 1, 1, 1, 1, 1, 1);
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.asistencia
DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE IF NOT EXISTS `asistencia` (
  `idasistencia` int(11) NOT NULL,
  `idcurso` int(11) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `idjustificacion` int(11) DEFAULT NULL,
  `idpago` int(11) DEFAULT NULL,
  `alumno_idalumno` int(11) NOT NULL,
  `alumno_pais_idpais` int(11) NOT NULL,
  PRIMARY KEY (`idasistencia`,`alumno_idalumno`,`alumno_pais_idpais`),
  KEY `idcurso` (`idcurso`),
  KEY `idjustificacion` (`idjustificacion`),
  KEY `idpago` (`idpago`),
  KEY `idpago_2` (`idpago`),
  KEY `alumno_pais_idpais` (`alumno_pais_idpais`),
  KEY `Alumno` (`alumno_idalumno`),
  CONSTRAINT `Alumno` FOREIGN KEY (`alumno_idalumno`) REFERENCES `alumno` (`idalumno`),
  CONSTRAINT `curso` FOREIGN KEY (`idcurso`) REFERENCES `curso` (`idcurso`),
  CONSTRAINT `justifica` FOREIGN KEY (`idjustificacion`) REFERENCES `justificacion` (`idjustificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.asistencia: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.asistencia_has_curso
DROP TABLE IF EXISTS `asistencia_has_curso`;
CREATE TABLE IF NOT EXISTS `asistencia_has_curso` (
  `asistencia_idasistencia` int(11) NOT NULL,
  `curso_idcurso` int(11) NOT NULL,
  PRIMARY KEY (`asistencia_idasistencia`,`curso_idcurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.asistencia_has_curso: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `asistencia_has_curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia_has_curso` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.ciudad
DROP TABLE IF EXISTS `ciudad`;
CREATE TABLE IF NOT EXISTS `ciudad` (
  `idciudad` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  `paisidpais` int(11) NOT NULL,
  PRIMARY KEY (`idciudad`),
  KEY `idpais` (`paisidpais`),
  CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`paisidpais`) REFERENCES `pais` (`idpais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.ciudad: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
REPLACE INTO `ciudad` (`idciudad`, `nombre`, `descripcion`, `codigo`, `paisidpais`) VALUES
	(1, 'Bogota', 'Ciudad Capital', 1, 1);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.curso
DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso` (
  `idcurso` int(11) NOT NULL,
  `clase` varchar(45) DEFAULT NULL,
  `tema` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `estadocurso` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idcurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.curso: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.documento
DROP TABLE IF EXISTS `documento`;
CREATE TABLE IF NOT EXISTS `documento` (
  `iddocumento` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`iddocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.documento: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `documento` DISABLE KEYS */;
REPLACE INTO `documento` (`iddocumento`, `tipo`, `descripcion`, `codigo`) VALUES
	(1, 'Cedula', 'cedula ciudadania colombiana', 1),
	(2, 'Tarjeta Identidad', 'Menor de edad Colombiano', 2),
	(3, 'PEP', 'Permis especial', 3);
/*!40000 ALTER TABLE `documento` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.estadoalumno
DROP TABLE IF EXISTS `estadoalumno`;
CREATE TABLE IF NOT EXISTS `estadoalumno` (
  `idestadoalumno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `estadopagos_idestadopagos` int(11) NOT NULL,
  PRIMARY KEY (`idestadoalumno`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.estadoalumno: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `estadoalumno` DISABLE KEYS */;
REPLACE INTO `estadoalumno` (`idestadoalumno`, `nombre`, `descripcion`, `estadopagos_idestadopagos`) VALUES
	(1, 'Inscrito', 'Sin pagos', 1),
	(2, 'Activo', 'Despues de pagar matricula y pension', 2),
	(3, 'Inactivo', 'Consultar en Asistencias', 3);
/*!40000 ALTER TABLE `estadoalumno` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.estadocivil
DROP TABLE IF EXISTS `estadocivil`;
CREATE TABLE IF NOT EXISTS `estadocivil` (
  `idestadocivil` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idestadocivil`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.estadocivil: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `estadocivil` DISABLE KEYS */;
REPLACE INTO `estadocivil` (`idestadocivil`, `nombre`, `descripcion`, `codigo`) VALUES
	(1, 'soltero', 'Sin relacion conyugal', 1),
	(2, 'Casado', 'Union marital ', 2);
/*!40000 ALTER TABLE `estadocivil` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.estadopagos
DROP TABLE IF EXISTS `estadopagos`;
CREATE TABLE IF NOT EXISTS `estadopagos` (
  `idestadopagos` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idestadopagos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.estadopagos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estadopagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `estadopagos` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.fotoalumno
DROP TABLE IF EXISTS `fotoalumno`;
CREATE TABLE IF NOT EXISTS `fotoalumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) NOT NULL,
  `rutafoto` varchar(250) NOT NULL,
  `rutacompromiso` varchar(250) NOT NULL,
  `codigo` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `pk-foto-alumno` (`alumno_id`),
  CONSTRAINT `pk-foto-alumno` FOREIGN KEY (`alumno_id`) REFERENCES `alumno` (`idalumno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.fotoalumno: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `fotoalumno` DISABLE KEYS */;
REPLACE INTO `fotoalumno` (`id`, `alumno_id`, `rutafoto`, `rutacompromiso`, `codigo`) VALUES
	(1, 1, 'ruta foto', '', 1),
	(2, 2, 'ruta foto 2', '', 2);
/*!40000 ALTER TABLE `fotoalumno` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.justificacion
DROP TABLE IF EXISTS `justificacion`;
CREATE TABLE IF NOT EXISTS `justificacion` (
  `idjustificacion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `ruta` varchar(45) DEFAULT NULL,
  `asistencia_idasistencia` int(11) NOT NULL,
  PRIMARY KEY (`idjustificacion`,`asistencia_idasistencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.justificacion: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `justificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `justificacion` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.modulos
DROP TABLE IF EXISTS `modulos`;
CREATE TABLE IF NOT EXISTS `modulos` (
  `idmodulos` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `rutas` varchar(45) DEFAULT NULL,
  `roles_idroles` int(11) NOT NULL,
  PRIMARY KEY (`idmodulos`,`roles_idroles`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.modulos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.movimientoproducto
DROP TABLE IF EXISTS `movimientoproducto`;
CREATE TABLE IF NOT EXISTS `movimientoproducto` (
  `idmovimientoproducto` int(11) NOT NULL,
  `idproducto` int(11) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `idpago` int(11) DEFAULT NULL,
  `tipomovimiento_idtipomovimiento` int(11) NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL,
  `estadopagos_idestadopagos` int(11) NOT NULL,
  PRIMARY KEY (`idmovimientoproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.movimientoproducto: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `movimientoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimientoproducto` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.nivelacademico
DROP TABLE IF EXISTS `nivelacademico`;
CREATE TABLE IF NOT EXISTS `nivelacademico` (
  `idnivelacademico` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idnivelacademico`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.nivelacademico: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `nivelacademico` DISABLE KEYS */;
REPLACE INTO `nivelacademico` (`idnivelacademico`, `nombre`, `descripcion`, `codigo`) VALUES
	(1, 'Primaria', 'primero a quinto primaria', 1),
	(2, 'Secundaria', 'Sexto a once', 2);
/*!40000 ALTER TABLE `nivelacademico` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.pago
DROP TABLE IF EXISTS `pago`;
CREATE TABLE IF NOT EXISTS `pago` (
  `idpago` int(11) NOT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `idestadopago` int(11) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `idmovimientoproducto` int(11) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  `iadlumno` int(11) DEFAULT NULL,
  `idestadoalumno` varchar(45) DEFAULT NULL,
  `estadopagos_idestadopagos` int(11) NOT NULL,
  PRIMARY KEY (`idpago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.pago: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.pais
DROP TABLE IF EXISTS `pais`;
CREATE TABLE IF NOT EXISTS `pais` (
  `idpais` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idpais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.pais: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
REPLACE INTO `pais` (`idpais`, `nombre`, `descripcion`, `codigo`) VALUES
	(1, 'Colombia', 'Colombian@', 1),
	(2, 'Venezuela', 'Venezolan@', 2),
	(3, 'Argentina', 'Argentin@', 3);
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.producto
DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `idproducto` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `idtipoproducto` int(11) DEFAULT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `rutaimagen` varchar(45) DEFAULT NULL,
  `precioventa` varchar(45) DEFAULT NULL,
  `tipoproducto_idtipoproducto` int(11) NOT NULL,
  PRIMARY KEY (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.producto: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
REPLACE INTO `producto` (`idproducto`, `nombre`, `descripcion`, `cantidad`, `idtipoproducto`, `stock`, `codigo`, `rutaimagen`, `precioventa`, `tipoproducto_idtipoproducto`) VALUES
	(1, 'Pension', 'Pension por 5 meses', NULL, 2, NULL, '235689', '1', '230000', 1);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.producto_has_movimientoproducto
DROP TABLE IF EXISTS `producto_has_movimientoproducto`;
CREATE TABLE IF NOT EXISTS `producto_has_movimientoproducto` (
  `producto_idproducto` int(11) NOT NULL,
  `movimientoproducto_idmovimientoproducto` int(11) NOT NULL,
  PRIMARY KEY (`producto_idproducto`,`movimientoproducto_idmovimientoproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.producto_has_movimientoproducto: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `producto_has_movimientoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_has_movimientoproducto` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `idroles` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.roles: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.sede
DROP TABLE IF EXISTS `sede`;
CREATE TABLE IF NOT EXISTS `sede` (
  `idsede` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `clave` int(11) DEFAULT NULL,
  PRIMARY KEY (`idsede`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.sede: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `sede` DISABLE KEYS */;
REPLACE INTO `sede` (`idsede`, `nombre`, `descripcion`, `clave`) VALUES
	(1, 'Bogota', 'Cll 34 N', 1),
	(2, 'Las Vegas', 'Usa - Nevada', 2);
/*!40000 ALTER TABLE `sede` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.tipomovimiento
DROP TABLE IF EXISTS `tipomovimiento`;
CREATE TABLE IF NOT EXISTS `tipomovimiento` (
  `idtipomovimiento` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idtipomovimiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.tipomovimiento: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tipomovimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipomovimiento` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.tipoproducto
DROP TABLE IF EXISTS `tipoproducto`;
CREATE TABLE IF NOT EXISTS `tipoproducto` (
  `idtipoproducto` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipoproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.tipoproducto: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `tipoproducto` DISABLE KEYS */;
REPLACE INTO `tipoproducto` (`idtipoproducto`, `nombre`, `descripcion`) VALUES
	(1, 'Producto', 'Fisico'),
	(2, 'Servicio', 'intangible');
/*!40000 ALTER TABLE `tipoproducto` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `username` varchar(16) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `idempresa` int(11) DEFAULT NULL,
  `idrol` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `idusuarios` int(11) NOT NULL,
  `sede_idsede` int(11) NOT NULL,
  KEY `idusuarios` (`idusuarios`),
  KEY `sede_idsede` (`sede_idsede`),
  KEY `idrol` (`idrol`),
  KEY `idempresa` (`idempresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
