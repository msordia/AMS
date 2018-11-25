from flask import Flask, request
from flask_cors import CORS
from flaskext.mysql import MySQL
app = Flask(__name__)
mysql = MySQL(app)
CORS(app)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'TaxiUnico'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
mysql.init_app(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/login', methods=['GET', 'POST'])
def checkLogin():
	username = request.args.get('username', None)
	password = request.args.get('password', None)
	return '{ "username": "%s", "password": "meh" }' % username

@app.route('/getClientes')
def getClientes():
	#Add the get from database here
	return 'todos los clientes'
