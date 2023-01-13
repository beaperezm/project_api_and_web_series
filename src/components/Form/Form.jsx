import React from "react";
import { useState } from "react";
import axios from 'axios';
import '../../styles/Form.scss';

function Form (){
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setNewUser({...newUser, [event.target.id]: event.target.value})
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
        </div>
    )
}

export default Form; 