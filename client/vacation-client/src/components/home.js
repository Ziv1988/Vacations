import React, { useState, useEffect } from 'react';

export default function Loginto({ user }) {

    let [users1, setUsers1] = useState('hello users');

    return(
    <h1>{users1}</h1>
    )
}