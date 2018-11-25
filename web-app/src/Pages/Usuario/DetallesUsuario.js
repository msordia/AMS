import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PageHeader from '../../components/PageHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import LeftNavUsuario from '../../components/LeftNavUsuario';
import { withRouter } from 'react-router-dom';

import './DetallesUsuario.css';

class DetallesUsuario extends Component {

	actualizarPerfil = () => {
		this.props.history.push('/actualizarPerfil');
	}

	render() {
		return(
			<div>
				<PageHeader Description="Tu Perfil"/>
				<Grid container>
					<Grid item xs={1}>
						<LeftNavUsuario />
					</Grid>
					<Grid item xs={11}>
						<div className="PreMainPaper">
							<Paper>
								<div className="InnerPaperPadd">
									<Typography variant="h4" component="h3" color="primary">
									Bienvenido Juan
									</Typography>
									<div className="InnerPaperDivider">
										<Divider />
										<Divider />
									</div>
									<Typography variant="h5" component="h3">
										Correo: juan@hotmail.com
									</Typography>
									<Typography variant="h5" component="h3">
										Telefono: 8117226390
									</Typography>
									<Typography variant="h5" component="h3">
										Fecha de Nacimiento: 1983-03-09
									</Typography>
								</div>
							</Paper>
						</div>
						<Button variant="contained" color="primary" onClick={this.actualizarPerfil} className="Login_Button">
		              		Actualizar Perfil
		            	</Button>
					</Grid>
				</Grid>
				Hello
			</div>
			);
	}

}


export default withRouter(DetallesUsuario);