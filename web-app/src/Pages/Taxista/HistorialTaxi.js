import React, { Component } from 'react';
import axios from 'axios'
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
import Grid from '@material-ui/core/Grid';
import PageHeader from '../../components/PageHeader'
import LeftNavTaxista from '../../components/LeftNavTaxista';
import { connect } from 'react-redux';

import './HistorialTaxi.css'
const url = 'http://127.0.0.1:5000'

function createData(id, nombreCliente, fecha, origen, destino, costo) {
  return { id, nombreCliente, fecha, origen, destino, costo};
}

class HistorialTaxi extends Component {

	constructor(props) {
    	super(props);
    	this.backAdmin = this.backAdmin.bind(this);
    	this.state = {
    		data: []
    	}
  	}

  	componentDidMount() {
  		axios.get(`${url}/historialTaxista`, {
  			params: {
  				idTaxista: this.props.ID
  			}})
  		.then((response) => {
  			const resJson = response.data;
  			const viajesData = resJson.map(viaje => {
  				return (
  				createData(viaje.id_viaje, viaje.nombre, viaje.fecha, viaje.origen, viaje.destino, viaje.costo)
  				)
  			})
  			this.setState({
  				data: viajesData
  			})
  		})
  	}

  	backAdmin(event) {
  		this.props.history.goBack();
  	}

	render() {
			return (
				<div>
					<PageHeader Description="Historial de Viajes" />
					<Grid container>
						<Grid item xs={1}>
							<LeftNavTaxista />
						</Grid>
						<Grid item xs={11}>
						<div className="HistorialBody">	
							<Card className='PaperStyle'>
						      <Table>
						        <TableHead>
						          <TableRow>
						            <TableCell>ID</TableCell>
						            <TableCell numeric>Nombre Cliente</TableCell>
						            <TableCell>Fecha</TableCell>
						            <TableCell>Origen</TableCell>
						            <TableCell>Destino</TableCell>
						            <TableCell>Costo</TableCell>
						          </TableRow>
						        </TableHead>
						        <TableBody>
						          {this.state.data.map(row => {
						            return (
						              <TableRow key={row.id}>
						              <TableCell numeric>{row.id}</TableCell>
						              <TableCell numeric>{row.nombreCliente}</TableCell>
						              <TableCell >{row.fecha}</TableCell>
						              <TableCell >{row.origen}</TableCell>
						              <TableCell >{row.destino}</TableCell>
						              <TableCell >{row.costo}</TableCell>
						              </TableRow>
						            );
						          })}
						        </TableBody>
						      </Table>
						    </Card>
						</div>
						<div className="GoBackB">
								<Button variant="contained" color="primary" onClick={this.backAdmin} className="GoBackB">
									Go Back
								</Button>
							</div>
						</Grid>
					</Grid>
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


export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(HistorialTaxi));