DROP DATABASE IF EXISTS TaxiUnico;
CREATE DATABASE TaxiUnico;
USE TaxiUnico;

CREATE TABLE Persona (
id_persona INT,
nombre VARCHAR(100),
fechaNacimiento DATE,
sexo VARCHAR(1),
telefono VARCHAR(10),
correo VARCHAR(100),
contrasena VARCHAR(100),
PRIMARY KEY(id_persona)
);

CREATE TABLE FormaDePago (
Id_forma INT,
NumeroTarjeta VARCHAR(12),
PRIMARY KEY(Id_forma)
);

CREATE TABLE Taxista (
id_taxista INT,
FOREIGN KEY (id_taxista) REFERENCES Persona (Id_persona)
);

CREATE TABLE Taxi (
Id_taxi INT,
id_taxista INT,
Folio VARCHAR(100),
Marca VARCHAR(100),
Modelo VARCHAR(100),
Placas VARCHAR(100),
Color VARCHAR(100),
Disponible BOOLEAN,
PRIMARY KEY (id_taxi),
FOREIGN KEY (Id_taxista) REFERENCES Taxista (id_taxista)
);

CREATE TABLE Cliente (
Id_cliente INT,
FOREIGN KEY (Id_cliente) REFERENCES Persona (Id_persona),
Id_forma INT,
FOREIGN KEY (Id_forma) REFERENCES FormaDePago (Id_forma),
PRIMARY KEY (Id_cliente)
);



CREATE TABLE Administrador (
Id_admin INT,
FOREIGN KEY (Id_admin) REFERENCES Persona (Id_persona),
PRIMARY KEY (Id_admin)
);

CREATE TABLE Precios (
CostoKM FLOAT,
Fecha DATE,
PRIMARY KEY(CostoKM, Fecha)
);

CREATE TABLE Viaje(
Id_viaje INT,
Id_cliente INT,
Id_taxi INT,
FechaYHora DATETIME,   -- '2017/08/25 08:36'
Origen VARCHAR(100),
Destino VARCHAR(100),
Costo DOUBLE,
Estatus INT,     -- 0 en espera, 1 en camino, 2 terminado, 3 cancelado
PRIMARY KEY (Id_viaje),
FOREIGN KEY (Id_cliente) REFERENCES Cliente (Id_cliente),
FOREIGN KEY (Id_taxi) REFERENCES Taxi (Id_taxi)
);

CREATE TABLE PreguntasEnc(
Id_preguntas INT, 
Fecha DATE,
PRIMARY KEY (id_preguntas)
);

CREATE TABLE Pregunta(
Id_pregunta INT,
Id_preguntas INT,
Pregunta VARCHAR(100),
FOREIGN KEY (Id_preguntas) REFERENCES PreguntasEnc (Id_preguntas),
PRIMARY KEY (Id_pregunta)
);


CREATE TABLE Encuesta(
Id_enc INT, 
Id_viaje INT,
Id_preguntas INT,
Fecha DATE,
PRIMARY KEY (id_enc),
FOREIGN KEY (id_viaje) REFERENCES Viaje (id_viaje),
FOREIGN KEY (Id_preguntas) REFERENCES PreguntasEnc (id_preguntas)
); 

CREATE TABLE Respuesta(
Id_enc INT,
Id_pregunta INT,
Respuesta VARCHAR(100),
PRIMARY KEY (Id_enc, Id_pregunta),
FOREIGN KEY (Id_enc) REFERENCES Encuesta (Id_enc),
FOREIGN KEY (Id_pregunta) REFERENCES Pregunta (Id_pregunta)
);
