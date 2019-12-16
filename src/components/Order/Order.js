import React from 'react'

import './order.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    
  },
  cardOuter: {
    minWidth: 275,
    backgroundColor: 'gray',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px'
  },
  buttonDone: {
    backgroundColor: 'white',
    '&:hover': {
      background: "#32CD32",
   },
  },
  buttonDelete: {
    backgroundColor: 'white',
    '&:hover': {
      background: "#FF4500",
   },
  }
});

const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <h3>{props.name}</h3>
        <h2>Quantity: {props.quantity}</h2>
      </CardContent>
    </Card>
  );
}

const Order = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardOuter}>
        <h2>Table: {props.order.table}</h2>
        {props.order.dishes.map(element =>
          <SimpleCard 
            name={element.name} 
            quantity={element.quantity} 
            key={element.name}  />
        )}
        <CardActions>
              <Button className={classes.buttonDone} size="small" onClick={() =>{props.setOrderDone(props.order.id)}}>Done</Button>
              <Button className={classes.buttonDelete} size="small" onClick={() =>{props.deleteOrder(props.order.id)}}>Delete</Button>
        </CardActions>
      </CardContent>
    </Card>
 )
}

export default Order
