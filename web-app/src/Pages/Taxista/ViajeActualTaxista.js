import React, { Component } from 'react';
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PageHeader from '../../components/PageHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import LeftNavTaxista from '../../components/LeftNavTaxista';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import './DetallesTaxi.css';
const url = 'http://127.0.0.1:5000'

class ViajeActualTaxista extends Component {

	constructor(props){
		super(props);
		this.state = {
			viajeActual: false,
			nombreCliente: '',
			origen: '',
			destino: '',
			costo: -1,
			fecha: '2019-01-01',
			idViaje: -1
		}
	}
 
	componentDidMount() {
		axios.get(`${url}/actualTaxista`, {
			params: {
				idTaxista: this.props.ID
			}
		})
		.then((response) => {
			const resJson = response.data;
			if(resJson == 'none'){
				console.log("No hay viaje");
			}
			else {
				this.setState({
					nombreCliente: resJson.nombre,
					origen: resJson.origen,
					destino: resJson.destino,
					costo: resJson.costo,
					fecha: resJson.fecha,
					idViaje: resJson.id_viaje,
					viajeActual: true
				})
			}
		})
	}


	renderViajeActual = () => {
		if(this.state.viajeActual == false) {
			return(
					<div className="PreMainPaper">
					<Paper className="InnerPaper">
						<Typography variant="h5" component="h3">
							No esta en un viaje actualmente
						</Typography>
					</Paper>
					</div>
				);
		}
		else {
			return(
				<div>
					<div className="PreMainPaper">
							<Paper>
								<div className="InnerPaperPadd">
									<Typography variant="h4" component="h3" color="primary">
										Información de su viaje
									</Typography>
									<div className="InnerPaperDivider">
										<Divider />
										<Divider />
									</div>
									<Typography variant="h5" component="h3">
										Nombre del Cliente: {this.state.nombreCliente}
									</Typography>
									<Typography variant="h5" component="h3">
										Origen: {this.state.origen}
									</Typography>
									<Typography variant="h5" component="h3">
										Destino: {this.state.destino}
									</Typography>
									<Typography variant="h5" component="h3">
										Costo: $ {this.state.costo}
									</Typography>
									<Typography variant="h5" component="h3">
										Fecha: {this.state.fecha}
									</Typography>
								</div>
							</Paper>
						</div>
						<div className="ButtonsDetalles">
							<Button variant="contained" color="primary" onClick={this.actualizarPerfil} className="Login_Button">
			              		Cancelar Viaje
			            	</Button>
		            	</div>
		           </div>
				);
		}

	}

	render() {
		return(
			<div>
				<PageHeader Description="Viaje Actual"/>
				<Grid container>
					<Grid item xs={1}>
						<LeftNavTaxista />
					</Grid>
					<Grid item xs={11}>
						{this.renderViajeActual()}
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

export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(ViajeActualTaxista));