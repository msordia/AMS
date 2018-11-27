import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageHeader from '../../components/PageHeader';

import './RegistrarTaxista.css';

class AdminPrecios extends Component {

	constructor(props) {
		super(props);

	}


	render(){
			return(
				<div>
					<PageHeader Description="Precio por Kilometraje" />
					<div>
		     			<div className="ActualizarPaper">
			     			<Paper className="ActualizarPaperInterno">
									

									<div className="InnerPaperPadd">
									<Typography variant="h4" component="h3" color="primary">
									Precio por Kilometraje {this.props.Nombre}
									</Typography>
									</div>
									
									<Typography variant="h5" component="h3">
										Actual: ${this.props.correo}
									</Typography>
				
							    <div className="ActualizarBottones">
								    
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

export default withRouter(AdminPrecios);