from flaskext.mysql import MySQL
import datetime
import time

def taxiList(cursor):
	query = "SELECT * FROM Persona p JOIN Taxista t ON p.id_persona = t.id_taxista;"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';
	if result != None:
		resultJson = '{ "id":"' + str(result[0]) + '", "nombre":"' + result[1] + '", "fechaDeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + str(result[4]) + '", "correo": "' + result[5] + '" + }'

def clienteList(cursor):
	query = "SELECT * FROM Persona p JOIN Cliente t ON p.id_persona = t.Id_cliente;"
	cursor.execute(query);
	result = cursor.fetchone();
	if result == None:
		return 'none';
	if result != None:
		resultJson = '{ "id":"' + str(result[0]) + '", "nombre":"' + result[1] + '", "fechaDeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + str(result[4]) + '", "correo": "' + result[5] + '" + }'

def crearViaje(idCliente, origen, destino, fecha, cursor):
	query = "UPDATE Persona SET nombre = \"" + nombreN + "\", sexo = \"" + sexoN + "\", correo = \"" + correoN + "\", telefono = \"" + telefonoN + "\" WHERE id_persona = " + idCliente + ";"
	cursor.execute(query)
	return "Done"