import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import './LeftNavUsuario.css';

class LeftNavTaxista extends Component {

	toPerfil = () => {
		this.props.history.push('/detallesUsuario');
	}

	toHistorial = () => {
		this.props.history.push('/historialUsuario');
	}

	toViajeActual = () => {
		this.props.history.push('/viajeActualUsuario');
	}

	logout = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<div className="LeftNavTax">
					 <Button variant="contained" color="primary" onClick={this.toPerfil} className="Login_Button">
		              Perfil
		            </Button>
		             <Button variant="contained" color="primary" onClick={this.toHistorial} className="Login_Button">
		              Historial de viajes
		            </Button>
		             <Button variant="contained" color="primary" onClick={this.toViajeActual} className="Login_Button">
		              Viaje actual
		            </Button>
		            <Button variant="contained" color="primary" onClick={this.logout} className="Login_Button">
		              Log out
		            </Button>
				</div>
			</div>
			);
	}
}

export default withRouter(LeftNavTaxista);