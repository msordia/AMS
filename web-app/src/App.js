import React, { Component } from 'react';
import Login from './Pages/Login.js';
import AdminMain from './Pages/AdminMain.js';
import AdminTaxis from './Pages/Admin/AdminTaxis.js';
import AdminEncuestas from './Pages/Admin/AdminEncuestas.js';
import AdminPrecios from './Pages/Admin/AdminPrecios.js';
import VerUsuarios from './Pages/Admin/VerUsuarios.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        uId: -1
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path ='/'
              render={() => (
                  <Login />
                )} />
            <Route
              exact
              path ='/administrador'
              render={(uId) => (
                  <AdminMain/>
                )} />
               <Route
              exact
              path ='/adminTaxis'
              render={(uId) => (
                  <AdminTaxis/>
                )} />
              <Route
              exact
              path ='/adminEncuestas'
              render={(uId) => (
                  <AdminEncuestas/>
                )} />
              <Route
              exact
              path ='/adminPrecios'
              render={(uId) => (
                  <AdminPrecios/>
                )} />
              <Route
              exact
              path ='/adminUsuarios'
              render={(uId) => (
                  <VerUsuarios/>
                )} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
