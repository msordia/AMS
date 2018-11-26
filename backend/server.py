from flask import Flask, request
from flask_cors import CORS
from flaskext.mysql import MySQL
from login import tryLogin
from cliente import historialViajesCliente, viajeActualCliente
from taxista import historialViajesTaxista, viajeActualTaxista
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
	return tryLogin(username, password, cursor)

@app.route('/historialCliente', methods = ['GET'])
def historialCliente():
	idCliente = request.args.get('idCliente', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	return historialViajesCliente(idCliente, cursor)
	
@app.route('/actualCliente', methods = ['GET'])
def actualCliente():
	idCliente = request.args.get('idCliente', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	return viajeActualCliente(idCliente, cursor)

@app.route('/historialTaxista', methods = ['GET'])
def historialTaxista():
	idTaxista = request.args.get('idTaxista', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	return historialViajesTaxista(idTaxista, cursor)

@app.route('/actualTaxista', methods = ['GET'])
def actualTaxista():
	idTaxista = request.args.get('idTaxista', None)
	conn = mysql.connect()
	cursor = conn.cursor()
	return viajeActualTaxista(idTaxista, cursor)
