import React, { Component } from 'react';
import Login from './Pages/Login.js';
import AdminMain from './Pages/AdminMain.js';
import AdminTaxis from './Pages/Admin/AdminTaxis.js';
import AdminEncuestas from './Pages/Admin/AdminEncuestas.js';
import AdminPrecios from './Pages/Admin/AdminPrecios.js';
import VerUsuarios from './Pages/Admin/VerUsuarios.js';
import DetallesTaxi from './Pages/Taxista/DetallesTaxi';
import HistorialTaxi from './Pages/Taxista/HistorialTaxi';
import DetallesUsuario from './Pages/Usuario/DetallesUsuario';
import HistorialUsuario from './Pages/Usuario/HistorialUsuario';
import ActualizarPerfil from './Pages/ActualizarPerfil';
import RegistrarUsuario from './Pages/Usuario/RegistrarUsuario';
import RegistrarFormaDePago from './Pages/Usuario/RegistrarFormaDePago';
import ViajeActualUsuario from './Pages/Usuario/ViajeActualUsuario';
import ViajeActualTaxista from './Pages/Taxista/ViajeActualTaxista';
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
              render={() => (
                  <AdminMain/>
                )} />
               <Route
              exact
              path ='/adminTaxis'
              render={() => (
                  <AdminTaxis/>
                )} />
              <Route
              exact
              path ='/adminEncuestas'
              render={() => (
                  <AdminEncuestas/>
                )} />
              <Route
              exact
              path ='/adminPrecios'
              render={() => (
                  <AdminPrecios/>
                )} />
              <Route
              exact
              path ='/adminUsuarios'
              render={() => (
                  <VerUsuarios/>
                )} />
              <Route
              exact
              path ='/detallesTaxi'
              render={() => (
                  <DetallesTaxi/>
                )} />
              <Route
              exact
              path ='/historialTaxi'
              render={() => (
                  <HistorialTaxi/>
                )} />
              <Route
              exact
              path ='/detallesUsuario'
              render={() => (
                  <DetallesUsuario/>
                )} />
              <Route
              exact
              path ='/historialUsuario'
              render={() => (
                  <HistorialUsuario/>
                )} />
              <Route
              exact
              path ='/actualizarPerfil'
              render={() => (
                  <ActualizarPerfil/>
                )} />
              <Route
              exact
              path ='/registrarUsuario'
              render={() => (
                  <RegistrarUsuario/>
                )} />
               <Route
              exact
              path ='/registrarFormaDePago'
              render={() => (
                  <RegistrarFormaDePago/>
                )} />
              <Route
              exact
              path ='/viajeActualUsuario'
              render={() => (
                  <ViajeActualUsuario/>
                )} />
              <Route
              exact
              path ='/viajeActualTaxi'
              render={() => (
                  <ViajeActualTaxista/>
                )} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
