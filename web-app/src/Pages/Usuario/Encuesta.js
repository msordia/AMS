import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageHeader from '../../components/PageHeader';


// import StarRatingComponent from 'react-star-rating-component';
// import StarRatings from './react-star-ratings';

import './HistorialUsuario.css';
import { number } from 'prop-types';

class Encuesta extends Component {

	constructor(props) {
        super(props);
        this.state = {
			Estrellas: 1,
			
		}

	}

	render(){
			return(
				<div>
					<PageHeader Description="Encuesta" />
					<div>
		     			<div className="ActualizarPaper">
			     			<Paper className="ActualizarPaperInterno">
			     				<Typography variant="h5" component="h3" color="primary">
										Ingrese su retroalimentación
								</Typography>
								<div className="InnerPaperDivider">
										<Divider />
										<Divider />
								</div>
								<TextField
					                id="Estrellas"
					                label="Estrellas"
					                className="TextFieldS"
					                margin="dense"
					                variant="outlined"
					                onChange={(input) => {this.setState({ Estrellas: input.target.value })}}
                                    fullWidth
                                    type={number}
					                value={this.state.Estrellas}
					                color="primary"
					            />
                                
							    <div className="ActualizarBottones">
								    <Button variant="contained" color="primary" onClick={this.agregar}>
							              Enviar
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

export default withRouter(Encuesta);