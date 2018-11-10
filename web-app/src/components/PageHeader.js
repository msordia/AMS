import React, { Component } from 'react';
import logo from '../assets/transpais_logo.png';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class PageHeader extends Component {

render() {
	return(
		<div>
			<div className="Admin-header">
				<img src={logo} className="Admin-Logo"alt="logo" />
				<Typography variant="h5" component="h3" className="Admin-bienvenido" color="inherit">
			        {this.props.Description}
				</Typography>
			</div>
			<Divider />
		</div>
		);
		}
	}

export default PageHeader;