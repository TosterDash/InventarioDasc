-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-09-2020 a las 23:53:41
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

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
(17, 1, 2, 'dd', 24.102418309144376, -110.3162826439057, 24.102518692104077, -110.31626921812418, 24.10252114046797, -110.31630949546879, 24.10242075751018, -110.31632023609401),
(20, 1, 1, 'sala maestros', 24.102651515777385, -110.31608428261103, 24.10267110266687, -110.31618622371155, 24.102700482995463, -110.31618085839047, 24.102684568651643, -110.31607757595965),
(21, 1, 1, 'salon 1', 24.10268089611048, -110.3162049869835, 24.102704155536077, -110.31619828033213, 24.102712724797065, -110.31625864019428, 24.102678447749653, -110.31626802950616),
(22, 1, 2, 'administracion', 24.10251563164915, -110.31619693764729, 24.10254133946826, -110.31618888966564, 24.10256337473767, -110.31630290273858, 24.102531546013974, -110.31630558539915),
(37, 2, 1, 'dawdaw', 24.10291155189415, -110.31622163952763, 24.102889516684645, -110.31604059041914, 24.102833204465362, -110.31604997815067, 24.102862584756767, -110.31622834505018),
(39, 2, 1, 'dawdaw', 24.10282953192845, -110.31613178552563, 24.102817290138017, -110.3160580247777, 24.10265080167201, -110.31608618797237, 24.102682630366076, -110.31626589597637),
(40, 2, 2, 'bbb', 24.102558988087136, -110.31633831561977, 24.102528383544218, -110.31617335976536, 24.10249410644747, -110.31635306776937, 24.102530831907924, -110.31631685794765),
(41, 2, 2, 'dawdawd', 24.10251124499699, -110.31617067755636, 24.102386378369392, -110.3161974996465, 24.102456156793934, -110.31627796591692, 24.102502675722516, -110.31622700394566);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula_has_objeto`
--

CREATE TABLE `aula_has_objeto` (
  `idAulaHasObjeto` int(11) NOT NULL,
  `idAula` int(11) NOT NULL,
  `idObjeto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Estructura de tabla para la tabla `objeto`
--

CREATE TABLE `objeto` (
  `idObjeto` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `lastMant` date NOT NULL,
  `nextMant` date NOT NULL,
  `mantResp` varchar(45) NOT NULL,
  `idTipoCategoria` int(11) NOT NULL,
  `idTipoEquipo` int(11) NOT NULL,
  `idTipoHerramienta` int(11) NOT NULL,
  `idTipoConsumible` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `exitDate` date NOT NULL,
  `returnDate` date NOT NULL,
  `idObjeto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipocategoria`
--

CREATE TABLE `tipocategoria` (
  `idTipoCategoria` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoconsumible`
--

CREATE TABLE `tipoconsumible` (
  `idTipoConsumible` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoequipo`
--

CREATE TABLE `tipoequipo` (
  `idTipoEquipo` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoherramienta`
--

CREATE TABLE `tipoherramienta` (
  `idTipoHerramienta` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Indices de la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD PRIMARY KEY (`idObjeto`),
  ADD KEY `idTipoCategoria` (`idTipoCategoria`),
  ADD KEY `idTipoConsumible` (`idTipoConsumible`),
  ADD KEY `idTipoEquipo` (`idTipoEquipo`),
  ADD KEY `idTipoHerramienta` (`idTipoHerramienta`);

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
  ADD KEY `idObjeto1` (`idObjeto`);

--
-- Indices de la tabla `tipocategoria`
--
ALTER TABLE `tipocategoria`
  ADD PRIMARY KEY (`idTipoCategoria`);

--
-- Indices de la tabla `tipoconsumible`
--
ALTER TABLE `tipoconsumible`
  ADD PRIMARY KEY (`idTipoConsumible`);

--
-- Indices de la tabla `tipoequipo`
--
ALTER TABLE `tipoequipo`
  ADD PRIMARY KEY (`idTipoEquipo`);

--
-- Indices de la tabla `tipoherramienta`
--
ALTER TABLE `tipoherramienta`
  ADD PRIMARY KEY (`idTipoHerramienta`);

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
  MODIFY `idAula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  MODIFY `idAulaHasObjeto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `edificio`
--
ALTER TABLE `edificio`
  MODIFY `idEdificio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `objeto`
--
ALTER TABLE `objeto`
  MODIFY `idObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `planta`
--
ALTER TABLE `planta`
  MODIFY `idPlanta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `idPrestamo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipocategoria`
--
ALTER TABLE `tipocategoria`
  MODIFY `idTipoCategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoconsumible`
--
ALTER TABLE `tipoconsumible`
  MODIFY `idTipoConsumible` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoequipo`
--
ALTER TABLE `tipoequipo`
  MODIFY `idTipoEquipo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoherramienta`
--
ALTER TABLE `tipoherramienta`
  MODIFY `idTipoHerramienta` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `idObjeto` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`);

--
-- Filtros para la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD CONSTRAINT `idTipoCategoria` FOREIGN KEY (`idTipoCategoria`) REFERENCES `tipocategoria` (`idTipoCategoria`),
  ADD CONSTRAINT `idTipoConsumible` FOREIGN KEY (`idTipoConsumible`) REFERENCES `tipoconsumible` (`idTipoConsumible`),
  ADD CONSTRAINT `idTipoEquipo` FOREIGN KEY (`idTipoEquipo`) REFERENCES `tipoequipo` (`idTipoEquipo`),
  ADD CONSTRAINT `idTipoHerramienta` FOREIGN KEY (`idTipoHerramienta`) REFERENCES `tipoherramienta` (`idTipoHerramienta`);

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `idObjeto1` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
