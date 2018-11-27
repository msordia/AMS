# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.1.37-MariaDB)
# Database: TaxiUnico
# Generation Time: 2018-11-27 01:35:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Administrador
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Administrador`;

CREATE TABLE `Administrador` (
  `Id_admin` int(11) NOT NULL,
  PRIMARY KEY (`Id_admin`),
  CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`Id_admin`) REFERENCES `Persona` (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Administrador` WRITE;
/*!40000 ALTER TABLE `Administrador` DISABLE KEYS */;

INSERT INTO `Administrador` (`Id_admin`)
VALUES
	(7),
	(9);

/*!40000 ALTER TABLE `Administrador` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Cliente
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Cliente`;

CREATE TABLE `Cliente` (
  `Id_cliente` int(11) NOT NULL,
  `Id_forma` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_cliente`),
  KEY `Id_forma` (`Id_forma`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`Id_cliente`) REFERENCES `Persona` (`id_persona`),
  CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`Id_forma`) REFERENCES `FormaDePago` (`Id_forma`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Cliente` WRITE;
/*!40000 ALTER TABLE `Cliente` DISABLE KEYS */;

INSERT INTO `Cliente` (`Id_cliente`, `Id_forma`)
VALUES
	(4,1),
	(10,1),
	(5,2),
	(6,3);

/*!40000 ALTER TABLE `Cliente` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Encuesta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Encuesta`;

CREATE TABLE `Encuesta` (
  `Id_enc` int(11) NOT NULL,
  `Id_viaje` int(11) DEFAULT NULL,
  `Id_preguntas` int(11) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  PRIMARY KEY (`Id_enc`),
  KEY `Id_viaje` (`Id_viaje`),
  KEY `Id_preguntas` (`Id_preguntas`),
  CONSTRAINT `encuesta_ibfk_1` FOREIGN KEY (`Id_viaje`) REFERENCES `Viaje` (`Id_viaje`),
  CONSTRAINT `encuesta_ibfk_2` FOREIGN KEY (`Id_preguntas`) REFERENCES `PreguntasEnc` (`Id_preguntas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Encuesta` WRITE;
/*!40000 ALTER TABLE `Encuesta` DISABLE KEYS */;

INSERT INTO `Encuesta` (`Id_enc`, `Id_viaje`, `Id_preguntas`, `Fecha`)
VALUES
	(1,1,1,'2017-10-25'),
	(2,2,1,'2017-12-28'),
	(3,4,2,'2018-08-02');

/*!40000 ALTER TABLE `Encuesta` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table FormaDePago
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FormaDePago`;

CREATE TABLE `FormaDePago` (
  `Id_forma` int(11) NOT NULL,
  `NumeroTarjeta` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`Id_forma`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `FormaDePago` WRITE;
/*!40000 ALTER TABLE `FormaDePago` DISABLE KEYS */;

INSERT INTO `FormaDePago` (`Id_forma`, `NumeroTarjeta`)
VALUES
	(1,'456890123423'),
	(2,'787789123423'),
	(3,'456890123900');

/*!40000 ALTER TABLE `FormaDePago` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Persona
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Persona`;

CREATE TABLE `Persona` (
  `id_persona` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Persona` WRITE;
/*!40000 ALTER TABLE `Persona` DISABLE KEYS */;

INSERT INTO `Persona` (`id_persona`, `nombre`, `fechaNacimiento`, `sexo`, `telefono`, `correo`, `contrasena`)
VALUES
	(1,'Juan Valdez','1983-03-09','H','8117226390','juan@hotmail.com','Taxi123'),
	(2,'Martha Jimenez','1980-04-09','M','8119996390','martha@hotmail.com','Taxi*Go'),
	(3,'Gerardo Martinez','1986-10-22','H','8117221234','gera@hotmail.com','Futbol43'),
	(4,'Julieta Marcos','1994-09-20','M','8180826390','juls@hotmail.com','Jamaica839!'),
	(5,'Julian Acosta','1989-12-22','H','8117255590','julian@hotmail.com','h7sI9'),
	(6,'Osvaldo','1999-02-28','H','8112323490','osv99@hotmail.com','goooool321'),
	(7,'Raquel Fuentes','1985-05-09','M','8122226390','raq.f@hotmail.com','OKls93*'),
	(8,'t','1985-05-09','M','2222222222','t','t'),
	(9,'a','1985-05-09','H','8111222312','a','a'),
	(10,'c','1985-05-09','H','6666666666','c','c');

