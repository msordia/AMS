import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageHeader from '../../components/PageHeader';

import './RegistrarUsuario.css';

class RegistrarUsuario extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Nombre: '',
			FechaDeNacimiento: '0000-00-00',
			Sexo: '',
			Correo: '',
		}
	}

	render(){
			return(
				<div>
					<PageHeader Description="Registrarse" />
					<div>
		     			<div className="ActualizarPaper">
			     			<Paper className="ActualizarPaperInterno">
			     				<Typography variant="h5" component="h3" color="primary">
										Ingrese su información
								</Typography>
								<div className="InnerPaperDivider">
										<Divider />
										<Divider />
								</div>
								<TextField
					                id="Nombre"
					                label="Nombre"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({ Nombre: input.target.value })}}
					                fullWidth
					                value={this.state.Nombre}
					                color="primary"
					            />
					             <TextField
					                id="FechaDeNacimiento"
					                label="Fecha de Nacimiento"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                type="date"
					                onChange={(input) => {this.setState({ FechaDeNacimiento: input.target.value })}}
					                fullWidth
					                value={this.state.FechaDeNacimiento}
					                color="primary"
					            />
					            <TextField
					                id="Sexo"
					                label="Sexo"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({Sexo: input.target.value })}}
					                fullWidth
					                value={this.state.Sexo}
					                color="primary"
					            />
					            <TextField
					                id="Correo"
					                label="Correo"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({Correo: input.target.value })}}
					                fullWidth
					                value={this.state.Correo}
					                color="primary"
					            />
							    <div className="ActualizarBottones">
								    <Button variant="contained" color="primary" onClick={this.crearCita}>
							              Registrarse
							            </Button>
							             <Button variant="contained" color="primary" onClick={() => {this.props.history.goBack()}}>
							              Cancelar
							            </Button>
						        </div>
		        			</Paper>
	        			</div>
	        		</div>
				</div>
			);
		}

}

export default withRouter(RegistrarUsuario);