import React from 'react'
import { Link } from 'react-router-dom'
import httpClient from "../http-client";

export default function HomePage() {
    let [techs, setTechs] = React.useState([]);
    let [keys, setKeys] = React.useState([]);


    const componentDidMount = () => {
        httpClient.get('/technicians')
            .then(res => {
                setTechs(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        httpClient.get('/keys')
            .then(res => {
                setKeys(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div>
            <div>
                <div>
                    <h1>New Order</h1>
                </div>
                <div>
                    <label>Select Key</label>
                    <select>
                        {keys.map((value, index) => {
                        return 
                        <option>
                            {value.name}
                        </option>
                        })}
                    </select>
                </div>
                <div>
                    <label></label>
                    <select>
                        {technicians.map((value, index) => {
                        return 
                        <option>
                            {value.last_name}, {value.first_name}
                        </option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}
