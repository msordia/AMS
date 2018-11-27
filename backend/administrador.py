from flaskext.mysql import MySQL
import datetime
import time

def taxiList(cursor):
	query = "SELECT * FROM Persona p JOIN Taxista t ON p.id_persona = t.id_taxista;"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';
	resultString = '['
	while result != None:
		resultString += '{ "id":"' + str(result[0]) + '", "nombre":"' + result[1] + '", "fechaDeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + str(result[4]) + '", "correo": "' + result[5] + '"},'
		result = cursor.fetchone()
	resultString = resultString[:-1] + ']'
	return resultString


def clienteList(cursor):
	query = "SELECT * FROM Persona p JOIN Cliente t ON p.id_persona = t.Id_cliente;"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';
	resultJson = '['
	while result != None:
		resultJson += '{ "id":"' + str(result[0]) + '", "nombre":"' + result[1] + '", "fechaDeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + str(result[4]) + '", "correo": "' + result[5] + '"},'
		result = cursor.fetchone()
	resultJson = resultJson[:-1] + ']'
	return resultJson

def crearViaje(idCliente, origen, destino, fecha, cursor):
	query = "SELECT ta.Id_taxi FROM Viaje v JOIN Taxi ta ON v.Id_taxi = ta.Id_taxi JOIN Taxista t ON t.id_taxista = ta.id_taxista WHERE t.activo = 1 AND v.Estatus > 1";
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';

	query1 = "SELECT MAX (Id_viaje) FROM Viaje";
	cursor.execute(query1);
	idViaje = cursor.fetchone();
	idViajeInt = idViaje[0]+1
	costo = "SELECT FLOOR(RAND()*(800-40+1))+40";

	query2 = "INSERT INTO Viaje VALUES(" + str(idViajeInt) + ", " + str(idCliente) + ", \"" + fecha + "\", \"" + origen + "\", , \"" + destino + "\", "  + str(costo) + ", 0);"
	cursor.execute(query2)
	return "Done"

def eliminarTaxista(idTaxista, cursor):
	query = "UPDATE Taxista SET id_taxista = \"" + idTaxista + "\", activo = 0 WHERE id_taxista = " + idTaxista + ";"
	cursor.execute(query)
	return "Done"

def cancelarViaje(idViaje, cursor):
	query = "UPDATE Viaje SET Estatus = 2 WHERE id_taxista = " + idTaxista + ";"
	cursor.execute(query)
	return "Done"