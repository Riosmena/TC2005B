-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-03-2023 a las 17:04:37
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Jeep`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autos`
--

CREATE TABLE `autos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(80) NOT NULL,
  `imagen` varchar(400) DEFAULT NULL,
  `color` varchar(400) DEFAULT NULL,
  `idVersion` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `autos`
--

INSERT INTO `autos` (`id`, `tipo`, `imagen`, `color`, `idVersion`, `created_at`) VALUES
(1, 'Wrangler', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPaDfhhNMhMpFAm7cOrO4_zvGKSkGiuFkBg&usqp=CAU', 'Rojo', 1, '2023-03-13 20:50:00'),
(2, 'Wrangler Unlimited', 'https://w0.peakpx.com/wallpaper/889/993/HD-wallpaper-jeep-jeep-wrangler-unlimited-sahara-black-car-car-off-road.jpg', 'Negro', 2, '2023-03-13 22:42:34'),
(3, 'Wrangler', 'https://pictures.dealer.com/c/ccivancouver/0670/c2788e3500110319b23696386786a7ddx.jpg?impolicy=resize&w=414', 'Gris', 1, '2023-03-13 22:43:44'),
(4, 'Wrangler Unlimited', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeep-wrangler-4xe-2022-1638881858.jpg?crop=1.00xw:0.892xh;0,0.0462xh&resize=1200:*', 'Blanco', 1, '2023-03-13 22:44:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `versiones`
--

CREATE TABLE `versiones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `versiones`
--

INSERT INTO `versiones` (`id`, `nombre`, `created_at`) VALUES
(1, 'Rubicon', '2023-03-13 20:52:16'),
(2, 'Sahara', '2023-03-13 20:52:24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `perros`
--
ALTER TABLE `autos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idVersion` (`idVersion`);

--
-- Indices de la tabla `versiones`
--
ALTER TABLE `versiones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `perros`
--
ALTER TABLE `autos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `razas`
--
ALTER TABLE `versiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `perros`
--
ALTER TABLE `autos`
  ADD CONSTRAINT `autos_id_1` FOREIGN KEY (`idVersion`) REFERENCES `versiones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
