import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {},
  cardOuter: {
    minWidth: 275,
    backgroundColor: 'gray',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px'
  },
  button: {}
});

const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <h3>{props.name}</h3>
        <h2>Amount: {props.amount}</h2>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="small">Done</Button>
      </CardActions>
    </Card>
  );
}

const Order = ({order}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardOuter}>
        <h2>Table: {order.table}</h2>
        {order.dishes.map(element =>
          <SimpleCard name={element.name} amount={element.amount}/>
        )}
      </CardContent>
    </Card>
 )
}

export default Order
