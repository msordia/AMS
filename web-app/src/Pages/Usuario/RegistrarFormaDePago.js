import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageHeader from '../../components/PageHeader';

import './RegistrarUsuario.css';

class RegistrarFormaDePago extends Component {

	constructor(props) {
		super(props);
		this.state = {
			NumeroTarjeta: '',
			NombreTarjeta: '',
			CodigoSeguridad: ''
		}
	}

	render(){
			return(
				<div>
					<PageHeader Description="Registrar Forma de Pago" />
					<div>
		     			<div className="ActualizarPaper">
			     			<Paper className="ActualizarPaperInterno">
			     				<Typography variant="h5" component="h3" color="primary">
										Ingresar Datos
								</Typography>
								<div className="InnerPaperDivider">
										<Divider />
										<Divider />
								</div>
								<TextField
					                id="NombreTarjeta"
					                label="Nombre en la Tarjeta"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({ NombreTarjeta: input.target.value })}}
					                fullWidth
					                value={this.state.NombreTarjeta}
					                color="primary"
					            />
					             <TextField
					                id="NumeroTarjeta"
					                label="Numero de la Tarjeta"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({ NumeroTarjeta: input.target.value })}}
					                fullWidth
					                value={this.state.NumeroTarjeta}
					                color="primary"
					            />
					            <TextField
					                id="CodigoSeguridad"
					                label="Codigo de Seguridad"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({CodigoSeguridad: input.target.value })}}
					                fullWidth
					                value={this.state.CodigoSeguridad}
					                color="primary"
					            />
							    <div className="ActualizarBottones">
								    <Button variant="contained" color="primary" onClick={this.registrar}>
							              Registrar
							            </Button>
							             <Button variant="contained" color="primary" onClick={() => {this.props.history.goBack()}}>
							              Regresar
							            </Button>
						        </div>
		        			</Paper>
	        			</div>
	        		</div>
				</div>
			);
		}

}

export default withRouter(RegistrarFormaDePago);