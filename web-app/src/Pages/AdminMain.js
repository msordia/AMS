import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ItemCard from '../components/ItemCard.js';
import logo from '../assets/transpais_logo.png';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import './AdminMain.css';


class AdminMain extends Component {

	constructor(props) {
    super(props);
    this.administrarTaxis = this.administrarTaxis.bind(this);
    this.verUsuarios = this.verUsuarios.bind(this);
    this.administrarPrecios = this.administrarPrecios.bind(this);
    this.administrarEncuestas = this.administrarEncuestas.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  administrarTaxis(event) {
  		this.props.history.push('/adminTaxis');
  }

  verUsuarios(event) {
  		this.props.history.push('/adminUsuarios');
  }

  administrarPrecios(event) {
  		this.props.history.push('/adminPrecios');
  }

  administrarEncuestas(event) {
  		this.props.history.push('/adminEncuestas');
  }

  goBack(event) {
  		this.props.history.goBack();
  }


	render() {
			return (
				<div className="Main-header">
						<img src={logo} className="App-logo"alt="logo" />
						<Grid container>
							<Grid item xs={12} >
								<Grid container justify='center' spacing={16} alignItems="center">
									<Grid key='1' item item xs={3}>
											<ItemCard className='Grid' itemTitle='Administrar Taxis' itemDescription='Enterar para añadir y borrar taxis' onClickO={this.administrarTaxis}/>
									</Grid>
									<Grid key='2' item item xs={3}>
										<ItemCard itemTitle='Ver Usuarios' itemDescription='Entrar para ver la información de los usuarios'  onClickO={this.verUsuarios}/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} className='ItemGrid'>
								<Grid container justify='center' spacing={16} alignItems="center">
									<Grid key='3' item xs={3}>
										<ItemCard itemTitle='Administrar Precios' itemDescription='Entrar para administrar los precios por kilometro' onClickO={this.administrarPrecios}/>
									</Grid>
									<Grid key='4' item xs={3}>
										<ItemCard itemTitle='Encuestas' itemDescription='Entrar para ver y modificar las encuestas' onClickO={this.administrarEncuestas}/>
									</Grid>
								</Grid>
							</Grid>
							<Grid container justify='center'>
								<Button variant="contained" color="primary" onClick={this.goBack}>
				            		Log out
				          		</Button>
							</Grid>	
		          		</Grid>
				</div>
			);
	}

}

export default withRouter(AdminMain);