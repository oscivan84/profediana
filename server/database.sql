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
CREATE DATABASE IF NOT EXISTS `profediana` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `profediana`;

-- Volcando estructura para tabla profediana.affiliations
CREATE TABLE IF NOT EXISTS `affiliations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `code` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.affiliations: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `affiliations` DISABLE KEYS */;
REPLACE INTO `affiliations` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Sanitas', 'Cotizante', 1, 1, NULL, NULL),
	(2, 'Sanitas', 'Beneficiario', 2, 1, NULL, NULL),
	(3, 'Famisanar', 'Cotizante', 3, 1, NULL, NULL),
	(4, 'Famisanar', 'Beneficiario', 4, 1, NULL, NULL);
/*!40000 ALTER TABLE `affiliations` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.asistencia
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
  CONSTRAINT `justifica` FOREIGN KEY (`idjustificacion`) REFERENCES `justifications` (`idjustificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.asistencia: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.business
CREATE TABLE IF NOT EXISTS `business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.business: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
REPLACE INTO `business` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Profe Diana', 'Belleza', 1, NULL, NULL);
/*!40000 ALTER TABLE `business` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.campuses
CREATE TABLE IF NOT EXISTS `campuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `company_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.campuses: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `campuses` DISABLE KEYS */;
REPLACE INTO `campuses` (`id`, `name`, `description`, `company_id`, `city_id`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Bogota', 'Cll 34 N', 1, 1, 1, NULL, NULL),
	(2, 'Las Vegas', 'Usa - Nevada', 2, 1, 1, NULL, NULL);
/*!40000 ALTER TABLE `campuses` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.careers
CREATE TABLE IF NOT EXISTS `careers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campus_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-carrers-campus` (`campus_id`),
  CONSTRAINT `pk-carrers-campus` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.careers: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `careers` DISABLE KEYS */;
/*!40000 ALTER TABLE `careers` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.cities
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `code` varchar(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idpais` (`country_id`),
  CONSTRAINT `pk-cities-countries` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.cities: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
