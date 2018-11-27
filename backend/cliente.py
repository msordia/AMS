from flaskext.mysql import MySQL
import datetime
import time

def historialViajesCliente(idCliente, cursor):
	query = "SELECT p.nombre, v.Id_viaje, v.Origen, v.Destino, v.FechaYHora, v.Costo FROM Viaje v JOIN Taxi t ON v.Id_taxi = t.Id_taxi JOIN Persona p ON t.Id_taxista = p.id_persona  WHERE v.Id_cliente = " + idCliente + ";"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return '[]';
	resultString = '[';
	while result != None:
		resultString += '{ "nombre": "' + result[0] + '", "id_viaje": "' + str(result[1]) + '", "origen": "' + result[2] + '", "destino": "' + result[3] + '", "fecha": "' + str(result[4]) + '", "costo": "' + str(result[5]) +'"},'
		result = cursor.fetchone()
	resultString = resultString[:-1] + ']'
	return resultString

def viajeActualCliente(idCliente, cursor):
	query = "SELECT p.nombre, v.Id_viaje, v.Origen, v.Destino, v.FechaYHora, v.Costo, t.Marca, t.Modelo, t.Placas, t.Color, v.Estatus FROM Viaje v JOIN Taxi t ON v.Id_taxi = t.Id_taxi JOIN Persona p ON t.Id_taxista = p.id_persona  WHERE v.Id_cliente = " + idCliente + " AND (v.Estatus = 0 OR v.Estatus = 1);"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';
	if result != None:
		resultString = '{ "nombre": "' + result[0] + '", "id_viaje": "' + str(result[1]) + '", "origen": "' + result[2] + '", "destino": "' + result[3] + '", "fecha": "' + str(result[4]) + '", "costo": "' + str(result[5]) + '", "marca": "' + str(result[6]) + '", "modelo": "' + str(result[7]) + '", "placas": "' + str(result[8]) + '", "color": "' + str(result[9]) + '" , "estatus": "' + str(result[10]) + '" }'
		return resultString

def agregarCliente(nombre, nacimiento, sexo, correo, tel, pw, pago, cursor):
	query1 = "SELECT MAX(Id_cliente) FROM Cliente";
	cursor.execute(query1);
	idCliente = cursor.fetchone();
	idClienteInt = idCliente[0]+1

	query = "INSERT INTO Persona (" + str(idClienteInt) + ",\"" + nombre + "\",\"" + nacimiento + "\",\"" + sexo + "\",\"" + tel + "\",\"" + correo + "\", \"" + pw + "\" );"
	cursor.execute(query);
	result = cursor.fetchone();

	query3 = "SELECT MAX(Id_forma) FROM FormaDePago";
	cursor.execute(query3);
	idForma = cursor.fetchone();
	idFormaInt = idForma[0]+1

	query4 = "INSERT INTO FormaDePago (" + str(idFormaInt) + ", \"" + pago + "\");"
	cursor.execute(query4);
	result = cursor.fetchone();
	return "Done"

	query2 = "INSERT INTO Cliente (" + str(idClienteInt) + ", " + str(idFormaInt) + ");"
	cursor.execute(query2);
	result = cursor.fetchone();
	return "Done"

def actualizarDatos(idCliente, nombreN, sexoN, correoN, telefonoN, cursor):
	query = "UPDATE Persona SET nombre = \"" + nombreN + "\", sexo = \"" + sexoN + "\", correo = \"" + correoN + "\", telefono = \"" + telefonoN + "\" WHERE id_persona = " + str(idCliente) + ";"
	cursor.execute(query)
	return "Done"