import React, { useState, useEffect } from 'react';

export default function Loginto({ user }) {

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');


    // function setData(){
    //     let [_user, setUser] = useState({firstName, lastName, userName, password})
    // }
    function handleUserName(e) {
        setUserName(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    // useEffect(function updateTitle() {
    //     firstName = setFirstName(userName + ' ' + lastName);
    //   });

    return (
        <div>
            <h1> Login </h1>
            <div className="row">
                <div className="form-group row">
                    <label>username</label>
                    <input
                        className="ml-5"
                        type="text"
                        value={userName}
                        onChange={handleUserName}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group row">
                    <label>password</label>
                    <input
                        className="ml-5"
                        type="text"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
            </div>
        </div>
    )
}