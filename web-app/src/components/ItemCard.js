import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './ItemCard.css';

class ItemCard extends Component {

	constructor(props) {
    super(props);
  }

	render() {
			return (
				<div className="ItemCard">
						<Card className="CardClass">
							<CardActionArea>
						        <CardContent>
						          <Typography gutterBottom variant="h5" component="h2">
						            {this.props.itemTitle}
						          </Typography>
						          <Typography component="p">
						            {this.props.itemDescription}
						          </Typography>
						        </CardContent>
						    </CardActionArea>
						    <CardActions>
						        <Button onClick={this.props.onClickO} fullWidth={true} variant="contained" size="large" color="primary">
						          Ir
						        </Button>
						    </CardActions>
						</Card>
				</div>
			);
	}

}

export default ItemCard;