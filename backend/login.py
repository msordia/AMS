from flaskext.mysql import MySQL

def tryLogin(username, password, cursor):
	query = "SELECT * FROM Persona WHERE correo = \"" + username + "\" AND contrasena = \"" + password + "\";"
	cursor.execute(query);
	result = cursor.fetchone();
	if (result != None):
		query1 = "SELECT t.id_taxista, ta.Marca, ta.Modelo, ta.Placas, ta.Color FROM Taxista t JOIN Taxi ta ON t.id_taxista = ta.id_taxista WHERE t.id_taxista =  " + str(result[0]) + ";"
		cursor.execute(query1);
		resultTaxi = cursor.fetchone();
		if (resultTaxi != None):
			resultJson = '{ "id":"' + str(resultTaxi[0]) + '", "username":"' + username + '", "nombre": "' + str(result[1]) + '", "fechaDeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + result[4] + '", "tipo": "Taxista", "marca": "' + resultTaxi[1] + '", "modelo": "' + resultTaxi[2] + '", "placas": "' + resultTaxi[3] + '", "color": "' + resultTaxi[4] + '" }'
			return resultJson

		query2 = "SELECT * FROM Cliente WHERE Id_cliente =  " + str(result[0]) + ";"
		cursor.execute(query2);
		resultCliente = cursor.fetchone();
		if (resultCliente != None):
			resultJson = '{ "id":"' + str(resultCliente[0]) + '", "username":"' + username + '", "nombre": "' + str(result[1]) + '", "fechaDeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + result[4] + '" , "id_forma": "' + str(resultCliente[1]) + '", "tipo": "Cliente" }'
			return resultJson

		query3 = "SELECT * FROM Administrador WHERE Id_admin =  " + str(result[0]) + ";"
		cursor.execute(query3);
		resultAdmin = cursor.fetchone();
		if (resultAdmin != None):
			resultJson = '{ "id":"' + str(resultAdmin[0]) + '", "username":"' + username + '", "nombre": "' + str(result[1]) + '", "fechadeNacimiento": "' + str(result[2]) + '", "sexo": "' + result[3] + '", "telefono": "' + result[4] + '", "tipo": "Administrador" }'
			return resultJson
			
	return "Invalid Login";