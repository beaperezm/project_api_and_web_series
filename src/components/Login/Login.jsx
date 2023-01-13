import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../styles/Form.scss';

function Login (){
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate(); 
    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }
    const handleClick = (event) => {
        event.preventDefault();
        axios.post('https://proyecto-react-api.vercel.app/users/login', user)
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                navigate('/series')
            }
        })
        setUser({email: '', password: ''})
    }
    return (
        <div className="divForm">
            <form action="" className="form">
                <label className="form__label" htmlFor="email">Email</label>
                <input type="text" className="form__input" id='email' onChange={handleChange} value={user.email}/>
                <label className="form__label" htmlFor="password">Password</label>
                <input type="text" className="form__input" id="password" onChange={handleChange} value={user.password}/>
                <button onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login; 