import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import '../../App.css'

export default function SignInPage() {
    let [email, setEmail] = useState([]);
    let [password, setPassword] = useState([]);
    let [errorMessage, setErrorMessage] = useState([]);

    let navigate = useNavigate();

    const goHome = () => {
        navigate("/orders");
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();
        console.log('form submitted');

        const postData = {
          email: email,
          password: password
        };

        try {
          const res = await axios.post("http://localhost:8088/api/login", postData)
            .then((response => {
                console.log(response)
                const result = {
                    status: response.status + "-" + response.statusText,
                    headers: response.headers,
                    data: response.data,
                };
                if (response.data.success) {
                    localStorage.setItem("token", response.data.token)
                    goHome();
                }
            }));
        } catch (err) {
            setErrorMessage(err.response?.data.error);
        }
    }

    const onChangeEmail =  async (e) => {
        setEmail(e)
    }

    const onChangePassword =  async (e) => {
        setPassword(e)
    }

    return (
        <div className="w-full flex justify-center">
        <div className="text-center m-5-auto px-10">
            <h2 className="font-extralight">Sign in</h2>
            {errorMessage && <div className="error"><p>{errorMessage}</p></div>}
            <form className="inline-block bg-grey-300 border border-2 border-grey-300 rounded-sm p-8 mt-8 mb-4 float-left text-sm m-0 p-0" action="/home" onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="float-left text-sm m-0 p-0">Email address</label><br/>
                    <input className="w-60 p-1 border rounded-sm" type="text" name="email" value={email} onChange={e => onChangeEmail(e.target.value)} required />
                </div>
                <div className="mt-4">
                    <label className="float-left text-sm m-0 p-0">Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input className="w-60 p-1 border rounded-sm" type="password" name="password" value={password} onChange={e => onChangePassword(e.target.value)} required />
                </div>
                <div className="mt-4">
                    <button className="mt-3" id="sub_btn" type="submit">Login</button>
                </div>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    </div>
    )
}
