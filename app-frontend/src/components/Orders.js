import React from 'react'
import { Link } from 'react-router-dom'
import httpClient from "../http-client";

class Orders extends React.Component {
    constructor () {
        super();

        this.state = {
            orders: {},
            
        };
    }

    componentDidMount () {
        this.getOrders()
    }

    getOrders () {
        httpClient.get('/orders')
            .then(res => {
                this.setState({ orders: res.data })
            })
            .catch(function (error) {
                console.log(error);
        })
    }

    deleteResource (orderId) {

        httpClient.delete('/orders/' + orderId)
            .then(res => {
                this.getOrders()
            })
    }



  render() {
    return (
        <div className="container text-center">
            <div className="mb-5 flex justify-center items-center space-x-5">
                <h1 className="font-sans text-3xl">Orders</h1>
            </div>
            <div className="mb-5 flex justify-end items-center space-x-5">
                <Link to="/orders/create">
                    <button className="rounded-md bg-primary py-2 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">New Order</button>
                </Link>
            </div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                    {Object.values(this.state.orders).map((value, index) => {
                        console.log(value)
                    return <tr key={index}>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td><button className="border border-4 bg-yellow-400 text-white rounded-md py-1 px-4">edit</button></td>
                            <td><button onClick={() => this.deleteResource(value.id)} className="border border-4 bg-red-500 text-white rounded-md py-1 px-4">delete</button></td>
                        </tr>
                    })}
              </tbody>
            </table>
            
        </div>
        );
    }
}

export default Orders