/*!40000 ALTER TABLE `Persona` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Precios
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Precios`;

CREATE TABLE `Precios` (
  `CostoKM` float NOT NULL,
  `Fecha` date NOT NULL,
  PRIMARY KEY (`CostoKM`,`Fecha`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Precios` WRITE;
/*!40000 ALTER TABLE `Precios` DISABLE KEYS */;

INSERT INTO `Precios` (`CostoKM`, `Fecha`)
VALUES
	(14.6,'2018-05-03'),
	(15.6,'2017-09-12'),
	(17.3,'2018-10-12');

/*!40000 ALTER TABLE `Precios` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Pregunta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Pregunta`;

CREATE TABLE `Pregunta` (
  `Id_pregunta` int(11) NOT NULL,
  `Id_preguntas` int(11) DEFAULT NULL,
  `Pregunta` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_pregunta`),
  KEY `Id_preguntas` (`Id_preguntas`),
  CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`Id_preguntas`) REFERENCES `PreguntasEnc` (`Id_preguntas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Pregunta` WRITE;
/*!40000 ALTER TABLE `Pregunta` DISABLE KEYS */;

INSERT INTO `Pregunta` (`Id_pregunta`, `Id_preguntas`, `Pregunta`)
VALUES
	(1,1,'¿Cómo le pareció el viaje?'),
	(2,1,'¿Cuál fue su impresión del conductor?'),
	(3,1,'Comentarios / Sugerencias'),
	(4,2,'Comentarios del viaje'),
	(5,2,'Comentarios del conductor'),
	(6,2,'¿Algún comentario?');

/*!40000 ALTER TABLE `Pregunta` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table PreguntasEnc
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PreguntasEnc`;

CREATE TABLE `PreguntasEnc` (
  `Id_preguntas` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  PRIMARY KEY (`Id_preguntas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `PreguntasEnc` WRITE;
/*!40000 ALTER TABLE `PreguntasEnc` DISABLE KEYS */;

INSERT INTO `PreguntasEnc` (`Id_preguntas`, `Fecha`)
VALUES
	(1,'2017-09-11'),
	(2,'2018-08-01');

/*!40000 ALTER TABLE `PreguntasEnc` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Respuesta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Respuesta`;

CREATE TABLE `Respuesta` (
  `Id_enc` int(11) NOT NULL,
  `Id_pregunta` int(11) NOT NULL,
  `Respuesta` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_enc`,`Id_pregunta`),
  KEY `Id_pregunta` (`Id_pregunta`),
  CONSTRAINT `respuesta_ibfk_1` FOREIGN KEY (`Id_enc`) REFERENCES `Encuesta` (`Id_enc`),
  CONSTRAINT `respuesta_ibfk_2` FOREIGN KEY (`Id_pregunta`) REFERENCES `Pregunta` (`Id_pregunta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Respuesta` WRITE;
/*!40000 ALTER TABLE `Respuesta` DISABLE KEYS */;

INSERT INTO `Respuesta` (`Id_enc`, `Id_pregunta`, `Respuesta`)
VALUES
	(1,1,'Bien'),
	(1,2,'Buena'),
	(1,3,'N/A'),
	(2,1,'Algo lento'),
	(2,2,'Bueno'),
	(2,3,'El app se traba y no marcaba ruta óptima'),
	(3,4,'Muy buena'),
	(3,5,'Super bien, muy preparado'),
	(3,6,'N/A');

