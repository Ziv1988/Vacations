import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users({ user }) {


    const [form, setValues] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(form)
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`http://localhost:3001/auth/signup`, {form})
            .then(response=>{console.log(response)})
            .catch(error=>{console.log(error)})
        }


    return (
        <div>
            <h1> Register </h1>
            <div className="row">
                <div className="form-group row">
                    <label>first name</label>
                    <input
                        className="ml-5"
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={updateField}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group row">
                    <label>last name</label>
                    <input
                        className="ml-5"
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={updateField}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group row">
                    <label>username</label>
                    <input
                        className="ml-5"
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={updateField}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group row">
                    <label>password</label>
                    <input
                        className="ml-5"
                        type="text"
                        name="password"
                        value={form.password}
                        onChange={updateField}
                    />
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="form-group text-center">
                    <button type="button" className="btn btn-primary center-block" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>

    )
}