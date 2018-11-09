import React, { Component } from 'react';
import logo from '../assets/transpais_logo.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

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
    console.log('LoggedIn' + this.props.loggedIn);
    this.props.tryLogIn(0, this.state.username);
    this.props.history.push('/administrador');
    console.log('Your username is ' +  this.state.username + ' and password is ' + this.state.password);
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
                />
            </form>

            <form>
              <TextField
              id="password"
              label="password"
              className="TextFieldS"
              type="password"
              margin="dense"
              variant="filled"
              onChange={this.changePassword}
              value={this.state.password}
              />
            </form>
          </div>
          <Button variant="contained" color="primary" onClick={this.logIn}>
            Log In
          </Button>
        </header>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

const mapDispatchtoProps = dispatch => {
  return {
      tryLogIn: (uId, userName) => dispatch({type: 'LogIn', payload: {loggedIn: true, uId: uId, userName: userName}})
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(Login));