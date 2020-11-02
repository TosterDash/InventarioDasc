-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2020 at 04:54 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventario`
--

-- --------------------------------------------------------

--
-- Table structure for table `aula`
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
-- Dumping data for table `aula`
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
-- Table structure for table `aula_has_objeto`
--

CREATE TABLE `aula_has_objeto` (
  `idAulaHasObjeto` int(11) NOT NULL,
  `idAula` int(11) NOT NULL,
  `idObjeto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `edificio`
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
-- Dumping data for table `edificio`
--

INSERT INTO `edificio` (`idEdificio`, `Nombre`, `x1`, `y1`, `x2`, `y2`, `x3`, `y3`, `x4`, `y4`) VALUES
(1, 'MACRO', 24.102931, -110.316239, 24.102901, -110.316016, 24.102629, -110.316068, 24.102661, -110.316288),
(2, 'DASC', 24.102576, -110.316352, 24.102544, -110.316151, 24.102366, -110.316183, 24.102398, -110.316387);

-- --------------------------------------------------------

--
-- Table structure for table `objeto`
--

CREATE TABLE `objeto` (
  `idObjeto` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `lastMant` date DEFAULT NULL,
  `nextMant` date DEFAULT NULL,
  `mantResp` varchar(45) DEFAULT NULL,
  `idTipoCategoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `objeto`
--

INSERT INTO `objeto` (`idObjeto`, `Nombre`, `Descripcion`, `Cantidad`, `lastMant`, `nextMant`, `mantResp`, `idTipoCategoria`) VALUES
(35, 'aaaavvvaadata', 'aaaaa', 0, '0000-00-00', '0000-00-00', NULL, NULL),
(36, 'dffffffffjjjjjjjj', 'jjjjjjjjjjjjjjjj', 0, '0000-00-00', '0000-00-00', NULL, NULL),
(37, 'zzzzzzzzzzzaabbb', 'zzzzzzzzzzzzzzzzzzz', 0, '0000-00-00', '0000-00-00', NULL, NULL),
(39, 'aaaaaaaaaasssssssss', 'dawdaw', 0, '0000-00-00', '0000-00-00', NULL, NULL),
(40, 'bbbbbbbbbbbbb', 'bbbbbbbbbbb', 0, '0000-00-00', '0000-00-00', NULL, NULL),
(41, 'cccccccccc', 'ccccccccccccccc', 0, '0000-00-00', '0000-00-00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `planta`
--

CREATE TABLE `planta` (
  `idPlanta` int(11) NOT NULL,
  `planta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `planta`
--

INSERT INTO `planta` (`idPlanta`, `planta`) VALUES
(1, 'BAJA'),
(2, 'ALTA');

-- --------------------------------------------------------

--
-- Table structure for table `prestamo`
--

CREATE TABLE `prestamo` (
  `idPrestamo` int(11) NOT NULL,
  `edificio` varchar(45) NOT NULL,
  `aula` varchar(45) NOT NULL,
  `exitDate` date NOT NULL,
  `returnDate` date NOT NULL,
  `idObjeto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tipocategoria`
--

CREATE TABLE `tipocategoria` (
  `idTipoCategoria` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tipocategoria`
--

INSERT INTO `tipocategoria` (`idTipoCategoria`, `categoria`) VALUES
(1, 'Herramienta');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `Nombre`, `Password`) VALUES
(1, 'user', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aula`
--
ALTER TABLE `aula`
  ADD PRIMARY KEY (`idAula`),
  ADD KEY `idPlanta` (`idPlanta`),
  ADD KEY `idEdificio` (`idEdificio`);

--
-- Indexes for table `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  ADD PRIMARY KEY (`idAulaHasObjeto`),
  ADD KEY `idAula` (`idAula`),
  ADD KEY `idObjeto` (`idObjeto`);

--
-- Indexes for table `edificio`
--
ALTER TABLE `edificio`
  ADD PRIMARY KEY (`idEdificio`);

--
-- Indexes for table `objeto`
--
ALTER TABLE `objeto`
  ADD PRIMARY KEY (`idObjeto`),
  ADD KEY `idTipoCategoria` (`idTipoCategoria`);

--
-- Indexes for table `planta`
--
ALTER TABLE `planta`
  ADD PRIMARY KEY (`idPlanta`);

--
-- Indexes for table `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`idPrestamo`),
  ADD KEY `idObjeto1` (`idObjeto`);

--
-- Indexes for table `tipocategoria`
--
ALTER TABLE `tipocategoria`
  ADD PRIMARY KEY (`idTipoCategoria`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aula`
--
ALTER TABLE `aula`
  MODIFY `idAula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  MODIFY `idAulaHasObjeto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `edificio`
--
ALTER TABLE `edificio`
  MODIFY `idEdificio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `objeto`
--
ALTER TABLE `objeto`
  MODIFY `idObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `planta`
--
ALTER TABLE `planta`
  MODIFY `idPlanta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `idPrestamo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tipocategoria`
--
ALTER TABLE `tipocategoria`
  MODIFY `idTipoCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aula`
--
ALTER TABLE `aula`
  ADD CONSTRAINT `idEdificio` FOREIGN KEY (`idEdificio`) REFERENCES `edificio` (`idEdificio`),
  ADD CONSTRAINT `idPlanta` FOREIGN KEY (`idPlanta`) REFERENCES `planta` (`idPlanta`);

--
-- Constraints for table `aula_has_objeto`
--
ALTER TABLE `aula_has_objeto`
  ADD CONSTRAINT `idAula` FOREIGN KEY (`idAula`) REFERENCES `aula` (`idAula`),
  ADD CONSTRAINT `idObjeto` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`);

--
-- Constraints for table `objeto`
--
ALTER TABLE `objeto`
  ADD CONSTRAINT `idTipoCategoria` FOREIGN KEY (`idTipoCategoria`) REFERENCES `tipocategoria` (`idTipoCategoria`);

--
-- Constraints for table `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `idObjeto1` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

