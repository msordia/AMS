import React, { Component } from 'react';
import axios from 'axios'
import logo from '../assets/transpais_logo.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

const url = 'http://127.0.0.1:5000'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  changeUsername(event){
    this.setState({username: event.target.value});
  }

  changePassword(event){
    this.setState({password: event.target.value})
  }

  logIn(event) {
    axios.get(`${url}/login`, {
	params: {
	  username: this.state.username,
	  password: this.state.password	
	}
	})
	.then((response) => {
		const resJson = response.data;
    if(resJson == "Invalid Login") {
      this.setState({
        username: '',
        password: ''
      });
    }
    if(resJson.tipo == "Taxista"){
      this.props.tryLogIn(resJson.id, resJson.username, resJson.nombre, resJson.fechaDeNacimiento, resJson.sexo, resJson.telefono);
      this.props.history.push('/detallesTaxi');
    }
    if(resJson.tipo == "Cliente"){
      this.props.tryLogIn(resJson.id, resJson.username, resJson.nombre, resJson.fechaDeNacimiento, resJson.sexo, resJson.telefono);
      this.props.taxiLogIn(resJson.marca, resJson.modelo, resJson.placas, resJson.color);
      this.props.history.push('/detallesUsuario');
    }
    if(resJson.tipo == "Administrador"){
      this.props.tryLogIn(resJson.id, resJson.username, resJson.nombre, resJson.fechaDeNacimiento, resJson.sexo, resJson.telefono);
      this.props.history.push('/administrador');
    }
		})
	.catch(function (error){
		console.log(error);
	})
    //this.props.tryLogIn(0, this.state.username);
    console.log('Your username is ' +  this.state.username + ' and password is ' + this.state.password);
  }

  registrarse = () => {
    this.props.history.push('/registrarUsuario');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"alt="logo" />
          <p>
            Sign In
          </p>
          <div className="InputForm">
            <form>
              <TextField
                id="username"
                label="username"
                className="TextFieldS"
                margin="dense"
                variant="filled"
                onChange={this.changeUsername}
                value={this.state.username}
                color="inherit"
                />
            </form>

            <form>
              <TextField
              id="password"
              label="password"
              className="TextFieldS"
              InputProps={{
                className: "TextFieldInput"
              }}
              type="password"
              margin="dense"
              variant="filled"
              onChange={this.changePassword}
              value={this.state.password}
              />
            </form>
          </div>
          <div>
           <Button variant="contained" color="primary" onClick={this.logIn} className="Login_Button">
              Log In
            </Button>
            <Button variant="contained" color="primary" onClick={this.registrarse} className="Login_Button">
              Crear Usuario
            </Button>
          </div>
        </header>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

const mapDispatchtoProps = dispatch => {
  return {
      tryLogIn: (ID, correo, Nombre, FechaNacimiento, Sexo, Telefono) => dispatch({type: 'LogIn', payload: {loggedIn: true, ID, correo, Nombre, FechaNacimiento, Sexo, Telefono}}),
      taxiLogIn: (Modelo, Marca, Placas, Color) => dispatch({type: 'TaxiLogIn', payload: { Modelo, Marca, Placas, Color }})
      
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(Login));
