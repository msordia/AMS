-- Cliente
-- Ver historial de Viaje del cliente x
Select *
FROM Viaje
WHERE Id_cliente = 4;

-- Filtrar historial de Viaje por fecha x del cliente y
SELECT * 
FROM Viaje
WHERE fecha = x AND id_cliente = y;

-- Filtrar historial de Viaje por rango de fecha x, y del cliente z
SELECT * 
FROM Viaje
WHERE fecha <= x AND fecha y >= y id_cliente = z;

-- Filtrar historial de Viaje por pago del cliente y
SELECT * 
FROM Viaje
WHERE pago = x AND id_cliente = y;

-- Ver informacióno de taxista a recoger
SELECT nombre, sexo, telefono, folio, marca, modelo, placas, color
FROM Taxi
WHERE id_taxi = x;

	-- Administrador
-- Listar clientes de TaxiUnicos
SELECT id_cliente, nombre 
FROM Cliente

-- Ver información completa de cliente x
SELECT * 
FROM Cliente
WHERE id_cliente = x;

-- Listar Viaje de cliente x
SELECT * 
FROM Viaje
WHERE id_cliente = x;

-- Listar a todos los taxistas
SELECT id_taxi, nombre 
FROM Taxi

-- Listar taxis disponibles
SELECT id_taxi, nombre 
FROM Taxi
WHERE disponible = TRUE;

-- Ver información completa de taxi x
SELECT * 
FROM Taxi
WHERE id_taxi = x;

-- Ver retroalimentación general de taxi x

SELECT r.Respuesta, p.Pregunta, e.Fecha as Fecha
		FROM Respuestas r, Preguntas p, Encuesta e, Viaje v
		WHERE r.Id_pregunta = p.Id_pregunta AND
r.Id_enc = e.Id_enc AND
e.Id_viaje = v.Id_viaje AND v.Id_taxi = x

-- Listar Viaje sin taxistas asignados
SELECT * 
FROM Viaje
WHERE id_taxi = NULL;

-- Listar Viaje de clientes esperando taxi
SELECT * 
FROM Viaje
WHERE estatus LIKE ‘Espera’;

-- Listar Viaje en progresos
SELECT * 
FROM Viaje
WHERE estatus LIKE ‘En camino’;

-- Listar Viaje cancelados
SELECT * 
FROM Viaje
WHERE estatus LIKE ‘Cancelado%’;

-- Listar todos los Viaje del taxi x
SELECT * 
FROM Viaje
WHERE id_taxi = x


	-- Taxi
-- Ver retroalimentación de encuestas

		SELECT r.Respuesta, p.Pregunta, e.Fecha as Fecha
		FROM Respuestas r, Preguntas p, Encuesta e, Viaje v
		WHERE r.Id_pregunta = p.Id_pregunta AND
r.Id_enc = e.Id_enc AND
e.Id_viaje = v.Id_viaje AND v.Id_taxi = x

-- Ver información de viaje actual x
Select *
FROM Viaje
WHERE id_viaje = x;

-- Ver historial de Viaje del taxi x
Select *
FROM Viaje
WHERE id_taxi = x;

-- Filtrar historial de Viaje por fecha x del taxi y
SELECT * 
FROM Viaje
WHERE fecha = x AND id_taxi = y;

-- Filtrar historial de Viaje por rango de fecha x, y del taxi z
SELECT * 
FROM Viaje
WHERE fecha <= x AND fecha y >= y id_taxi = z;

-- Filtrar historial de Viaje por pago del taxi y
SELECT * 
FROM Viaje
WHERE pago = x AND id_taxi = y;

-- Ver información del cliente a recoger
SELECT nombre, sexo, telefono
FROM Cliente
WHERE cliente = x;