/*!40000 ALTER TABLE `Respuesta` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Taxi
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Taxi`;

CREATE TABLE `Taxi` (
  `Id_taxi` int(11) NOT NULL,
  `id_taxista` int(11) DEFAULT NULL,
  `Folio` varchar(100) DEFAULT NULL,
  `Marca` varchar(100) DEFAULT NULL,
  `Modelo` varchar(100) DEFAULT NULL,
  `Placas` varchar(100) DEFAULT NULL,
  `Color` varchar(100) DEFAULT NULL,
  `Disponible` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id_taxi`),
  KEY `id_taxista` (`id_taxista`),
  CONSTRAINT `taxi_ibfk_1` FOREIGN KEY (`id_taxista`) REFERENCES `Taxista` (`id_taxista`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Taxi` WRITE;
/*!40000 ALTER TABLE `Taxi` DISABLE KEYS */;

INSERT INTO `Taxi` (`Id_taxi`, `id_taxista`, `Folio`, `Marca`, `Modelo`, `Placas`, `Color`, `Disponible`)
VALUES
	(1,1,'1123','Toyota','Corolla','SLS-98-54','Rojo',1),
	(2,2,'2323','Chevrolet','Aveo','SKV-69-64','Blanco',1),
	(3,3,'6763','Nissan','Versa','RYT-53-02','Gris',1),
	(4,8,'1234','Ford','Fiesta','SRS-33-81','Rojo',1);

/*!40000 ALTER TABLE `Taxi` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Taxista
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Taxista`;

CREATE TABLE `Taxista` (
  `id_taxista` int(11) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  KEY `id_taxista` (`id_taxista`),
  CONSTRAINT `taxista_ibfk_1` FOREIGN KEY (`id_taxista`) REFERENCES `Persona` (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Taxista` WRITE;
/*!40000 ALTER TABLE `Taxista` DISABLE KEYS */;

INSERT INTO `Taxista` (`id_taxista`, `activo`)
VALUES
	(1,1),
	(2,1),
	(3,1),
	(8,1);

/*!40000 ALTER TABLE `Taxista` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Viaje
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Viaje`;

CREATE TABLE `Viaje` (
  `Id_viaje` int(11) NOT NULL,
  `Id_cliente` int(11) DEFAULT NULL,
  `Id_taxi` int(11) DEFAULT NULL,
  `FechaYHora` datetime DEFAULT NULL,
  `Origen` varchar(100) DEFAULT NULL,
  `Destino` varchar(100) DEFAULT NULL,
  `Costo` double DEFAULT NULL,
  `Estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_viaje`),
  KEY `Id_cliente` (`Id_cliente`),
  KEY `Id_taxi` (`Id_taxi`),
  CONSTRAINT `viaje_ibfk_1` FOREIGN KEY (`Id_cliente`) REFERENCES `Cliente` (`Id_cliente`),
  CONSTRAINT `viaje_ibfk_2` FOREIGN KEY (`Id_taxi`) REFERENCES `Taxi` (`Id_taxi`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Viaje` WRITE;
/*!40000 ALTER TABLE `Viaje` DISABLE KEYS */;

INSERT INTO `Viaje` (`Id_viaje`, `Id_cliente`, `Id_taxi`, `FechaYHora`, `Origen`, `Destino`, `Costo`, `Estatus`)
VALUES
	(1,4,1,'2017-10-25 08:36:00','Nuevo Sur','ITESM',30.14,2),
	(2,5,2,'2017-12-28 16:30:00','ITESM','Fundidora',70.33,2),
	(3,6,3,'2018-03-24 11:21:00','Aeropuerto Mariano Escobedo','Los Colibris #456',250.56,3),
	(4,6,1,'2018-08-02 18:49:00','Los Colibris #456','Palacio de Hierro',100.21,0),
	(5,5,2,'2018-08-02 18:49:00','Esfera Mty','La Mancha #843',60.32,1),
	(6,10,1,'2018-08-02 18:49:00','Ciclope 905','Nuevo Sur',46.12,1),
	(7,10,2,'2018-09-02 18:49:00','Nilo 323','ITESM',126,2),
	(8,10,2,'2018-10-02 18:49:00','Granco 512','Maya 654',315,2),
	(9,10,1,'2018-11-12 18:49:00','Francia 142','Orchata 22',69.69,0),
	(10,10,4,'2018-11-12 18:49:00','Leopoldo 23','Fransinatra 423',491,0);

/*!40000 ALTER TABLE `Viaje` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
