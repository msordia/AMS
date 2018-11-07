INSERT INTO Persona VALUES (1, 'Juan Valdez', '1983-03-09', 'H', '8117226390', 'juan@hotmail.com', 'Taxi123');
INSERT INTO Persona VALUES (2, 'Martha Jimenez', '1980-04-09', 'M', '8119996390', 'martha@hotmail.com', 'Taxi*Go');
INSERT INTO Persona VALUES (3, 'Gerardo Martinez', '1986-10-22', 'H', '8117221234', 'gera@hotmail.com', 'Futbol43');
INSERT INTO Persona VALUES (4, 'Julieta Marcos', '1994-09-20', 'M', '8180826390', 'juls@hotmail.com', 'Jamaica839!');
INSERT INTO Persona VALUES (5, 'Julian Acosta', '1989-12-22', 'H', '8117255590', 'julian@hotmail.com', 'h7sI9');
INSERT INTO Persona VALUES (6, 'Osvaldo', '1999-02-28', 'H', '8112323490', 'osv99@hotmail.com', 'goooool321');
INSERT INTO Persona VALUES (7, 'Raquel Fuentes', '1985-05-09', 'M', '8122226390', 'raq.f@hotmail.com', 'OKls93*');


INSERT INTO FormaDePago VALUES (1, '456890123423');
INSERT INTO FormaDePago VALUES (2, '787789123423');
INSERT INTO FormaDePago VALUES (3, '456890123900');

INSERT INTO Taxista VALUES (1);
INSERT INTO Taxista VALUES (2);
INSERT INTO Taxista VALUES (3);

INSERT INTO Taxi VALUES (1, 1, '1123', 'Toyota', 'Corolla', 'SLS-98-54', 'Rojo', TRUE);
INSERT INTO Taxi VALUES (2, 2, '2323', 'Chevrolet', 'Aveo', 'SKV-69-64', 'Blanco', TRUE);
INSERT INTO Taxi VALUES (3, 3, '6763', 'Nissan', 'Versa', 'RYT-53-02', 'Gris', TRUE);

INSERT INTO Cliente VALUE(4,1);
INSERT INTO Cliente VALUE(5,2);
INSERT INTO Cliente VALUE(6,3);


INSERT INTO Administrador VALUE(7);


INSERT INTO Precios VALUE (15.60, '2017-09-12');
INSERT INTO Precios VALUE (14.60, '2018-05-03');
INSERT INTO Precios VALUE (17.30, '2018-10-12');


INSERT INTO Viaje VALUE (1, 4, 1, '2017/10/25 08:36', 'Nuevo Sur', 'ITESM', 30.14, 2);
INSERT INTO Viaje VALUE (2, 5, 2, '2017/12/28 16:30', 'ITESM', 'Fundidora', 70.33, 2);
INSERT INTO Viaje VALUE (3, 6, 3, '2018/03/24 11:21', 'Aeropuerto Mariano Escobedo', 'Los Colibris #456', 250.56, 3);
INSERT INTO Viaje VALUE (4, 6, 1, '2018/08/02 18:49', 'Los Colibris #456', 'Palacio de Hierro', 100.21, 0);
INSERT INTO Viaje VALUE (5, 5, 2, '2018/08/02 18:49', 'Esfera Mty', 'La Mancha #843', 60.32, 1);


INSERT INTO PreguntasEnc VALUE(1 ,'2017-09-11' );
INSERT INTO PreguntasEnc VALUE(2, '2018-08-01');

INSERT INTO Pregunta VALUE(1, 1, '¿Cómo le pareció el viaje?');
INSERT INTO Pregunta VALUE(2, 1, '¿Cuál fue su impresión del conductor?');
INSERT INTO Pregunta VALUE(3, 1, 'Comentarios / Sugerencias');
INSERT INTO Pregunta VALUE(4, 2, 'Comentarios del viaje');
INSERT INTO Pregunta VALUE(5, 2, 'Comentarios del conductor');
INSERT INTO Pregunta VALUE(6, 2, '¿Algún comentario?');


INSERT INTO Encuesta VALUE(1, 1, 1, '2017/10/25');
INSERT INTO Encuesta VALUE(2, 2, 1, '2017/12/28');
INSERT INTO Encuesta VALUE(3, 4, 2, '2018/08/02');

INSERT INTO Respuesta VALUE(1, 1, 'Bien');
INSERT INTO Respuesta VALUE(1, 2, 'Buena');
INSERT INTO Respuesta VALUE(1, 3, 'N/A');
INSERT INTO Respuesta VALUE(2, 1, 'Algo lento');
INSERT INTO Respuesta VALUE(2, 2, 'Bueno');
INSERT INTO Respuesta VALUE(2, 3, 'El app se traba y no marcaba ruta óptima');
INSERT INTO Respuesta VALUE(3, 4, 'Muy buena');
INSERT INTO Respuesta VALUE(3, 5, 'Super bien, muy preparado');
INSERT INTO Respuesta VALUE(3, 6, 'N/A');
