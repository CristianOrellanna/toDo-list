CREATE TABLE `usuarios` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) UNIQUE NOT NULL,
  `nombre` varchar(255),
  `correo` varchar(255),
  `password` varchar(255) NOT NULL
);

CREATE TABLE `tareas` (
  `id_tarea` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `descripcion` text NOT NULL,
  `fecha_vencimiento` date,
  `terminado` boolean DEFAULT false
);

ALTER TABLE `tareas` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);
