import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../styles/Register.scss';

function Register ({handleOption}){
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setNewUser({...newUser, [event.target.id]: event.target.value})
    }
    const handleInput = () => {
        handleOption('All')
    }
    const handleClick = (event) => {
        event.preventDefault();
        axios.post('https://proyecto-react-api.vercel.app/users/register', newUser)
        .then((response) => {
            if(response.status === 201){
                alert('Registrado con exito')
            }
        })
        setNewUser({email: '', password: ''})
    }
    return (
        <div className="divForm">
            <form action="" className="form">
                <label className="form__label" htmlFor="email">Email</label>
                <input type="text" className="form__input" id='email' onChange={handleChange} value={newUser.email}/>
                <label className="form__label" htmlFor="password">Password</label>
                <input type="text" className="form__input" id="password" onChange={handleChange} value={newUser.password}/>
                <button onClick={handleClick}>Registrar</button>
            </form>
            <p className="home__button"><Link className="css-button-fully-rounded--grey " to="/" onClick={handleInput}>HOME</Link></p>
        </div>
    )
}

export default Register; 