REPLACE INTO `cities` (`id`, `name`, `description`, `code`, `country_id`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Bogota', 'Ciudad Capital', '1', 1, 1, NULL, NULL);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.countries
CREATE TABLE IF NOT EXISTS `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `code` varchar(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.countries: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
REPLACE INTO `countries` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Colombia', 'Colombian@', '1', 1, NULL, NULL),
	(2, 'Venezuela', 'Venezolan@', '2', 1, NULL, NULL),
	(3, 'Argentina', 'Argentin@', '3', 1, NULL, NULL);
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.courses
CREATE TABLE IF NOT EXISTS `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.courses: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
REPLACE INTO `courses` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Manicure 1', 'Pintado de uñas', 1, NULL, NULL),
	(2, 'Manicure 2', 'Escarchado de uñas', 1, NULL, NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.curricular_details
CREATE TABLE IF NOT EXISTS `curricular_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curriculum_id` int(11) NOT NULL,
  `cycle_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `credit` int(10) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-curricurricular_details-cycle` (`cycle_id`),
  KEY `pl-curricular_details-courses` (`course_id`),
  KEY `pk-curricular_details-cullicular_mesh` (`curriculum_id`),
  CONSTRAINT `pk-curricular_details-cullicular_mesh` FOREIGN KEY (`curriculum_id`) REFERENCES `curricular_mesh` (`id`),
  CONSTRAINT `pk-curricurricular_details-cycle` FOREIGN KEY (`cycle_id`) REFERENCES `cycles` (`id`),
  CONSTRAINT `pl-curricular_details-courses` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.curricular_details: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `curricular_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `curricular_details` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.curricular_mesh
CREATE TABLE IF NOT EXISTS `curricular_mesh` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carrer_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-carrera-curricular_mesh` (`carrer_id`),
  CONSTRAINT `pk-carrera-curricular_mesh` FOREIGN KEY (`carrer_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Malla Curricular';

-- Volcando datos para la tabla profediana.curricular_mesh: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `curricular_mesh` DISABLE KEYS */;
/*!40000 ALTER TABLE `curricular_mesh` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.cycles
CREATE TABLE IF NOT EXISTS `cycles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Ciclo de carrera';

-- Volcando datos para la tabla profediana.cycles: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cycles` DISABLE KEYS */;
/*!40000 ALTER TABLE `cycles` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.degrees
CREATE TABLE IF NOT EXISTS `degrees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `level` int(11) DEFAULT NULL COMMENT 'Nivel academico',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.degrees: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `degrees` DISABLE KEYS */;
REPLACE INTO `degrees` (`id`, `name`, `description`, `level`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Primaria', 'primero a quinto primaria', 1, 1, NULL, NULL),
	(2, 'Secundaria', 'Sexto a once', 2, 1, NULL, NULL);
/*!40000 ALTER TABLE `degrees` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.details
CREATE TABLE IF NOT EXISTS `details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_id` int(11) NOT NULL,
  `detailable_type` enum('Product','Schedule') NOT NULL,
  `detailable_id` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-details-invoices` (`invoice_id`),
  CONSTRAINT `pk-details-invoices` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.details: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `details` DISABLE KEYS */;
/*!40000 ALTER TABLE `details` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.document_types
CREATE TABLE IF NOT EXISTS `document_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.document_types: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `document_types` DISABLE KEYS */;
REPLACE INTO `document_types` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Cedula', 'cedula ciudadania colombiana', 1, NULL, NULL, NULL),
	(2, 'Tarjeta Identidad', 'Menor de edad Colombiano', 2, NULL, NULL, NULL),
	(3, 'PEP', 'Permis especial', 3, NULL, NULL, NULL);
/*!40000 ALTER TABLE `document_types` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.files
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fileable_type` varchar(20) NOT NULL,
  `fileable_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `path` varchar(255) NOT NULL,
  `extname` varchar(40) NOT NULL,
  `size` int(255) NOT NULL,
  `type_mime` enum('IMAGE','DOCUMENT','COMPRESS','AUDIO','VIDEO','PDF','TEXT','HTML','XML','JSON') NOT NULL,
  `principal` tinyint(1) NOT NULL DEFAULT '1',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.files: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.invoices
CREATE TABLE IF NOT EXISTS `invoices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transmitter_type` enum('Company','Provider','User') NOT NULL COMMENT 'TYPE Emisor de la factura',
  `transmitter_id` int(11) NOT NULL COMMENT 'ID Emisor de la factura',
  `description` varchar(50) NOT NULL,
  `date` date NOT NULL COMMENT 'Fecha de emición de la factura',
  `receiver_type` enum('User','Company','Student','') NOT NULL COMMENT 'TYPE Receptor de la factura',
  `receiver_id` int(11) NOT NULL COMMENT 'ID Receptor de la factura',
  `cancelled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1 si el recibo se pago y cero si aún debe',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `user_id` int(11) DEFAULT NULL COMMENT 'Ultimo usuario que modificó la factura',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `pk-invoices` (`user_id`),
  CONSTRAINT `pk-invoices` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de factura o Movimiento';

-- Volcando datos para la tabla profediana.invoices: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.justifications
CREATE TABLE IF NOT EXISTS `justifications` (
  `idjustificacion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `ruta` varchar(45) DEFAULT NULL,
  `asistencia_idasistencia` int(11) NOT NULL,
  PRIMARY KEY (`idjustificacion`,`asistencia_idasistencia`),
  KEY `idjustificacion` (`idjustificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.justifications: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `justifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `justifications` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.license_plates
CREATE TABLE IF NOT EXISTS `license_plates` (
  `id` int(11) NOT NULL,
  `curriculum_detail_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-license_plates-curricular_details` (`curriculum_detail_id`),
  KEY `pk-license_plates-students` (`student_id`),
  CONSTRAINT `pk-license_plates-curricular_details` FOREIGN KEY (`curriculum_detail_id`) REFERENCES `curricular_details` (`id`),
  CONSTRAINT `pk-license_plates-students` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Matriculas';

-- Volcando datos para la tabla profediana.license_plates: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `license_plates` DISABLE KEYS */;
/*!40000 ALTER TABLE `license_plates` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.marital_status
CREATE TABLE IF NOT EXISTS `marital_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.marital_status: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `marital_status` DISABLE KEYS */;
REPLACE INTO `marital_status` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'soltero', 'Sin relacion conyugal', 1, 1, NULL, NULL),
	(2, 'Casado', 'Union marital ', 2, 1, NULL, NULL);
/*!40000 ALTER TABLE `marital_status` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.modulos
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

-- Volcando estructura para tabla profediana.payments
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_id` int(11) NOT NULL,
  `payment_service_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_date` datetime NOT NULL,
  `share` int(10) NOT NULL DEFAULT '1' COMMENT 'Numero de Cuota',
  `cancelled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1 si se pagó y 0 si no se cancelo',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `pk-payments-invoices` (`invoice_id`),
  KEY `pk-payments-payment_services` (`payment_service_id`),
  CONSTRAINT `pk-payments-invoices` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`),
  CONSTRAINT `pk-payments-payment_services` FOREIGN KEY (`payment_service_id`) REFERENCES `payment_services` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.payments: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.payment_services
CREATE TABLE IF NOT EXISTS `payment_services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campus_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-payment_services-campuses` (`campus_id`),
  CONSTRAINT `pk-payment_services-campuses` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla profediana.payment_services: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `payment_services` DISABLE KEYS */;
REPLACE INTO `payment_services` (`id`, `campus_id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Local', 'Caja 1', 1, NULL, NULL);
/*!40000 ALTER TABLE `payment_services` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `amount` int(10) NOT NULL DEFAULT '0',
  `product_type_id` int(11) NOT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `rutaimagen` varchar(45) DEFAULT NULL,
  `purchase_price` varchar(10) DEFAULT NULL COMMENT 'precio de compra',
  `sale_price` decimal(10,2) DEFAULT NULL COMMENT 'precio de venta',
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `pk-producs-product_types` (`product_type_id`),
  CONSTRAINT `pk-producs-product_types` FOREIGN KEY (`product_type_id`) REFERENCES `product_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.products: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE INTO `products` (`id`, `name`, `description`, `amount`, `product_type_id`, `stock`, `code`, `rutaimagen`, `purchase_price`, `sale_price`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Pension', 'Pension por 5 meses', 0, 2, NULL, '235689', '1', '230000', NULL, 1, NULL, NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.product_types
CREATE TABLE IF NOT EXISTS `product_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.product_types: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `product_types` DISABLE KEYS */;
REPLACE INTO `product_types` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Producto', 'Fisico', 1, NULL, NULL),
	(2, 'Servicio', 'intangible', 1, NULL, NULL);
/*!40000 ALTER TABLE `product_types` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.roles: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
REPLACE INTO `roles` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Testing', 'Testing de apis', 1, NULL, NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curriculum_detail_id` int(11) NOT NULL COMMENT 'Curso',
  `teacher_id` int(11) NOT NULL COMMENT 'Usuario Profesor',
  `date_start` date NOT NULL COMMENT 'Fecha de Inicio',
  `date_over` date NOT NULL COMMENT 'Fecha de Cierre',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pk-schedules-curricular_details` (`curriculum_detail_id`),
  KEY `pk-schedules-users` (`teacher_id`),
  CONSTRAINT `pk-schedules-curricular_details` FOREIGN KEY (`curriculum_detail_id`) REFERENCES `curricular_details` (`id`),
  CONSTRAINT `pk-schedules-users` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Cronograma de cursos';

-- Volcando datos para la tabla profediana.schedules: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.status
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.status: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
REPLACE INTO `status` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Inscrito', 'Sin pagos', 1, NULL, NULL),
	(2, 'Activo', 'Despues de pagar matricula y pension', 1, NULL, NULL),
	(3, 'Inactivo', 'Consultar en Asistencias', 1, NULL, NULL);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `document_number` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `neighborhood` varchar(45) DEFAULT NULL COMMENT 'Barrio',
  `landline` varchar(45) DEFAULT NULL COMMENT 'Telefono Fijo',
  `phone` varchar(45) DEFAULT NULL COMMENT 'Telefono Movil',
  `email` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `affiliation_id` int(11) NOT NULL,
  `degree_id` int(11) NOT NULL,
  `document_type_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `marital_status_id` int(11) NOT NULL,
  `sede_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `unique-students` (`document_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.students: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
REPLACE INTO `students` (`id`, `name`, `lastname`, `document_number`, `address`, `neighborhood`, `landline`, `phone`, `email`, `contact`, `affiliation_id`, `degree_id`, `document_type_id`, `city_id`, `status_id`, `marital_status_id`, `sede_id`, `created_at`, `updated_at`) VALUES
	(1, 'Hans', 'Medina', '99999989', 'Jr Sol nacienteneigbo', 'Quirigua', '2003569', '9999999', 'twd2206@gmail.com', 'Juan Sanchez', 1, 1, 1, 1, 1, 1, 1, NULL, NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Volcando estructura para tabla profediana.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `role_id` int(11) NOT NULL,
  `campus_id` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  KEY `idusuarios` (`id`),
  KEY `sede_idsede` (`campus_id`),
  KEY `idrol` (`role_id`),
  CONSTRAINT `pk-users-campuses` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`id`),
  CONSTRAINT `pk-users-roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla profediana.users: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `name`, `lastname`, `username`, `email`, `password`, `role_id`, `campus_id`, `state`, `created_at`, `updated_at`) VALUES
	(1, 'Hans', 'Medina', 'twd2206', 'twd2206@gmail.com', 'hola123456', 1, 1, 1, '2021-11-18 17:48:37', NULL),
	(2, 'Hans', 'Medina', 'twd2206', 'twd2206@gmail.com', 'hola123456', 1, 1, 1, '2021-11-18 17:49:16', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
