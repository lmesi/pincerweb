import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import Order from '../../components/Order/Order'
import firebase from '../../firebase'

function HandleOrders(name) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('order')
            .where('restaurant', "==", name).onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setOrders(newOrders)
            })
    }, [name])


    return orders
}

const Orders = (props) => {
    const orders = HandleOrders(props.user?props.user.displayName:'Me')
    
    return (
        <div>
            <h1>Orders to {props.user?props.user.displayName:'Me'} </h1>
            {orders.map((order) => 
                    <Order key={order.id} order={order} />
            )}
        </div>
    )
}

export default Orders
