import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import Order from '../../components/Order/Order'
import firebase from '../../firebase'

function HandleOrders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setOrders(newOrders)
            })
    }, [])


    return orders
}

const Orders = (props) => {
    const orders = HandleOrders()
    
    return (
        <div>
            <h1>Orders</h1>
            {orders.map((order) => 
                <li key={order.id}>
                    <Order amount={order.amount} name="kaja" />
                </li>
            )}
        </div>
    )
}

export default Orders
