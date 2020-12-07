-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2020 a las 05:06:49
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula`
--

CREATE TABLE `aula` (
  `idAula` int(11) NOT NULL,
  `idPlanta` int(11) NOT NULL,
  `idEdificio` int(11) NOT NULL,
  `nombreAula` varchar(100) NOT NULL,
  `x1` double NOT NULL,
  `y1` double NOT NULL,
  `x2` double NOT NULL,
  `y2` double NOT NULL,
  `x3` double NOT NULL,
  `y3` double NOT NULL,
  `x4` double NOT NULL,
  `y4` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aula`
--

INSERT INTO `aula` (`idAula`, `idPlanta`, `idEdificio`, `nombreAula`, `x1`, `y1`, `x2`, `y2`, `x3`, `y3`, `x4`, `y4`) VALUES
(1, 1, 1, 'salon 1', 24.102653559879474, -110.31608763791823, 24.10270497603943, -110.31608361381907, 24.102715993785313, -110.31615738896987, 24.102667026018604, -110.31616677853451),
(2, 1, 1, 'salon 2', 24.102673146990465, -110.31618555766381, 24.102720890560953, -110.31617750946555, 24.10272823572406, -110.31625799144823, 24.102684164739074, -110.31626335691372),
(3, 1, 1, 'salon largo 3', 24.102757616372287, -110.31624860188357, 24.102881259859746, -110.31623116412065, 24.10287146632053, -110.31616946126728, 24.102751495404473, -110.31618019219829),
(4, 1, 1, 'salon 4', 24.10285187923988, -110.31613860984058, 24.102842085698423, -110.31605410375877, 24.10288615662906, -110.31604605556049, 24.10290329532022, -110.31613056164232),
(5, 2, 1, 'salon cc1', 24.102856776010317, -110.31622445728877, 24.10283963731294, -110.31606483468978, 24.102888605013657, -110.31605142102602, 24.102908192088695, -110.316161413069);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula_has_objeto`
--

CREATE TABLE `aula_has_objeto` (
  `idAulaHasObjeto` int(11) NOT NULL,
  `idAula` int(11) NOT NULL,
  `idObjeto` int(5) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aula_has_objeto`
--

INSERT INTO `aula_has_objeto` (`idAulaHasObjeto`, `idAula`, `idObjeto`) VALUES
(1, 1, 00001),
(2, 1, 00002);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edificio`
--

CREATE TABLE `edificio` (
  `idEdificio` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `x1` double NOT NULL,
  `y1` double NOT NULL,
  `x2` double NOT NULL,
  `y2` double NOT NULL,
  `x3` double NOT NULL,
  `y3` double NOT NULL,
  `x4` double NOT NULL,
  `y4` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `edificio`
--

INSERT INTO `edificio` (`idEdificio`, `Nombre`, `x1`, `y1`, `x2`, `y2`, `x3`, `y3`, `x4`, `y4`) VALUES
(1, 'MACRO', 24.102931, -110.316239, 24.102901, -110.316016, 24.102629, -110.316068, 24.102661, -110.316288),
(2, 'DASC', 24.102576, -110.316352, 24.102544, -110.316151, 24.102366, -110.316183, 24.102398, -110.316387);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mantresp`
--

