import React from 'react'

const Order = (props) => {
 return (
    <div>
        <h2>Amount: {props.amount}</h2>
        <h3>{props.name}</h3>
    </div>
 )
}

export default Order
