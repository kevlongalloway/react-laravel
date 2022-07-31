import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import httpClient from "../../http-client";

class CreateOrderPage extends React.Component {
    constructor () {
        super();

        this.state = {
            redirect: null,
            techs: {},
            keys: {},
            form: {
                name: "",
                techId: "1",
                keyId: "1",
            },
            errorMessage: "",
        };
    }



    componentDidMount () {
        let technicians = httpClient.get('/technicians')
            .then(res => this.setState({ techs: res.data }))
            .catch(function (error) {
                console.log(error);
        });

        let keys = httpClient.get('/keys')
            .then(res => this.setState({ keys: res.data }))
            .catch(function (error) {
                console.log(error);
        });
    }

    handleKeyChange = (e) => {
        this.setState(prevState => ({
            ...prevState,
            form: {
                name: this.state.form.name,
                techId: this.state.form.techId,
                keyId: e
            }
        }))
        setTimeout(() => {
            console.log(this.state)
        }, 1000)
    }

    handleTechChange = (e) => {
        this.setState(prevState => ({
            ...prevState,
            form: {
                name:this.state.form.name,
                techId: e,
                keyId: this.state.form.keyId
            }
        }))  
    }

    handleNameChange = (e) => {
        this.setState(prevState => ({
            ...prevState,
            form: {
                name: e,
                techId: this.state.form.techId,
                keyId: this.state.form.keyId
            }
        }))  
    }

    submitForm = async (e) => {
        e.preventDefault();

        const postData = {
          name: this.state.form.name,
          key_id: this.state.form.keyId,
          technician_id: this.state.form.techId
        };

        try {
          const res = await httpClient.post("/orders", postData)
            .then((response => {
                console.log(response.data.error)
                const result = {
                    status: response.status + "-" + response.statusText,
                    headers: response.headers,
                    data: response.data,
                };
                if (response.data.success) {
                    this.goHome()
                }
            }));

            

            
          
        } catch (err) {
            this.setState(prevState => ({
                ...prevState,
                errorMessage: err.response?.data.error
            })) 
            setTimeout(() => {
                console.log(this.state.errorMessage)
            }, 1000)
        }
    }

    goHome () {
        window.location.href = '/orders'
    }



  render() {
    return (
        <div>
            <div className="container text-center p-8  justify-center">
                <div className="mt-5 flex justify-center items-center space-x-5">
                    <h1 className="font-sans text-3xl">Create Order</h1>
                </div>
                <div className="flex justify-center w-full">
                    <div className="mt-5 flex justify-left items-center space-x-5 w-8/12">
                        <Link to="/orders">
                            <button className="rounded-md bg-secondary py-2 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Back</button>
                        </Link>  
                    </div>
                </div>
                <div className="mt-2 flex justify-center items-center">
                    <div className="w-8/12 border border-gray-400 mt-2 py-2 px-16 rounded-lg">
                        <div className="flex justify-center items-center space-x-5 m-2 w-full">
                            {this.state.errorMessage && <div className="error bg-red-500 bg-opacity-90 border border-gray-400 text-white py-4 px-8 rounded-md w-full"><p>{this.state.errorMessage}</p></div>}
                        </div>

                        <form onSubmit={this.submitForm} className="text-center">
                            <div className="row justify-center">
                                <label>Name</label>
                                <input name="name" placeholder="Enter Name" onChange={({ target: { value } }) => this.handleNameChange(value)} className="border border-gray-400 py-1 px-6 rounded-md w-full text-center" />
                            </div>
                            <div className="row justify-center mt-2">
                                <label>Select Key</label>
                                <select name="key" onChange={({ target: { value } }) => this.handleKeyChange(value)} className="border border-gray-400 py-1.5 px-6 rounded-md text-center w-full">
                                    {Object.values(this.state.keys).map((value, index) => {
                                    return (
                                        <option value={value.id} key={value.id} >
                                            {value.name}
                                        </option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="row justify-center mt-2">
                                <label>Select Technician</label>
                                <select onChange={({ target: { value } }) => this.handleTechChange(value)} className="border border-gray-400 py-1.5 px-6 rounded-md text-center w-full">
                                    {Object.values(this.state.techs).map((value, index) => {
                                    return (
                                    <option value={value.id} key={value.id}>
                                        {value.last_name}, {value.first_name}
                                    </option>
                                    )
                                    })}
                                </select>
                            </div>
                            <div className="row justify-center my-4">
                                <button type="submit" className="rounded-md bg-primary py-2 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateOrderPage
