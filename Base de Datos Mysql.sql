-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2022 a las 02:23:43
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.23

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `affiliations`
--

CREATE TABLE `affiliations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `code` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `affiliations`
--

INSERT INTO `affiliations` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Sanitas', 'Cotizante', 1, 1, NULL, NULL),
(2, 'Sanitas', 'Beneficiario', 2, 1, NULL, NULL),
(3, 'Famisanar', 'Cotizante', 3, 1, NULL, NULL),
(4, 'Famisanar', 'Beneficiario', 4, 1, NULL, NULL);

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `business`
--

CREATE TABLE `business` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `business`
--

INSERT INTO `business` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Profe Diana', 'Belleza', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campuses`
--

CREATE TABLE `campuses` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `company_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `campuses`
--

INSERT INTO `campuses` (`id`, `name`, `description`, `company_id`, `city_id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Bogota', 'Cll 34 N', 1, 1, 1, NULL, NULL),
(2, 'Las Vegas', 'Usa - Nevada', 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `campus_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `careers`
--

INSERT INTO `careers` (`id`, `campus_id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(3, 1, 'Master en Uñas', 'Creación de uñas, pinados y estampados', 1, NULL, NULL),
(5, 1, 'Master en Uñas 2', 'Creación de uñas, pinados y estampados', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `code` varchar(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`id`, `name`, `description`, `code`, `country_id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Bogota', 'Ciudad Capital', '1', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `code` varchar(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Colombia', 'Colombian@', '1', 1, NULL, NULL),
(2, 'Venezuela', 'Venezolan@', '2', 1, NULL, NULL),
(3, 'Argentina', 'Argentin@', '3', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Manicure 1', 'Pintado de uñas', 1, NULL, NULL),
(2, 'Manicure 2', 'Escarchado de uñas', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curricular_details`
--

CREATE TABLE `curricular_details` (
  `id` int(11) NOT NULL,
  `curriculum_id` int(11) NOT NULL,
  `cycle_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `credit` int(10) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curricular_mesh`
--

CREATE TABLE `curricular_mesh` (
  `id` int(11) NOT NULL,
  `carrer_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Malla Curricular';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cycles`
--

CREATE TABLE `cycles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Ciclo de carrera';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `degrees`
--

CREATE TABLE `degrees` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `level` int(11) DEFAULT NULL COMMENT 'Nivel academico',
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `degrees`
--

INSERT INTO `degrees` (`id`, `name`, `description`, `level`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Primaria', 'primero a quinto primaria', 1, 1, NULL, NULL),
(2, 'Secundaria', 'Sexto a once', 2, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `details`
--

CREATE TABLE `details` (
  `id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `detailable_type` enum('Product','Schedule') NOT NULL,
  `detailable_id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `amount` int(10) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `details`
--

INSERT INTO `details` (`id`, `invoice_id`, `detailable_type`, `detailable_id`, `price`, `amount`, `state`, `created_at`, `updated_at`) VALUES
(28, 3, 'Product', 1, '10.00', 100, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `document_types`
--

CREATE TABLE `document_types` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `document_types`
--

INSERT INTO `document_types` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Cedula', 'cedula ciudadania colombiana', 1, NULL, NULL, NULL),
(2, 'Tarjeta Identidad', 'Menor de edad Colombiano', 2, NULL, NULL, NULL),
(3, 'PEP', 'Permis especial', 3, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `fileable_type` varchar(20) NOT NULL,
  `fileable_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `path` varchar(255) NOT NULL,
  `extname` varchar(40) NOT NULL,
  `size` int(255) NOT NULL,
  `type_mime` enum('IMAGE','DOCUMENT','COMPRESS','AUDIO','VIDEO','PDF','TEXT','HTML','XML','JSON') NOT NULL,
  `principal` tinyint(1) NOT NULL DEFAULT 1,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `transmitter_type` enum('Campus','Provider','User') NOT NULL COMMENT 'TYPE Emisor de la factura',
  `transmitter_id` int(11) NOT NULL COMMENT 'ID Emisor de la factura',
  `description` varchar(50) NOT NULL,
  `date` date NOT NULL COMMENT 'Fecha de emición de la factura',
  `receiver_type` enum('User','Campus','Student','') NOT NULL COMMENT 'TYPE Receptor de la factura',
  `receiver_id` int(11) NOT NULL COMMENT 'ID Receptor de la factura',
  `cancelled` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1 si el recibo se pago y cero si aún debe',
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `user_id` int(11) DEFAULT NULL COMMENT 'Ultimo usuario que modificó la factura',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de factura o Movimiento';

--
-- Volcado de datos para la tabla `invoices`
--

INSERT INTO `invoices` (`id`, `transmitter_type`, `transmitter_id`, `description`, `date`, `receiver_type`, `receiver_id`, `cancelled`, `state`, `user_id`, `created_at`, `updated_at`) VALUES
(3, 'Campus', 1, 'Pago de Curso', '2021-11-19', 'Student', 1, 0, 1, NULL, NULL, '2021-11-23 09:34:25'),
(4, 'Campus', 1, 'Pago de Curso', '2021-11-19', 'Student', 1, 0, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `justifications`
--

CREATE TABLE `justifications` (
  `idjustificacion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `ruta` varchar(45) DEFAULT NULL,
  `asistencia_idasistencia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `license_plates`
--

CREATE TABLE `license_plates` (
  `id` int(11) NOT NULL,
  `curriculum_detail_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Matriculas';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marital_status`
--

CREATE TABLE `marital_status` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marital_status`
--

INSERT INTO `marital_status` (`id`, `name`, `description`, `code`, `state`, `created_at`, `updated_at`) VALUES
(1, 'soltero', 'Sin relacion conyugal', 1, 1, NULL, NULL),
(2, 'Casado', 'Union marital ', 2, 1, NULL, NULL);

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `payment_service_id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `datetime` datetime NOT NULL,
  `share` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Numero de Cuota',
  `cancelled` tinyint(1) NOT NULL COMMENT '1 si se pagó y 0 si no se cancelo',
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `payments`
--

INSERT INTO `payments` (`id`, `invoice_id`, `payment_service_id`, `price`, `datetime`, `share`, `cancelled`, `state`, `created_at`, `updated_at`) VALUES
(1, 3, 1, '100.00', '2021-10-12 12:00:00', 1, 1, 1, '2021-11-23 09:34:23', NULL),
(2, 3, 1, '100.00', '2021-10-12 12:00:00', 2, 1, 1, '2021-11-23 09:34:25', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_services`
--

CREATE TABLE `payment_services` (
  `id` int(11) NOT NULL,
  `campus_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `payment_services`
--

INSERT INTO `payment_services` (`id`, `campus_id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(1, 1, 'Local', 'Caja 1', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `product_type_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `code` varchar(45) DEFAULT NULL,
  `purchase_price` decimal(10,2) DEFAULT NULL COMMENT 'precio de compra',
  `sale_price` decimal(10,2) DEFAULT NULL COMMENT 'precio de venta',
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `product_type_id`, `stock`, `code`, `purchase_price`, `sale_price`, `state`, `created_at`, `updated_at`) VALUES
(2, 'Coca Cola', 'Coca Cola', 1, 6, '0001', '0.50', '1.00', 1, NULL, NULL),
(3, 'Pepsi', 'Pepsi', 1, 7, '00J1', '0.50', '2.00', 1, NULL, NULL),
(4, 'Popeye', 'Jabon de cara', 1, 10, '00J1', '0.50', '2.00', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_types`
--

CREATE TABLE `product_types` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_types`
--

INSERT INTO `product_types` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Producto', 'Fisico', 1, NULL, NULL),
(2, 'Servicio', 'intangible', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Testing', 'Testing de apis', 1, NULL, NULL),
(2, 'admin', 'Administrador', 1, '2021-12-29 21:40:39', NULL),
(3, 'Profesor', 'profesores', 1, '2021-12-29 21:40:39', NULL),
(2, 'admin', 'Administrador', 1, '2021-12-29 21:40:39', NULL),
(3, 'Profesor', 'profesores', 1, '2021-12-29 21:40:39', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedules`
--

CREATE TABLE `schedules` (
  `id` int(11) NOT NULL,
  `curriculum_detail_id` int(11) NOT NULL COMMENT 'Curso',
  `teacher_id` int(11) NOT NULL COMMENT 'Usuario Profesor',
  `date_start` date NOT NULL COMMENT 'Fecha de Inicio',
  `date_over` date NOT NULL COMMENT 'Fecha de Cierre',
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Cronograma de cursos';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `name`, `description`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Inscrito', 'Sin pagos', 1, NULL, NULL),
(2, 'Activo', 'Despues de pagar matricula y pension', 1, NULL, NULL),
(3, 'Inactivo', 'Consultar en Asistencias', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `document_number` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `neighborhood` varchar(45) NOT NULL COMMENT 'Barrio',
  `date_of_birth` date NOT NULL,
  `landline` varchar(45) DEFAULT NULL COMMENT 'Telefono Fijo',
  `phone` varchar(45) NOT NULL COMMENT 'Telefono Movil',
  `email` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `eps` varchar(50) NOT NULL,
  `affiliation_id` int(11) NOT NULL,
  `degree_id` int(11) NOT NULL,
  `document_type_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT 1,
  `marital_status_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `name`, `lastname`, `document_number`, `address`, `neighborhood`, `date_of_birth`, `landline`, `phone`, `email`, `contact`, `eps`, `affiliation_id`, `degree_id`, `document_type_id`, `city_id`, `status_id`, `marital_status_id`, `created_at`, `updated_at`) VALUES
(2, 'Hans Lorenz', 'Medina Gonzales', '71051564', 'Jr Sol naciente', 'Luz y Paz', '1999-06-21', NULL, '928237596', 'twd2206@gmail.com', 'Padres', 'HOP897F89A', 1, 2, 1, 1, 1, 1, '2021-11-23 09:30:44', NULL),
(3, 'Karen', 'Vidaure', '71051565', 'Jr Sol naciente', 'Luz y Paz', '1999-06-21', NULL, '99999999', 'twd2206@gmail.com', 'Padres', '434353543543535', 1, 2, 1, 1, 1, 1, '2021-11-23 09:35:23', NULL),
(4, 'Alex Chistian', 'Medina Fuchs', '40333469', 'Jr Sol naciente', 'Luz y Paz', '1973-01-23', NULL, '953658856', 'medinafuchs24@gmail.com', 'Padres', 'HOP897F89T', 1, 1, 1, 1, 1, 1, '2021-11-23 10:37:58', NULL),
(5, 'Oscar Iván', 'Díaz ', '80125630', 'Calle 90 #376', 'Orquidea', '1972-09-14', NULL, '3203201320', 'oscar.diaz@gmail.com', 'Marcela Garabito', 'asdfsdfsdff', 1, 2, 1, 1, 1, 2, '2021-11-23 18:11:24', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `role_id` int(11) NOT NULL,
  `campus_id` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `username`, `email`, `password`, `role_id`, `campus_id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Hans', 'Medina', 'twd2206', 'twd2206@gmail.com', 'hola123456', 1, 1, 1, '2021-11-18 17:48:37', NULL),
(2, 'Oscar', 'Admin', 'oscivan', 'osca@gmail.com', 'hola123456', 2, 1, 1, '2021-12-29 15:42:18', '2021-12-29 21:41:37'),
(2, 'Oscar', 'Admin', 'oscivan', 'osca@gmail.com', 'hola123456', 2, 1, 1, '2021-12-29 15:42:44', '2021-12-29 21:41:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `affiliations`
--
ALTER TABLE `affiliations`
  ADD PRIMARY KEY (`id`) USING BTREE;

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
-- Indices de la tabla `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `campuses`
--
ALTER TABLE `campuses`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `pk-campuses-bussines` (`company_id`),
  ADD KEY `pk-campuses-cities` (`city_id`);

--
-- Indices de la tabla `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique-campusId-name` (`campus_id`,`name`);

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `idpais` (`country_id`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `curricular_details`
--
ALTER TABLE `curricular_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pk-curricurricular_details-cycle` (`cycle_id`),
  ADD KEY `pl-curricular_details-courses` (`course_id`),
  ADD KEY `pk-curricular_details-cullicular_mesh` (`curriculum_id`);

--
-- Indices de la tabla `curricular_mesh`
--
ALTER TABLE `curricular_mesh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pk-carrera-curricular_mesh` (`carrer_id`);

--
-- Indices de la tabla `cycles`
--
ALTER TABLE `cycles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `degrees`
--
ALTER TABLE `degrees`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique-details-product` (`invoice_id`,`detailable_type`,`detailable_id`);

--
-- Indices de la tabla `document_types`
--
ALTER TABLE `document_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `pk-invoices` (`user_id`);

--
-- Indices de la tabla `justifications`
--
ALTER TABLE `justifications`
  ADD PRIMARY KEY (`idjustificacion`,`asistencia_idasistencia`),
  ADD KEY `idjustificacion` (`idjustificacion`);

--
-- Indices de la tabla `license_plates`
--
ALTER TABLE `license_plates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pk-license_plates-curricular_details` (`curriculum_detail_id`),
  ADD KEY `pk-license_plates-students` (`student_id`);

--
-- Indices de la tabla `marital_status`
--
ALTER TABLE `marital_status`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`idmodulos`,`roles_idroles`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `pk-payments-invoices` (`invoice_id`),
  ADD KEY `pk-payments-payment_services` (`payment_service_id`);

--
-- Indices de la tabla `payment_services`
--
ALTER TABLE `payment_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pk-payment_services-campuses` (`campus_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `pk-producs-product_types` (`product_type_id`);

--
-- Indices de la tabla `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pk-schedules-curricular_details` (`curriculum_detail_id`),
  ADD KEY `pk-schedules-users` (`teacher_id`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `unique-students` (`document_number`),
  ADD KEY `pk-students-affiliations` (`affiliation_id`),
  ADD KEY `pk-students-degrees` (`degree_id`),
  ADD KEY `pk-students-document_types` (`document_type_id`),
  ADD KEY `pk-students-cities` (`city_id`),
  ADD KEY `pk-students-status` (`status_id`),
  ADD KEY `pk-students` (`marital_status_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD KEY `idusuarios` (`id`),
  ADD KEY `sede_idsede` (`campus_id`),
  ADD KEY `idrol` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `campuses`
--
ALTER TABLE `campuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `curricular_details`
--
ALTER TABLE `curricular_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curricular_mesh`
--
ALTER TABLE `curricular_mesh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cycles`
--
ALTER TABLE `cycles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `degrees`
--
ALTER TABLE `degrees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `details`
--
ALTER TABLE `details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `document_types`
--
ALTER TABLE `document_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `marital_status`
--
ALTER TABLE `marital_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `payment_services`
--
ALTER TABLE `payment_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `justifica` FOREIGN KEY (`idjustificacion`) REFERENCES `justifications` (`idjustificacion`);

--
-- Filtros para la tabla `campuses`
--
ALTER TABLE `campuses`
  ADD CONSTRAINT `pk-campuses-bussines` FOREIGN KEY (`company_id`) REFERENCES `business` (`id`),
  ADD CONSTRAINT `pk-campuses-cities` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);

--
-- Filtros para la tabla `careers`
--
ALTER TABLE `careers`
  ADD CONSTRAINT `pk-carrers-campus` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`id`);

--
-- Filtros para la tabla `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `pk-cities-countries` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

--
-- Filtros para la tabla `curricular_details`
--
ALTER TABLE `curricular_details`
  ADD CONSTRAINT `pk-curricular_details-cullicular_mesh` FOREIGN KEY (`curriculum_id`) REFERENCES `curricular_mesh` (`id`),
  ADD CONSTRAINT `pk-curricurricular_details-cycle` FOREIGN KEY (`cycle_id`) REFERENCES `cycles` (`id`),
  ADD CONSTRAINT `pl-curricular_details-courses` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);

--
-- Filtros para la tabla `curricular_mesh`
--
ALTER TABLE `curricular_mesh`
  ADD CONSTRAINT `pk-carrera-curricular_mesh` FOREIGN KEY (`carrer_id`) REFERENCES `courses` (`id`);

--
-- Filtros para la tabla `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `pk-details-invoices` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`);

--
-- Filtros para la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `pk-invoices` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `license_plates`
--
ALTER TABLE `license_plates`
  ADD CONSTRAINT `pk-license_plates-curricular_details` FOREIGN KEY (`curriculum_detail_id`) REFERENCES `curricular_details` (`id`),
  ADD CONSTRAINT `pk-license_plates-students` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `pk-payments-invoices` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`),
  ADD CONSTRAINT `pk-payments-payment_services` FOREIGN KEY (`payment_service_id`) REFERENCES `payment_services` (`id`);

--
-- Filtros para la tabla `payment_services`
--
ALTER TABLE `payment_services`
  ADD CONSTRAINT `pk-payment_services-campuses` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `pk-producs-product_types` FOREIGN KEY (`product_type_id`) REFERENCES `product_types` (`id`);

--
-- Filtros para la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `pk-schedules-curricular_details` FOREIGN KEY (`curriculum_detail_id`) REFERENCES `curricular_details` (`id`),
  ADD CONSTRAINT `pk-schedules-users` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `pk-students` FOREIGN KEY (`marital_status_id`) REFERENCES `marital_status` (`id`),
  ADD CONSTRAINT `pk-students-affiliations` FOREIGN KEY (`affiliation_id`) REFERENCES `affiliations` (`id`),
  ADD CONSTRAINT `pk-students-cities` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  ADD CONSTRAINT `pk-students-degrees` FOREIGN KEY (`degree_id`) REFERENCES `degrees` (`id`),
  ADD CONSTRAINT `pk-students-document_types` FOREIGN KEY (`document_type_id`) REFERENCES `document_types` (`id`),
  ADD CONSTRAINT `pk-students-status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `pk-users-campuses` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`id`),
  ADD CONSTRAINT `pk-users-roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
