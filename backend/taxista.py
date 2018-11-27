from flaskext.mysql import MySQL
import datetime
import time

def historialViajesTaxista(idTaxi, cursor):
	query = "SELECT p.nombre, v.Id_viaje, v.Origen, v.Destino, v.FechaYHora, v.Costo FROM Viaje v JOIN Taxi t ON v.Id_taxi = t.Id_taxi JOIN Persona p ON v.Id_cliente = p.id_persona  WHERE t.id_taxista = " + str(idTaxi) + ";"
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

def viajeActualTaxista(idTaxi, cursor):
	query = "SELECT p.nombre, v.Id_viaje, v.Origen, v.Destino, v.FechaYHora, v.Costo, t.Marca, t.Modelo, t.Placas, t.Color, v.Estatus FROM Viaje v JOIN Taxi t ON v.Id_taxi = t.Id_taxi JOIN Persona p ON v.Id_cliente = p.id_persona  WHERE t.id_taxista = " + str(idTaxi)  + " AND (v.Estatus = 0 OR v.Estatus = 1);"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';
	if result != None:
		resultString = '{ "nombre": "' + result[0] + '", "id_viaje": "' + str(result[1]) + '", "origen": "' + result[2] + '", "destino": "' + result[3] + '", "fecha": "' + str(result[4]) + '", "costo": "' + str(result[5]) + '", "marca": "' + str(result[6]) + '", "modelo": "' + str(result[7]) + '", "placas": "' + str(result[8]) + '", "color": "' + str(result[9]) + '" , "estatus": "' + str(result[10]) + '" }'
		return resultString

def agregarTaxista(nombre, nacimiento, sexo, correo, tel, pw, cursor):
	query1 = "SELECT MAX(id_taxista) FROM Taxista";
	cursor.execute(query1);
	idTaxista = cursor.fetchone();
	idTaxistaInt = idTaxista[0]+1

	query = "INSERT INTO Persona (" + str(idTaxistaInt) + "," + nombre + "," + nacimiento + "," + sexo + "," + tel + "," + correo + " , " + pw + " );"
	cursor.execute(query);
	result = cursor.fetchone();

	query2 = "INSERT INTO Taxista (" + str(idTaxistaInt) + ", 1  );"
	cursor.execute(query2);
	result = cursor.fetchone();
	return "Done"