CREATE TABLE `mantresp` (
  `idMantResp` int(11) NOT NULL,
  `nombreRol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mantresp`
--

INSERT INTO `mantresp` (`idMantResp`, `nombreRol`) VALUES
(0, 'Seleccionar'),
(1, 'encargado de soporte'),
(2, 'auxiliar de soporte TV'),
(3, 'auxiliar de soporte TM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objeto`
--

CREATE TABLE `objeto` (
  `idObjeto` int(5) UNSIGNED ZEROFILL NOT NULL,
  `idUabcs` varchar(20) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `prestamo` varchar(5) DEFAULT NULL,
  `mantenimiento` varchar(5) DEFAULT NULL,
  `lastMant` date DEFAULT NULL,
  `nextMant` date DEFAULT NULL,
  `idMantResp` int(11) NOT NULL,
  `idTipoProducto` int(11) NOT NULL,
  `img` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `objeto`
--

INSERT INTO `objeto` (`idObjeto`, `idUabcs`, `nombre`, `descripcion`, `cantidad`, `prestamo`, `mantenimiento`, `lastMant`, `nextMant`, `idMantResp`, `idTipoProducto`, `img`) VALUES
(00001, 'UABCS-', 'HP', '2500 modelo inspiron', NULL, 'true', 'true', '2020-12-01', '2021-05-30', 2, 1, ''),
(00002, NULL, 'Hojas marca isis', 'paquete de 100 hojas', 99, NULL, NULL, NULL, NULL, 0, 3, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planta`
--

CREATE TABLE `planta` (
  `idPlanta` int(11) NOT NULL,
  `planta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `planta`
--

INSERT INTO `planta` (`idPlanta`, `planta`) VALUES
(1, 'BAJA'),
(2, 'ALTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `idPrestamo` int(11) NOT NULL,
  `idEdificio` int(11) NOT NULL,
  `idAula` int(11) NOT NULL,
  `idUserprestamo` int(11) NOT NULL,
  `exitDate` date NOT NULL,
  `returnDate` date NOT NULL,
  `entregado` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prestamo`
--

INSERT INTO `prestamo` (`idPrestamo`, `idEdificio`, `idAula`, `idUserprestamo`, `exitDate`, `returnDate`, `entregado`) VALUES
(1, 1, 1, 4, '2020-12-05', '2020-12-07', 'true');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo_has_objeto`
--

CREATE TABLE `prestamo_has_objeto` (
  `idPrestamoHasObjeto` int(11) NOT NULL,
  `idPrestamo` int(11) NOT NULL,
  `idObjeto` int(5) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prestamo_has_objeto`
--

INSERT INTO `prestamo_has_objeto` (`idPrestamoHasObjeto`, `idPrestamo`, `idObjeto`) VALUES
(1, 1, 00001);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoclasificacion`
--

CREATE TABLE `tipoclasificacion` (
  `idTipoClasificacion` int(11) NOT NULL,
  `clasificacion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipoclasificacion`
--

INSERT INTO `tipoclasificacion` (`idTipoClasificacion`, `clasificacion`) VALUES
(1, 'Equipo'),
(2, 'Consumible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE `tipoproducto` (
  `idTipoProducto` int(11) NOT NULL,
  `producto` varchar(100) NOT NULL,
  `idTipoClasificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`idTipoProducto`, `producto`, `idTipoClasificacion`) VALUES
(1, 'Computadora', 1),
(3, 'Hojas', 2),
(4, 'Toner', 2),
(8, 'Impresora', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userprestamo`
--

CREATE TABLE `userprestamo` (
  `idUserPrestamo` int(11) NOT NULL,
  `identificador` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `prestamoActivo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `userprestamo`
--

INSERT INTO `userprestamo` (`idUserPrestamo`, `identificador`, `nombre`, `prestamoActivo`) VALUES
(1, 2016082681, 'Roberto Gómez Laminera', 'false'),
(2, 2016082403, 'Paulina Castañeda', 'false'),
(3, 2016082629, 'Elvira Quintero', 'false'),
(4, 2016082630, 'Jean López', 'false'),
(5, 2010082010, 'mix', 'false'),
(6, 2016082011, 'Alejandra Yague', 'true');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `Nombre`, `Password`) VALUES
(1, 'user', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aula`
--
ALTER TABLE `aula`
  ADD PRIMARY KEY (`idAula`),
  ADD KEY `idPlanta` (`idPlanta`),
  ADD KEY `idEdificio` (`idEdificio`);

--
-- Indices de la tabla `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  ADD PRIMARY KEY (`idAulaHasObjeto`),
  ADD KEY `idAula` (`idAula`),
  ADD KEY `idObjeto` (`idObjeto`);

--
-- Indices de la tabla `edificio`
--
ALTER TABLE `edificio`
  ADD PRIMARY KEY (`idEdificio`);

--
-- Indices de la tabla `mantresp`
--
ALTER TABLE `mantresp`
  ADD PRIMARY KEY (`idMantResp`);

--
-- Indices de la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD PRIMARY KEY (`idObjeto`),
  ADD KEY `idTipoProducto` (`idTipoProducto`),
  ADD KEY `idMantResp` (`idMantResp`);

--
-- Indices de la tabla `planta`
--
ALTER TABLE `planta`
  ADD PRIMARY KEY (`idPlanta`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`idPrestamo`),
  ADD KEY `prestamo_idEdificio` (`idEdificio`),
  ADD KEY `prestamo_idAula` (`idAula`),
  ADD KEY `prestamo_idUserPrestamo` (`idUserprestamo`);

--
-- Indices de la tabla `prestamo_has_objeto`
--
ALTER TABLE `prestamo_has_objeto`
  ADD PRIMARY KEY (`idPrestamoHasObjeto`),
  ADD KEY `idPrestamo` (`idPrestamo`),
  ADD KEY `idObjeto` (`idObjeto`);

--
-- Indices de la tabla `tipoclasificacion`
--
ALTER TABLE `tipoclasificacion`
  ADD PRIMARY KEY (`idTipoClasificacion`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD PRIMARY KEY (`idTipoProducto`),
  ADD KEY `idTipoClasificacion` (`idTipoClasificacion`);

--
-- Indices de la tabla `userprestamo`
--
ALTER TABLE `userprestamo`
  ADD PRIMARY KEY (`idUserPrestamo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aula`
--
ALTER TABLE `aula`
  MODIFY `idAula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  MODIFY `idAulaHasObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `edificio`
--
ALTER TABLE `edificio`
  MODIFY `idEdificio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `mantresp`
--
ALTER TABLE `mantresp`
  MODIFY `idMantResp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `objeto`
--
ALTER TABLE `objeto`
  MODIFY `idObjeto` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `planta`
--
ALTER TABLE `planta`
  MODIFY `idPlanta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `idPrestamo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `prestamo_has_objeto`
--
ALTER TABLE `prestamo_has_objeto`
  MODIFY `idPrestamoHasObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipoclasificacion`
--
ALTER TABLE `tipoclasificacion`
  MODIFY `idTipoClasificacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  MODIFY `idTipoProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `userprestamo`
--
ALTER TABLE `userprestamo`
  MODIFY `idUserPrestamo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aula`
--
ALTER TABLE `aula`
  ADD CONSTRAINT `idEdificio` FOREIGN KEY (`idEdificio`) REFERENCES `edificio` (`idEdificio`),
  ADD CONSTRAINT `idPlanta` FOREIGN KEY (`idPlanta`) REFERENCES `planta` (`idPlanta`);

--
-- Filtros para la tabla `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  ADD CONSTRAINT `idAula` FOREIGN KEY (`idAula`) REFERENCES `aula` (`idAula`),
  ADD CONSTRAINT `idObjetoHas` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`);

--
-- Filtros para la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD CONSTRAINT `idMantResp` FOREIGN KEY (`idMantResp`) REFERENCES `mantresp` (`idMantResp`),
  ADD CONSTRAINT `idTipoProducto` FOREIGN KEY (`idTipoProducto`) REFERENCES `tipoproducto` (`idTipoProducto`);

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `prestamo_idAula` FOREIGN KEY (`idAula`) REFERENCES `aula` (`idAula`),
  ADD CONSTRAINT `prestamo_idEdificio` FOREIGN KEY (`idEdificio`) REFERENCES `edificio` (`idEdificio`),
  ADD CONSTRAINT `prestamo_idUserPrestamo` FOREIGN KEY (`idUserprestamo`) REFERENCES `userprestamo` (`idUserPrestamo`);

--
-- Filtros para la tabla `prestamo_has_objeto`
--
ALTER TABLE `prestamo_has_objeto`
  ADD CONSTRAINT `idObjeto` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`),
  ADD CONSTRAINT `idPrestamo` FOREIGN KEY (`idPrestamo`) REFERENCES `prestamo` (`idPrestamo`);

--
-- Filtros para la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD CONSTRAINT `idTipoClasificacion` FOREIGN KEY (`idTipoClasificacion`) REFERENCES `tipoclasificacion` (`idTipoClasificacion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
