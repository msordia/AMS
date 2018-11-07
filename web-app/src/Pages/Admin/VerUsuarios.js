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
import './AdminTaxis.css';

let id = 0;
function createData(nombre, correo) {
  id += 1;
  return { id, nombre, correo};
}

  const rows = [
  createData('Juan', 'Juan@hotmail.com'),
    createData('Osvaldo', 'Osvaldo@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
    createData('Ximena', 'Ximena@hotmail.com'),
];


class VerUsuario extends Component {

	constructor(props) {
    	super(props);
    	this.backAdmin = this.backAdmin.bind(this);
  	}

  	backAdmin(event) {
  		this.props.history.goBack();
  	}

	render() {
			return (<div className="Taxista-header">	
				<img src={logo} className="App-logo"alt="logo" />
					<Button variant="contained" color="primary" onClick={this.backAdmin} className='GoBackB'>
							Go Back
					</Button>
				<Card className='PaperStyle'>
			      <Table>
			        <TableHead>
			          <TableRow>
			            <TableCell>ID</TableCell>
			            <TableCell numeric>Nombre</TableCell>
			            <TableCell numeric>Correo</TableCell>
			            <TableCell>Ver Detalles</TableCell>
			          </TableRow>
			        </TableHead>
			        <TableBody>
			          {rows.map(row => {
			            return (
			              <TableRow key={row.id}>
			              <TableCell numeric>{row.id}</TableCell>
			                <TableCell component="th" scope="row">
			                  {row.nombre}
			                </TableCell>
			                <TableCell numeric>{row.correo}</TableCell>
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
			);
		}

}


export default withRouter(VerUsuario);