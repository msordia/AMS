import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PageHeader from '../../components/PageHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import LeftNavTaxista from '../../components/LeftNavTaxista';

import './DetallesTaxi.css';

class DetallesTaxi extends Component {
	render() {
		return(
			<div>
				<PageHeader Description="Tu Perfil"/>
				<Grid container>
					<Grid item xs={1}>
						<LeftNavTaxista />
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
									<div className="InnerPaperDivider">
										<Divider />
										<Divider />
									</div>
									<Typography variant="h4" component="h3" color="primary">
										Taxi
									</Typography>
									<Typography variant="h5" component="h3">
										Folio: 1123
									</Typography>
									<Typography variant="h5" component="h3">
										Marca: Toyota
									</Typography>
									<Typography variant="h5" component="h3">
										Modelo: Corolla
									</Typography>
									<Typography variant="h5" component="h3">
										Placas: SLS-98-54
									</Typography>
									<Typography variant="h5" component="h3">
										Color: Rojo
									</Typography>
								</div>
							</Paper>
						</div>
						<Button variant="contained" color="primary" onClick={this.logout} className="Login_Button">
		              		Actualizar Perfil
		            	</Button>
					</Grid>
				</Grid>
				Hello
			</div>
			);
	}

}


export default DetallesTaxi;