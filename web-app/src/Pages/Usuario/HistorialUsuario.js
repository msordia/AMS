import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import logo from '../../assets/transpais_logo.png';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PageHeader from '../../components/PageHeader'
import LeftNavUsuario from '../../components/LeftNavUsuario';

import './HistorialUsuario.css'

let id = 0;
function createData(nombreTaxista, fecha, origen, destino, costo) {
  id += 1;
  return { id, nombreTaxista, fecha, origen, destino, costo};
}

  const rows = [
    createData('Osvaldo', '2017-10-25 8:36', 'Nuevo Sur', 'ITESM', 30.14),
    createData('Osvaldo', '2017-10-25 8:36', 'Nuevo Sur', 'ITESM', 30.14),
    createData('Osvaldo', '2017-10-25 8:36', 'Nuevo Sur', 'ITESM', 30.14),
    createData('Osvaldo', '2017-10-25 8:36', 'Nuevo Sur', 'ITESM', 30.14),
];


class HistorialUsuario extends Component {

	constructor(props) {
    	super(props);
    	this.backAdmin = this.backAdmin.bind(this);
  	}

  	backAdmin(event) {
  		this.props.history.goBack();
  	}

	render() {
			return (
				<div>
					<PageHeader Description="Historial de Viajes" />
					<Grid container>
						<Grid item xs={1}>
							<LeftNavUsuario />
						</Grid>
						<Grid item xs={11}>
						<div className="HistorialBody">	
							<div className="GoBackB">
								<Button variant="contained" color="primary" onClick={this.backAdmin} className="GoBackB">
									Go Back
								</Button>
							</div>
							<Card className='PaperStyle'>
						      <Table>
						        <TableHead>
						          <TableRow>
						            <TableCell>ID</TableCell>
						            <TableCell numeric>Nombre Taxista</TableCell>
						            <TableCell>Fecha</TableCell>
						            <TableCell>Origen</TableCell>
						            <TableCell>Destino</TableCell>
						            <TableCell>Costo</TableCell>
						          </TableRow>
						        </TableHead>
						        <TableBody>
						          {rows.map(row => {
						            return (
						              <TableRow key={row.id}>
						              <TableCell numeric>{row.id}</TableCell>
						              <TableCell numeric>{row.nombreCliente}</TableCell>
						              <TableCell >{row.fecha}</TableCell>
						              <TableCell >{row.origen}</TableCell>
						              <TableCell >{row.destino}</TableCell>
						              <TableCell >{row.costo}</TableCell>
						                <TableCell> 
						                	<Button variant="contained" color="primary" onClick={this.backAdmin}>
						                		Ir
						                	</Button>
						                </TableCell>
						              </TableRow>
						            );
						          })}
						        </TableBody>
						      </Table>
						    </Card>
						</div>
						</Grid>
					</Grid>
				</div>
			);
		}

}


export default withRouter(HistorialUsuario);