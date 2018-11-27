from flask import Flask, request
from flask_cors import CORS
from flaskext.mysql import MySQL
import json
from login import tryLogin
from cliente import historialViajesCliente, viajeActualCliente, actualizarDatos, agregarCliente
from taxista import historialViajesTaxista, viajeActualTaxista, agregarTaxista
from administrador import taxiList, clienteList, eliminarTaxista, crearViaje, cancelarViaje
app = Flask(__name__)
mysql = MySQL(app)
CORS(app)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'TaxiUnico'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
mysql.init_app(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/login', methods = ['GET'])
def login():
	username = request.args.get('username', None)
	password = request.args.get('password', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = tryLogin(username, password, cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/historialCliente', methods = ['GET'])
def historialCliente():
	idCliente = request.args.get('idCliente', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = historialViajesCliente(idCliente, cursor)
	cursor.close()
	conn.close()
	return result
	
@app.route('/actualCliente', methods = ['GET'])
def actualCliente():
	idCliente = request.args.get('idCliente', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = viajeActualCliente(idCliente, cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/historialTaxista', methods = ['GET'])
def historialTaxista():
	idTaxista = request.args.get('idTaxista', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = historialViajesTaxista(idTaxista, cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/actualTaxista', methods = ['GET'])
def actualTaxista ():
	idTaxista = request.args.get('idTaxista', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = viajeActualTaxista(idTaxista, cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/taxiList', methods = ['GET'])
def ListaTaxis ():
	conn = mysql.connect()
	cursor = conn.cursor()
	result = taxiList(cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/listaClientes', methods = ['GET'])
def ListaClientes ():
	conn = mysql.connect()
	cursor = conn.cursor()
	result = clienteList(cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/eliminarTaxista', methods = ['GET'])
def delTaxista ():
	idTaxista = request.args.get('idTaxista', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = eliminarTaxista(idTaxista, cursor)
	cursor.close()
	conn.close()
	return result

@app.route('/cancelarViaje', methods = ['POST'])
def cancelTrip ():
	DataJson = json.loads(request.data)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = cancelarViaje(DataJson["idViaje"], cursor)
	if result == "Done":
		conn.commit()
	cursor.close()
	conn.close()
	return result

@app.route('/actualizarPerfil', methods = ['POST'])
def actualizarPerfil():
	DataJson = json.loads(request.data)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = actualizarDatos(DataJson["id"], DataJson["nombre"], DataJson["sexo"], DataJson["correo"], DataJson["telefono"],cursor)
	if result == "Done":
		conn.commit()
	cursor.close()
	conn.close()
	return result

@app.route('/agregarTaxista', methods = ['POST'])
def addTaxista():
	DataJson = json.loads(request.data)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = agregarTaxista(DataJson["nombre"], DataJson["fecha_de_nacimiento"], DataJson["sexo"], DataJson["correo"], DataJson["telefono"], DataJson["pw"], cursor)
	if result == "Done":
		conn.commit()
	cursor.close()
	conn.close()
	return result

@app.route('/agregarCliente', methods = ['POST'])
def addCliente():
	DataJson = json.loads(request.data)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = agregarCliente( DataJson["nombre"], DataJson["fecha_de_nacimiento"], DataJson["sexo"], DataJson["correo"], DataJson["telefono"], DataJson["pw"], DataJson["pago"], cursor)
	if result == "Done":
		conn.commit()
	cursor.close()
	conn.close()
	return result

@app.route('/crearViaje', methods = ['POST'])
def newTrip():
	DataJson = json.loads(request.data)
	conn = mysql.connect()
	cursor = conn.cursor()
	result = crearViaje(DataJson["id"], DataJson["origen"], DataJson["destino"], DataJson["fecha"],cursor)
	if result == "Done":
		conn.commit()
	cursor.close()
	conn.close()
	return result

