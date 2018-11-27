import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import logo from '../../assets/transpais_logo.png';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import './AdminTaxis.css';
import PageHeader from '../../components/PageHeader'
import { connect } from 'react-redux';
import axios from 'axios'

const url = 'http://127.0.0.1:5000'

function createData(id, nombre, correo, fechaDeNacimiento, telefono, sexo) {
  return { id, nombre, correo, fechaDeNacimiento, telefono, sexo};
}

class VerUsuario extends Component {

	constructor(props) {
    	super(props);
    	this.backAdmin = this.backAdmin.bind(this);
    	this.state = {
    		data: []
    	}
  	}

  	backAdmin(event) {
  		this.props.history.goBack();
  	}

  	componentDidMount() {
  		axios.get(`${url}/listaClientes`)
  		.then((response) => {
  			const data = response.data;
  			const newData = data.map(cliente => {
  				return(
  					createData(cliente.id, cliente.nombre, cliente.correo, cliente.fechaDeNacimiento, cliente.telefono, cliente.sexo)
  					)
  			})
  			this.setState({
  				data: newData
  			})
  		})
  	}

	render() {
			return (
				<div>
					<PageHeader Description="Administrar Usuarios" />
					<div className="Taxista-body">	
						<Card className='PaperStyle'>
					      <Table>
					        <TableHead>
					          <TableRow>
					            <TableCell>ID</TableCell>
					            <TableCell numeric>Nombre</TableCell>
					            <TableCell numeric>Correo</TableCell>
					            <TableCell>Ver Detalles</TableCell>
					          </TableRow>
					        </TableHead>
					        <TableBody>
					          {this.state.data.map(row => {
					            return (
					              <TableRow key={row.id}>
					              <TableCell numeric>{row.id}</TableCell>
					                <TableCell component="th" scope="row">
					                  {row.nombre}
					                </TableCell>
					                <TableCell numeric>{row.correo}</TableCell>
					                <TableCell> 
					                	<Button variant="contained" color="primary" onClick={this.backAdmin}>
					                		Ir
					                	</Button>
					                </TableCell>
					              </TableRow>
					            );
					          })}
					        </TableBody>
					      </Table>
					    </Card>
					    <div className="GoBackB">
							<Button variant="contained" color="primary" onClick={this.backAdmin} className="GoBackB">
								Go Back
							</Button>
						</div>
					</div>
				</div>
			);
		}

}

const mapStateToProps = state => {
  return {
    loggedIn: state.userReducer.loggedIn,
    ID: state.userReducer.ID,
    correo: state.userReducer.correo,
    Nombre: state.userReducer.Nombre,
    FechaNacimiento: state.userReducer.FechaNacimiento,
    Sexo: state.userReducer.Sexo,
    Telefono: state.userReducer.Telefono
  };
};

const mapDispatchtoProps = dispatch => {
  return {
      tryLogIn: (ID, correo, Nombre, FechaNacimiento, Sexo, Telefono) => dispatch({type: 'LogIn', payload: {loggedIn: true, ID, correo, Nombre, FechaNacimiento, Sexo, Telefono}})
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(VerUsuario));