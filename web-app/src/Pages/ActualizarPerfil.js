import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageHeader from '../components/PageHeader';
import { connect } from 'react-redux';

import './ActualizarPerfil.css';
const url = 'http://127.0.0.1:5000'

class ActualizarPerfil extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Nombre: this.props.Nombre,
			Sexo: this.props.Sexo,
			Correo: this.props.correo,
			Telefono: this.props.Telefono
		}
	}

	actualizar = () => {
		axios.post(`${url}/actualizarPerfil`, {
			nombre: this.state.Nombre,
			correo: this.state.Correo,
			sexo: this.state.Sexo,
			telefono: this.state.Telefono,
			id: this.props.ID
		})
		.then((response) => {
			if(response.data == "Done"){
				this.props.actualizarPerfil(this.state.Nombre, this.state.Correo, this.state.Sexo, this.state.Telefono, this.props.ID, this.props.FechaNacimiento);
				this.props.history.goBack();
			}
		})
	}

	render(){
			return(
				<div>
					<PageHeader Description="Actualizar Perfil" />
					<div>
		     			<div className="ActualizarPaper">
			     			<Paper className="ActualizarPaperInterno">
			     				<Typography variant="h5" component="h3" color="primary">
										Actualizar Perfil
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
					                id="Telefono"
					                label="Telefono"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({ Telefono: input.target.value })}}
					                fullWidth
					                value={this.state.Telefono}
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
								    <Button variant="contained" color="primary" onClick={this.actualizar}>
							              Actualizar
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
      actualizarPerfil: (nombre, correo, sexo, telefono, ID, fechaNacimiento) => dispatch({type:'actualizarPefil', payload: { ID, fechaNacimiento, nombre, correo, sexo, telefono }})
  };
};


export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(ActualizarPerfil));