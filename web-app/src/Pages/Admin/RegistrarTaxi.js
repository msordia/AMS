import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageHeader from '../../components/PageHeader';

import './RegistrarTaxista.css';

class RegistrarTaxi extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Nombre: '',
			FechaDeNacimiento: '0000-00-00',
			Sexo: '',
			Correo: '',
		}
	}

	agregar = () => {
		this.props.history.push('/agregarTaxi');
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
					                id="Marca"
					                label="Marca"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({ Marca: input.target.value })}}
					                fullWidth
					                value={this.state.Marca}
					                color="primary"
					            />
					             <TextField
					                 id="Modelo"
									 label="Modelo"
									 className="TextFieldS"
									 margin="dense"
									 variant="outlined"
									 onChange={(input) => {this.setState({Modelo: input.target.value })}}
									 fullWidth
									 value={this.state.Modelo}
									 color="primary"
					            />
					            <TextField
					                id="Placas"
					                label="Placas"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({Placas: input.target.value })}}
					                fullWidth
					                value={this.state.Placas}
					                color="primary"
					            />
					            <TextField
					                id="Color"
					                label="Color"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({Color: input.target.value })}}
					                fullWidth
					                value={this.state.Color}
					                color="primary"
					            />

								<TextField
					                id="Taxista"
					                label="Taxista"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({Taxista: input.target.value })}}
					                fullWidth
					                value={this.state.Taxista}
					                Taxista="primary"
					            />
				
							    <div className="ActualizarBottones">
								    <Button variant="contained" color="primary" onClick={this.agregar}>
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

export default withRouter(RegistrarTaxi);